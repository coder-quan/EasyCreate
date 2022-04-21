<script lang="ts">
  import { CreateElement } from 'vue';
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { pageModule } from '@/store/modules/page';
  import { addElement } from '@/utils/dragElement';
  import { ElementInterface } from '@/eva/interface/ElementInterface';

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
              e.stopPropagation();
              pageModule.changeDragElement(e.target.className);
              addElement(
                pageModule.pageData,
                pageModule.dragStartElement,
                pageModule.dragElement
              );
            },
            dragend(e: any) {
              e.stopPropagation();
              pageModule.changeDragStartElement('');
              pageModule.changeDragElement('');
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
