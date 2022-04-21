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
import { ElementInterface } from '@/eva/interface/elementInterface';

@Module({ dynamic: true, store, name: 'page' })
class Page extends VuexModule {
  public pageData: ElementInterface[] = [
    {
      html: 'div',
      class: 'first-div',
      arr: [
        {
          html: 'button',
          class: 'first-button',
          text: 'hello',
        },
        {
          html: 'span',
          class: 'first-span',
          text: ' world',
          arr: [
            {
              html: 'a',
              class: 'first-a',
              text: ' www.baidu.com',
            },
          ],
        },
        {
          html: 'input',
          class: 'first-input',
          text: 'hello',
          arr: [
            {
              html: 'button',
              text: 'ok',
              class: 'second-button',
            },
          ],
        },
        {
          html: 'div',
          class: 'second-div',
          arr: [
            {
              html: 'div',
              class: 'third-div',
              arr: [
                {
                  html: 'button',
                  class: 'third-button',
                  text: 'hello',
                },
                {
                  html: 'button',
                  class: 'forth-button',
                  text: 'world',
                },
              ],
            },
            {
              html: 'div',
              class: 'fifth-div',
              arr: [
                {
                  html: 'button',
                  class: 'fifth-button',
                  text: 'hello',
                },
                {
                  html: 'button',
                  class: 'six-button',
                  text: 'world',
                },
              ],
            },
          ],
        },
        {
          html: 'h1',
          class: 'first-h',
          text: 'hello',
        },
      ],
    },
  ];
  public dragStartElement: string[] = [];
  public dragElement: string[] = [];
  public lastAdd: string[] = [];

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
