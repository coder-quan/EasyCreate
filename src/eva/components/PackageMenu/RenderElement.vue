<script lang="ts">
  import { CreateElement } from 'vue';
  import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
  import { pageModule } from '@/store/modules/page';
  import { addElement } from '@/utils/dragElement';
  import { ElementInterface } from '@/eva/interface/ElementInterface';
  import Bus from '@/utils/bus';

  @Component({
    name: 'RenderElement',
  })
  export default class RenderElement extends Vue {
    @Prop({ type: Object, required: true })
    private readonly element!: ElementInterface;
    private render(createElement: CreateElement) {
      let arr: any = []; // 子节点数组
      if (this.element.arr?.length)
        for (let item of this.element.arr)
          arr.push(
            createElement('render-element', {
              attrs: {
                element: item,
              },
            })
          );
      if (this.element.text) arr.splice(0, 0, this.element.text);
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
            draggable: true,
            readonly: true,
          },
        },
        arr // 子节点数组
      );
    }
  }
</script>
