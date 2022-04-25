/*
 * @Description: 新建的页面以及相关数据
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
 */
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { CutClassName } from '../../utils/Regular';
import { ElementInterface } from '@/eva/interface/ElementInterface';

@Module({ dynamic: true, store, name: 'page' })
class Page extends VuexModule {
  public pageData: ElementInterface = {
    html: 'div',
    class: 'first-div',
    arr: [
      {
        html: 'div',
        class: 'sec-div',
        arr: [
          {
            html: 'button',
            class: 's-button',
            text: 'hello',
            style: {
              value: {},
              unit: {},
            },
          },
          {
            html: 'input',
            class: 's-input',
            style: {
              value: {},
              unit: {},
            },
          },
        ],
        style: {
          value: {},
          unit: {},
        },
      },
      {
        html: 'div',
        class: 'third-div',
        arr: [
          {
            html: 'button',
            class: 'f-button',
            text: 'hello',
            style: {
              value: {},
              unit: {},
            },
          },
          {
            html: 'input',
            class: 'f-input',
            style: {
              value: {},
              unit: {},
            },
          },
        ],
        style: {
          value: {},
          unit: {},
        },
      },
    ],
    style: {
      value: {
        width: '100',
        height: '100',
        color: 'bfbfbf',
        backgroundColor: 'fff',
        display: 'block',
        order: '',
        flexDirection: '',
        flexWrap: '',
        justifyContent: '',
        alignItems: '',
        alignContent: '',
        textAlign: 'center',
        fontSize: '16',
        fontStyle: 'normal',
        fontWeight: '',
        top: '',
        right: '',
        bottom: '',
        left: '',
        lineHeight: '',
        paddingTop: '',
        paddingRight: '',
        paddingBottom: '',
        paddingLeft: '',
        marginTop: '',
        marginRight: '',
        marginBottom: '',
        marginLeft: '',
      },
      unit: {
        width: 'vw',
        height: 'vh',
        fontSize: 'px',
        fontWeight: 'px',
        top: 'px',
        right: 'px',
        bottom: 'px',
        left: 'px',
        lineHeight: 'px',
        paddingTop: 'px',
        paddingRight: 'px',
        paddingBottom: 'px',
        paddingLeft: 'px',
        marginTop: 'px',
        marginRight: 'px',
        marginBottom: 'px',
        marginLeft: 'px',
      },
    },
  };
  // 拖拽元素的类名
  public dragStartElement: string[] = [];
  // 目标元素的类名
  public dragElement: string[] = [];
  // 是否显示边框
  public showOutline: boolean = false;
  // 拖动元素到目标元素的位置
  public position: 'left' | 'middle' | 'right' = 'middle';

  @Mutation
  private Set_PageData(element: ElementInterface) {
    this.pageData.arr?.push(element);
  }

  @Mutation
  private Reset_PageData() {
    this.pageData.arr?.splice(0);
  }

  @Mutation
  private Set_DragStartElement(classArray: string[]) {
    this.dragStartElement = classArray;
  }

  @Mutation
  private Set_DragElement(classArray: string[]) {
    this.dragElement = classArray;
  }

  @Mutation
  private Set_Outline(flag: boolean) {
    this.showOutline = flag;
  }

  @Mutation
  private Set_Position(position: 'left' | 'middle' | 'right') {
    this.position = position;
  }

  @Action
  public changePageData(element: ElementInterface) {
    this.Set_PageData(element);
  }

  @Action
  public resetPageData() {
    this.Reset_PageData();
  }

  @Action
  public changeDragStartElement(className: string) {
    this.Set_DragStartElement(CutClassName(className));
  }

  @Action
  public changeDragElement(className: string) {
    this.Set_DragElement(CutClassName(className));
  }

  @Action
  public changeOutline(flag: boolean) {
    this.Set_Outline(flag);
  }

  @Action
  public changePosition(position: 'left' | 'middle' | 'right') {
    this.Set_Position(position);
  }
}

export const pageModule = getModule(Page);
