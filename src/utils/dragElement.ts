import { ElementInterface } from '@/eva/interface/elementInterface';
import { pageModule } from '@/store/modules/page';
import { hasNotSubtag } from '@/eva/data/components';
import Vue from 'vue';
/**
 * @description: 将拖动的元素添加到目标元素中
 */
export async function addElement(
  targetArray: ElementInterface[],
  startElement: string[],
  targetElement: string[]
) {
  let element: ElementInterface;
  let startItem: ElementInterface[];
  let startIndex: number;
  await catchItem(targetArray, startElement, (item, index) => {
    element = item[index];
    startItem = item;
    startIndex = index;
  });
  await catchItem(targetArray, targetElement, (item, index) => {
    if (
      hasNotSubtag.indexOf(item[index].html) === -1 &&
      !isChild(targetArray, startElement, targetElement)
    ) {
      pageModule.changeLastAdd(targetElement);
      // 若元素原来没有子节点，则动态添加
      if (!item[index].arr) Vue.set(item[index], 'arr', [element]);
      else item[index].arr?.push(element);
      startItem.splice(startIndex, 1);
    }
    return item[index];
  });
}

/**
 * @description: 遍历数组找到类名对应的元素
 */
export function catchItem(
  targetArray: ElementInterface[],
  className: string[],
  fn: (targetArray: ElementInterface[], index: number) => void
) {
  targetArray.forEach((item, index) => {
    if (className.indexOf(item.class) !== -1) fn(targetArray, index);
    else if (item.arr) catchItem(item.arr, className, fn);
  });
}

/**
 * @description: 判断两个字符串数组是否相等
 */
function isEqual(firstArray: string[], secondArray: string[]): boolean {
  let equal: boolean = true;
  firstArray.forEach((item) => {
    if (secondArray.indexOf(item) === -1) equal = false;
  });
  return equal;
}

/**
 * @description: 判断目标元素是否为拖拽元素或拖拽元素的子元素
 */
function isChild(
  targetArray: ElementInterface[],
  startElement: string[],
  targetElement: string[]
) {
  let flag: boolean = false;
  catchItem(targetArray, startElement, (item, index) => {
    // 目标元素为拖拽元素
    if (targetElement.includes(item[index].class)) flag = true;
    if (item[index].arr)
      catchItem(item[index].arr!, targetElement, (value, position) => {
        //  目标元素为拖拽元素的子元素
        flag = true;
      });
  });
  return flag;
}
