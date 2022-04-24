import { ElementInterface } from '../interface/ElementInterface';
export const hasNotSubtag: string[] = ['input', 'button', 'a'];

export const basisComponents: Map<string, string> = new Map([
  ['按钮', 'button'],
  ['输入框', 'input'],
  ['密码框', 'password'],
  ['单选框', 'radio'],
  ['多选框', 'checkbox'],
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
  ['表格', 'table'],
  ['导航栏', 'nav'],
  ['走马灯', 'merryGoRound'],
  ['下拉表', 'select'],
  ['div', 'div'],
  ['span', 'span'],
]);

export const template: ElementInterface = {
  html: '',
  class: '',
  text: 'hello world',
  style: {},
};
