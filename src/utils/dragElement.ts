import { ElementInterface } from '@/eva/interface/ElementInterface';
import { hasNotSubtag } from '@/eva/data/Components';
/**
 * @description: 将拖动的元素添加到目标元素中
 */
export async function addElement(
  targetArray: ElementInterface[],
  startElement: string[],
  targetElement: string[],
  position: 'left' | 'middle' | 'right' | ''
) {
  let startItem: ElementInterface[];
  let startIndex: number;
  let isChildElement: boolean = false;
  await catchItem(targetArray, startElement, (item, index) => {
    startItem = item;
    startIndex = index;
  });
  catchItem(targetArray, targetElement, async function fn(item, index) {
    await catchItem(startItem, targetElement, async function fx() {
      isChildElement = true;
      if (position === 'left') {
        await catchItem(
          [startItem[startIndex + 1]],
          [item[index]?.class],
          () => {
            isChildElement = false;
          }
        );
      }
    });
    if (!isChild(targetArray, startElement, targetElement)) {
      let result: ElementInterface = {
        html: '',
        class: '',
        style: { unit: {}, value: {} },
      };
      let resultIndex: number = 0;
      let pushFlag: boolean = false;
      if (isChildElement) {
        if (position === 'left') {
          if (index > startIndex) {
            result = startItem.splice(startIndex + 1, 1)[0];
            resultIndex = index;
          } else {
            result = startItem.splice(startIndex, 1)[0];
            resultIndex = index;
          }
        } else if (position === 'right') {
          if (index > startIndex) {
            result = startItem.splice(startIndex, 1)[0];
            resultIndex = index;
          } else {
            result = startItem.splice(startIndex, 1)[0];
            resultIndex = index + 1;
          }
        } else if (hasNotSubtag.indexOf(item[index].html) === -1) {
          pushFlag = true;
        }
      } else if (hasNotSubtag.indexOf(item[index].html) === -1) {
        if (item[index].arr?.length !== undefined) {
          pushFlag = true;
        }
      } else {
        if (position === 'left' || position === 'right') {
          result = startItem.splice(startIndex, 1)[0];
          resultIndex = index;
        }
      }
      if (pushFlag) {
        item[index].arr?.push(startItem.splice(startIndex, 1)[0]);
      } else if (result && result.html) {
        item.splice(resultIndex, 0, result);
      }
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
    if (item) {
      if (className && className.indexOf(item.class) !== -1) {
        fn(targetArray, index);
      } else if (item.arr) {
        catchItem(item.arr, className, fn);
      }
    }
  });
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
    if (targetElement.includes(item[index].class)) {
      flag = true;
    }
    if (item[index].arr) {
      catchItem(item[index].arr!, targetElement, (value, position) => {
        //  目标元素为拖拽元素的子元素
        flag = true;
      });
    }
  });
  return flag;
}
