import { componentCode } from '@/eva/data/code';
import { toLittleCamelCase } from '@/utils/string';

interface Components {
  singleTag: (
    tag: string,
    className: string,
    value: string,
    type?: string
  ) => string;
  doubleTag: (
    tag: string,
    className: string,
    text: string,
    code?: string
  ) => string;
  componentTag: (tag: string, className: string, text: string) => string;
}
export class Component implements Components {
  public singleTag(
    tag: string,
    className: string,
    value: string,
    type?: string
  ): string {
    return `<${tag} type="${type}" class="${className}" value="${value}"/>\n`;
  }
  public doubleTag(
    tag: string,
    className: string,
    text?: string,
    code?: string
  ): string {
    return `<${tag} class="${className}" >${
      (text ? text : '') + (code ? code : '')
    }</${tag}>\n`;
  }
  public componentTag(tag: string, className: string, text: string): string {
    if (toLittleCamelCase(tag) === 'eaNav') {
      return componentCode.eaNav(className, text);
    } else if (toLittleCamelCase(tag) === 'eaCheckbox') {
      return componentCode.eaCheckbox(className, text);
    } else if (toLittleCamelCase(tag) === 'eaMerryGoRound') {
      return componentCode.eaMerryGoRound(className, text);
    } else if (toLittleCamelCase(tag) === 'eaRadio') {
      return componentCode.eaRadio(className, text);
    } else {
      return componentCode.eaTable(className, text);
    }
  }
}
