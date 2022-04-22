/*
 * @Description: 组件的数据，包括html部分和css部分
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
 */
import { ElementInterface } from '../interface/elementInterface';
export const hasNotSubtag: string[] = ['input', 'button', 'a'];

export const basisComponents: Map<string, string> = new Map([
  ['按钮', 'button'],
  ['输入框', 'input'],
  ['密码框', 'password'],
  ['单选框', 'radio'],
  ['多选框', 'checkbox'],
  ['链接', 'a'],
  ['标题', 'h'],
  ['段落', 'p'],
  ['粗体', 'strong'],
  ['斜体', 'i'],
  ['删除线文字', 's'],
  ['水平线', 'hr'],
  ['上标', 'sup'],
  ['下标', 'sub'],
  ['表格', 'table'],
  ['导航栏', 'nav'],
  ['走马灯', 'merry-go-round'],
  ['下拉表', 'select'],
  ['div', 'div'],
  ['span', 'span'],
]);

export const template: ElementInterface = {
  html: '',
  class: '',
  text: 'hello world',
};
