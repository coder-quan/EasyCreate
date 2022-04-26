import { Style } from './ElementInterface';

export interface ComponentStyle {
  className: string[];
  style: string[];
}
export interface Component {
  code: (tag: string, className: string, value?: string) => string;
  css: (cssStyle: Style, component?: ComponentStyle[]) => string;
}

export interface TemplateComponents {
  [name: string]: Component;
}
