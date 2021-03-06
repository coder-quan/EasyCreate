/*
 * @Description: 限制菜单参数的接口
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
 */
// 菜单参数
interface MenuType {
  icon: string;
  title: string;
  submenu: SubMenu[];
}
// 子菜单参数
interface SubMenu {
  title: string;
  value: string[];
}
export { MenuType, SubMenu };
