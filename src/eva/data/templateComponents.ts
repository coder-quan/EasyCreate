import { TemplateComponents } from '@/eva/interface/component';
import { components } from './Attrs';
import { Style } from '@/eva/interface/ElementInterface';
import Vue from 'vue';
const templateComponents: TemplateComponents = {};
// 所有元素的html代码和css代码
Object.getOwnPropertyNames(components).forEach((item) => {
  Vue.set(templateComponents, item, {
    code: (tag: string, className: string) => '',
    css: (cssStyle: Style) => '',
  });
});
