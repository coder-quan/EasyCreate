import { ComponentStyle } from '@/eva/interface/component';
import { Style } from '@/eva/interface/ElementInterface';
import { specialElement } from '@/eva/data/Components';
import { camelToHyphene } from '@/utils/string';
import { Component } from '@/utils/componenet';
import { pageModule } from '@/store/modules/page';
import { ElementInterface } from '@/eva/interface/ElementInterface';

export function getCode(data: ElementInterface[], code?: string): string {
  let result: string = '';
  data.forEach((item) => {
    if (item.arr?.length) {
      let array: ElementInterface[] = [];
      let temporary: string = getCode(item.arr);
      array = item.arr.splice(0);
      result += getCode([item], temporary);
      item.arr.splice(0, 0, ...array);
    } else {
      if (camelToHyphene(item.html) === 'input' && item.text) {
        result += Component.prototype.singleTag(
          item.html,
          item.class,
          item.text,
          'text'
        );
      } else if (camelToHyphene(item.html) === 'ea-password' && item.text) {
        result += Component.prototype.singleTag(
          item.html,
          item.class,
          item.text,
          'password'
        );
      } else if (
        specialElement.includes(camelToHyphene(item.html)) &&
        item.text
      ) {
        result += Component.prototype.componentTag(
          item.html,
          item.class,
          item.text
        );
      } else {
        result += Component.prototype.doubleTag(
          item.html,
          item.class,
          item.text,
          code
        );
      }
    }
  });
  return result;
}

export function getCss(cssStyle: Style, component?: ComponentStyle[]): string {
  return '';
}

export function download() {
  let a: string = getCode([pageModule.pageData]);
  console.log(11111111111, a);
}
