/**
 * @description: 判断item是否存在于array数组中
 */
export function isExist<T>(array: T[], item: T): boolean {
  return Array.prototype.indexOf.call(array, item) !== -1;
}

/**
 * @description:
 */
export function isEqual<T>(firstArray: T[], secondArray: T[]): boolean {
  let result: boolean = true;
  if (firstArray && secondArray) {
    if (firstArray.length !== secondArray.length) {
      return false;
    } else {
      if (firstArray && firstArray.length) {
        firstArray.forEach((item, index) => {
          if (item !== secondArray[index]) {
            result = false;
          }
        });
      }
    }
  }
  return result;
}
