<script lang="ts">
  import { CreateElement } from 'vue';
  import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
  import { pageModule } from '@/store/modules/page';
  import { hasNoText, specialElement } from '@/eva/data/Components';
  import { addElement } from '@/utils/dragElement';
  import { isExist } from '@/utils/array';
  import { ElementInterface } from '@/eva/interface/ElementInterface';
  import Bus from '@/utils/bus';
  import EaPassword from '@/views/components/EaPassword.vue';
  import EaCheckbox from '@/views/components/EaCheckbox.vue';
  import EaRadio from '@/views/components/EaRadio.vue';
  // import EaPassword from '@/views/components/EaPassword.vue';
  // import EaPassword from '@/views/components/EaPassword.vue';

  @Component({
    name: 'RenderElement',
    components: { EaPassword, EaCheckbox, EaRadio },
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
        draggable: true,
        readonly: true,
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
          },
          on: {
            dragstart(e: any) {
              e.stopPropagation();
              pageModule.changeDragStartElement(e.target.className);
            },
            dragover(e: any) {
              let position: 'left' | 'middle' | 'right' = 'middle';
              e.stopPropagation();
              pageModule.changeDragElement(e.target.className);
              if (e.offsetX > (e.target.scrollWidth * 2) / 3)
                position = 'right';
              else if (e.offsetX < e.target.scrollWidth / 3) position = 'left';
              if (
                pageModule.dragStartElement &&
                pageModule.dragStartElement.length
              )
                addElement(
                  [pageModule.pageData],
                  pageModule.dragStartElement,
                  pageModule.dragElement,
                  position
                );
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
