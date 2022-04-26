import { ElementInterface } from '../interface/ElementInterface';
export const hasNotSubtag: string[] = [
  'input',
  'button',
  'a',
  'ea-password',
  'ea-checkbox',
  'ea-radio',
  'ea-table',
  'ea-nav',
  'ea-merry-go-round',
  'ea-select',
];

// 特殊元素，文本只能通过value属性传值
export const hasNoText: string[] = ['input', 'ea-password'];

// 特殊元素，需要在组件的子元素添加类名
export const specialElement: string[] = [
  'ea-checkbox',
  'ea-radio',
  'ea-merry-go-round',
];
// 封装的组件,表格、导航栏、走马灯、下拉表
export const packageElement: string[] = [
  'ea-table',
  'ea-nav',
  'ea-merry-go-round',
  'ea-select',
];

export const basisComponents: Map<string, string> = new Map([
  ['按钮', 'button'],
  ['输入框', 'input'],
  ['密码框', 'ea-password'],
  ['单选框', 'ea-radio'],
  ['多选框', 'ea-checkbox'],
  ['链接', 'a'],
  ['h1', 'h1'],
  ['h2', 'h2'],
  ['h3', 'h3'],
  ['h4', 'h4'],
  ['h5', 'h5'],
  ['h6', 'h6'],
  ['段落', 'p'],
  ['粗体', 'strong'],
  ['斜体', 'i'],
  ['删除线文字', 's'],
  ['水平线', 'hr'],
  ['上标', 'sup'],
  ['下标', 'sub'],
  ['表格', 'ea-table'],
  ['导航栏', 'ea-nav'],
  ['走马灯', 'ea-merry-go-round'],
  ['下拉表', 'ea-select'],
  ['div', 'div'],
  ['span', 'span'],
]);

export const template: ElementInterface = {
  html: '',
  class: '',
  text: 'hello world',
  style: { unit: {}, value: {} },
  arr: [],
};
