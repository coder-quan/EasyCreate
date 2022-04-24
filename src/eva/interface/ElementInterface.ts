interface Attrs {
  [attr: string]: string;
}
export interface Style {
  value: Attrs;
  unit: Attrs;
}
export interface ElementInterface {
  html: string;
  class: string;
  arr?: ElementInterface[];
  text?: string;
  style: Style;
}
