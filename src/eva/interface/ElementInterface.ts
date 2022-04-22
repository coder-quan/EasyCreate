export interface Attrs {
  [attr: string]: string;
}
export interface ElementInterface {
  html: string;
  class: string;
  arr?: ElementInterface[];
  text?: string;
}
