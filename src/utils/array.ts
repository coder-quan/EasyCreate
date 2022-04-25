/**
 * @description: 判断item是否存在于array数组中
 */
export function isExist<T>(array: T[], item: T): boolean {
  return Array.prototype.indexOf.call(array, item) !== -1;
}
