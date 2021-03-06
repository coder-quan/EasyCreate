/*
 * @Description: 侧边栏组件菜单的数据
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
 */
import { MenuType } from '../interface/MenuInterface';
export const Menu: MenuType[] = [
  {
    icon: 'el-icon-tickets',
    title: '表单元素',
    submenu: [
      {
        title: '表单元素',
        value: ['按钮', '输入框', '密码框', '单选框', '多选框'],
      },
    ],
  },
  {
    icon: 'el-icon-paperclip',
    title: '链接元素',
    submenu: [
      {
        title: '链接元素',
        value: ['链接'],
      },
    ],
  },
  {
    icon: 'el-icon-document',
    title: '文本元素',
    submenu: [
      {
        title: '文本元素',
        value: ['段落', '粗体', '斜体', '删除线文字', '水平线', '上标', '下标'],
      },
    ],
  },
  {
    icon: 'el-icon-notebook-2',
    title: '标题',
    submenu: [
      {
        title: '标题',
        value: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    ],
  },
  {
    icon: 'el-icon-menu',
    title: '组件',
    submenu: [
      {
        title: '组件',
        value: ['表格', '导航栏', '走马灯'],
      },
    ],
  },
  {
    icon: 'el-icon-s-grid',
    title: '容器',
    submenu: [
      {
        title: '容器',
        value: ['div', 'span'],
      },
    ],
  },
];
