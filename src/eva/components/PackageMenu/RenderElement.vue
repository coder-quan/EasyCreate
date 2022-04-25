<script lang="ts">
  import { CreateElement } from 'vue';
  import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
  import { pageModule } from '@/store/modules/page';
  import { hasNoText, specialElement } from '@/eva/data/Components';
  import { addElement } from '@/utils/dragElement';
  import { isExist, isEqual } from '@/utils/array';
  import { CutClassName } from '@/utils/Regular';
  import { ElementInterface, Style } from '@/eva/interface/ElementInterface';
  import Bus from '@/utils/bus';
  import EaPassword from '@/views/components/EaPassword.vue';
  import EaCheckbox from '@/views/components/EaCheckbox.vue';
  import EaRadio from '@/views/components/EaRadio.vue';
  import EaMerryGoRound from '@/views/components/EaMerryGoRound.vue';
  // import EaPassword from '@/views/components/EaPassword.vue';

  @Component({
    name: 'RenderElement',
    components: { EaPassword, EaCheckbox, EaRadio, EaMerryGoRound },
  })
  export default class RenderElement extends Vue {
    @Prop({ type: Object, required: true })
    private readonly element!: ElementInterface;
    private render(createElement: CreateElement) {
      let arr: any = []; // 子节点数组
      let attrs: {
        draggable: boolean;
        readonly: boolean;
        value?: string;
        classname?: string;
      } = {
        draggable: this.$route.name === 'main',
        readonly: this.$route.name === 'main',
      };
      if (isExist(hasNoText, this.element.html))
        attrs.value = this.element.text;
      if (isExist(specialElement, this.element.html))
        attrs.classname = this.element.class;
      if (this.element.arr?.length)
        for (let item of this.element.arr)
          arr.push(
            createElement('render-element', {
              attrs: {
                element: item,
              },
            })
          );
      if (this.element.text && !isExist(hasNoText, this.element.html))
        arr.splice(0, 0, this.element.text);
      return createElement(
        this.element.html, // 标签名称
        {
          class: {
            [this.element.class]: true,
            outline: pageModule.showOutline,
          },
          on: {
            dragstart(e: any) {
              e.stopPropagation();
              pageModule.changeDragStartElement(e.target.className);
            },
            dragover(e: any) {
              let position: 'left' | 'middle' | 'right' = 'middle';
              if (e.offsetX > (e.target.scrollWidth * 2) / 3)
                position = 'right';
              else if (e.offsetX < e.target.scrollWidth / 3) position = 'left';
              e.stopPropagation();
              if (
                !isEqual(
                  pageModule.dragElement,
                  CutClassName(e.target.className)
                ) ||
                position !== pageModule.position
              ) {
                pageModule.changeDragElement(e.target.className);
                pageModule.changePosition(position);
                if (
                  pageModule.dragStartElement &&
                  pageModule.dragStartElement.length
                )
                  addElement(
                    [pageModule.pageData],
                    pageModule.dragStartElement,
                    pageModule.dragElement,
                    pageModule.position
                  );
              }
            },
            dragend(e: any) {
              e.stopPropagation();
              pageModule.changeDragStartElement('');
              pageModule.changeDragElement('');
            },
            click(e: any) {
              e.stopPropagation();
              Bus.$emit('show-dialog', e.target.className, true);
            },
          },
          attrs: {
            ...attrs,
          },
          directives: [
            {
              name: 'demo',
              value: this.element.style,
            },
          ],
        },
        arr // 子节点数组
      );
    }
  }
</script>
