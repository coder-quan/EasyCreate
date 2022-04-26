interface ComponentCode {
  [name: string]: (className: string, text: string) => string;
}
// 特殊组件的html代码
export const componentCode: ComponentCode = {
  eaCheckbox: (className: string, text: string): string =>
    `<div class="checkbox ${className}>\n<input type="checkbox" name="easycreate" />\n${text}\n</div>`,
  eaMerryGoRound: (className: string, text: string): string =>
    `<div class="checkbox ${className}>\n<input type="checkbox" name="easycreate" />\n${text}\n</div>`,
  eaNav: (className: string, text: string): string =>
    `<div class="checkbox ${className}>\n<input type="checkbox" name="easycreate" />\n${text}\n</div>`,
  eaRadio: (className: string, text: string): string =>
    `<div class="checkbox ${className}>\n<input type="checkbox" name="easycreate" />\n${text}\n</div>`,
  eaTable: (className: string, text: string): string =>
    `<div class="checkbox ${className}>\n<input type="checkbox" name="easycreate" />\n${text}\n</div>`,
};
