import { Display } from '../type/CssType';
export interface Component {
  beginTag: string;
  value: TagVlaue;
  endTag: string;
  //   css: CSSRule;
}

interface TagVlaue {
  [attrname: string]: string;
}

interface CssRules {
  display: Display;
}
