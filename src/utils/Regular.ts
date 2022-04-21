/**
 * @description 分割类名字符串，返回类名数组
 */
export function CutClassName(className: string) {
  const reg = /[\S]+/g;
  return className.match(reg) as string[];
}
