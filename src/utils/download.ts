import { ComponentStyle } from '@/eva/interface/component';
import { specialElement } from '@/eva/data/Components';
import { toLittleCamelCase, camelToHyphene } from '@/utils/string';
import { Component } from '@/utils/componenet';
import { pageModule } from '@/store/modules/page';
import { ElementInterface } from '@/eva/interface/ElementInterface';
import { componentStyle } from '@/eva/data/ComponentStyle';
import { Attrs } from '@/eva/data/Attrs';
import { Style } from '@/eva/interface/ElementInterface';

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
          'input',
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

function getBaseCss(data: ElementInterface[]): ComponentStyle[] {
  let style: ComponentStyle[] = [];
  data.forEach((item) => {
    let itemStyle: ComponentStyle = {
      className: '',
      style: { value: {}, unit: {} },
    };
    itemStyle.className = '.' + item.class;
    itemStyle.style = JSON.parse(JSON.stringify(item.style));
    style.push(itemStyle);
    if (componentStyle[toLittleCamelCase(item.html)]) {
      style.push(...componentStyle[toLittleCamelCase(item.html)]);
    }
    if (item.arr?.length) {
      style.push(...getBaseCss(item.arr));
    }
  });
  return style;
}

export function getCss(cssStyle: ComponentStyle[]): string {
  let style: string = '';
  cssStyle = [
    { className: '*', style: { padding: '0', margin: '0' } },
    ...cssStyle,
  ];
  cssStyle.forEach((item) => {
    let attribute: string = '';
    if (item.style.value) {
      Object.getOwnPropertyNames(item.style.value).forEach((value) => {
        if ((item.style as Style).value[value]) {
          attribute += `${camelToHyphene(value)}: ${
            Attrs[value].type === 'colorInput' ? '#' : ''
          }${(item.style as Style).value[value]}${
            (item.style as Style).unit[value]
              ? (item.style as Style).unit[value]
              : ''
          };\n`;
        }
      });
    } else {
      Object.getOwnPropertyNames(item.style).forEach((value) => {
        if ((item.style as { [name: string]: string })[value]) {
          attribute += `${camelToHyphene(value)}: ${
            (item.style as { [name: string]: string })[value]
          };\n`;
        }
      });
    }
    style += `${item.className} {
      ${attribute}
    }\n`;
  });
  return style;
}

export function download(name: string, type: string) {
  let code: string = getCode([pageModule.pageData]);
  let css = getCss(getBaseCss([pageModule.pageData]));
  let aFileParts: string = ''; // 一个包含DOMString;的数组
  if (type === 'html') {
    aFileParts = getHtml(code, css);
  } else {
    aFileParts = getVue(name, code, css);
  }
  let oMyBlob = new Blob([aFileParts], { type: 'text/html' }); // 得到 blob
  let downloadElement = document.createElement('a');
  let href = window.URL.createObjectURL(oMyBlob); // 创建下载的链接
  downloadElement.href = href;
  downloadElement.download = `${name + '.' + type}`; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href); // 释放掉blob对象
}

function getHtml(code: string, css: string) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      ${css}
    </style>
  </head>
  <body>
    ${code}
  </body>
  </html>`;
}

function getVue(name: string, code: string, css: string) {
  return `<template>
    ${code}
  </template>

  <script>
  export default {
    name: '${name}',
  }
  </script>

  <style scoped>
  ${css}
  </style>`;
}
