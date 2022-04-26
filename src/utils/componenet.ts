import { componentCode } from '@/eva/data/code';

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
    return componentCode[tag](className, text);
  }
}
