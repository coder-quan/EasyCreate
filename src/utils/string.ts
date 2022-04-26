/**
 * @description: 连接符式命名转小驼峰式命名
 */
export function toLittleCamelCase(str: string) {
  let arr = str.split('-');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join('');
}

/**
 * @description: 驼峰式命名转连接符式命名
 */
export function camelToHyphene(camelStr: string) {
  return camelStr
    .replace(/[A-Z]/g, (s) => {
      return ' ' + s.toLowerCase();
    })
    .trim()
    .replaceAll(' ', '_');
}
