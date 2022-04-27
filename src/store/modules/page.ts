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
import { catchItem } from '@/utils/dragElement';
import Vue from 'vue';

@Module({ dynamic: true, store, name: 'page' })
class Page extends VuexModule {
  public pageData: ElementInterface = {
    html: 'div',
    class: 'first-div',
    arr: [],
    style: {
      value: {
        boxSizing: 'border-box',
        width: '100',
        height: '100',
        color: 'bfbfbf',
        backgroundColor: 'fff',
        display: 'block',
        position: '',
        order: '',
        flexDirection: '',
        flexWrap: '',
        justifyContent: '',
        alignItems: '',
        alignContent: '',
        textAlign: 'left',
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
    text: '',
  };
  // 拖拽元素的类名
  public dragStartElement: string[] = [];
  // 目标元素的类名
  public dragElement: string[] = [];
  // 是否显示边框
  public showOutline: boolean = false;
  // 拖动元素到目标元素的位置
  public position: 'left' | 'middle' | 'right' | '' = '';

  public clickClass: string = 'first-div';

  public baseData: ElementInterface = {
    html: 'div',
    class: 'first-div',
    arr: [],
    style: {
      value: {
        boxSizing: 'border-box',
        width: '100',
        height: '100',
        color: 'bfbfbf',
        backgroundColor: 'fff',
        display: 'block',
        position: '',
        order: '',
        flexDirection: '',
        flexWrap: '',
        justifyContent: '',
        alignItems: '',
        alignContent: '',
        textAlign: 'left',
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
    text: '',
  };

  @Mutation
  private Set_PageData(data: ElementInterface) {
    Vue.set(this, 'pageData', JSON.parse(JSON.stringify(data)));
  }

  @Mutation
  private Reset_PageData() {
    Vue.set(this, 'pageData', JSON.parse(JSON.stringify(this.baseData)));
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
  private Set_Position(position: 'left' | 'middle' | 'right' | '') {
    this.position = position;
  }

  @Mutation
  private Set_ClickClass(className: string) {
    this.clickClass = className;
  }

  @Action({ rawError: true })
  public changePageData(element: ElementInterface) {
    catchItem([this.pageData], [this.clickClass], (item, index) => {
      console.log(item[index]);
      item[index].arr?.push(element);
    });
  }

  @Action
  public chooseTemplate(data: ElementInterface) {
    this.Set_PageData(data);
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
  public changePosition(position: 'left' | 'middle' | 'right' | '') {
    this.Set_Position(position);
  }

  @Action
  public changeClickClass(className: string) {
    this.Set_ClickClass(className);
  }
}

export const pageModule = getModule(Page);
