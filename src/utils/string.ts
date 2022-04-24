export function toLittleCamelCase(str: string) {
  let arr = str.split('-');
  for (let i = 1; i < arr.length; i++)
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  return arr.join('');
}
