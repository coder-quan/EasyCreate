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
  public pageData: ElementInterface[] = [
    {
      html: 'div',
      class: 'first-div',
      arr: [],
      style: {},
    },
  ];
  // 拖拽元素的类名
  public dragStartElement: string[] = [];
  // 目标元素的类名
  public dragElement: string[] = [];
  // 上一次拖拽成功的类名
  public lastAdd: string[] = [];

  @Mutation
  private Set_PageData(element: ElementInterface) {
    this.pageData[0].arr?.push(element);
  }

  @Mutation
  private Reset_PageData() {
    this.pageData[0].arr?.splice(0);
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
  private Set_LastAdd(classArray: string[]) {
    this.lastAdd = classArray;
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
  public changeLastAdd(className: string[]) {
    this.Set_LastAdd(className);
  }
}

export const pageModule = getModule(Page);
