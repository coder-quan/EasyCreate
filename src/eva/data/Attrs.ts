// import { Style } from '@/eva/interface/ElementInterface';
interface Style {
  type: 'input' | 'colorInput' | 'choose';
  value: string[];
}
export interface Attribute {
  [name: string]: Style;
}
export const Attrs: Attribute = {
  boxSizing: {
    type: 'choose',
    value: ['', 'content-box', 'border-box', 'inherit'],
  },
  display: {
    type: 'choose',
    value: ['none', 'block', 'inline', 'inline-block', 'flex', 'table'],
  },
  flexDirection: {
    type: 'choose',
    value: ['', 'row', 'row-reverse', 'column', 'column-reverse'],
  },
  flexWrap: {
    type: 'choose',
    value: ['', 'nowarp', 'warp', 'warp-reverse'],
  },
  justifyContent: {
    type: 'choose',
    value: [
      '',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
    ],
  },
  alignItems: {
    type: 'choose',
    value: [
      '',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch',
    ],
  },
  alignContent: {
    type: 'choose',
    value: ['', 'row', 'row-reverse', 'column', 'column-reverse'],
  },
  flexGrow: {
    type: 'input',
    value: [],
  },
  flexShrink: {
    type: 'input',
    value: [],
  },
  flexBasis: {
    type: 'input',
    value: [],
  },
  position: {
    type: 'choose',
    value: ['', 'static', 'relative', 'absolute', 'fixed', 'sticky'],
  },
  height: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  width: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  textAlign: {
    type: 'choose',
    value: ['', 'left', 'center', 'right', 'justify', 'inherit'],
  },
  backgroundColor: {
    type: 'colorInput',
    value: ['#'],
  },
  borderWidth: {
    type: 'input',
    value: ['px'],
  },
  borderStyle: {
    type: 'choose',
    value: [
      'none',
      'hidden',
      'solid',
      'double',
      'groove',
      'ridge',
      'inset',
      'ouset',
      'inherit',
    ],
  },
  borderColor: {
    type: 'colorInput',
    value: ['#'],
  },
  left: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  right: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  top: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  bottom: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  color: {
    type: 'colorInput',
    value: ['#'],
  },
  order: {
    type: 'input',
    value: [],
  },
  alignSelf: {
    type: 'choose',
    value: [
      '',
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch',
    ],
  },
  float: {
    type: 'choose',
    value: ['', 'left', 'right', 'none', 'inherit'],
  },
  fontSize: {
    type: 'input',
    value: ['px', '%'],
  },
  fontStyle: {
    type: 'choose',
    value: ['', 'normal', 'italic', 'oblique', 'inherit'],
  },
  fontWeight: {
    type: 'choose',
    value: ['', 'normal', 'bold', 'bolder', 'lighter', 'inherit'],
  },
  lineHeight: {
    type: 'input',
    value: ['px', '%'],
  },
  letterSpacing: {
    type: 'input',
    value: ['px'],
  },
  marginTop: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  marginRight: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  marginLeft: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  marginBottom: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  opcity: {
    type: 'input',
    value: [],
  },
  overFllowX: {
    type: 'choose',
    value: ['', 'visible', 'hidden', 'scroll', 'auto', 'inherit'],
  },
  overFllowY: {
    type: 'choose',
    value: ['', 'visible', 'hidden', 'scroll', 'auto', 'inherit'],
  },
  paddingTop: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  paddingRight: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  paddingLeft: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  paddingBottom: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  scrollBehavior: {
    type: 'choose',
    value: ['', 'auto', 'smooth', 'initial', 'inherit'],
  },
  textDecoration: {
    type: 'choose',
    value: [
      '',
      'none',
      'underline',
      'overline',
      'line-through',
      'blink',
      'inherit',
    ],
  },
  textDecorationColor: {
    type: 'colorInput',
    value: ['#'],
  },
  textDecorationLine: {
    type: 'choose',
    value: [
      '',
      'none',
      'underline',
      'overline',
      'line-through',
      'initial',
      'inherit',
    ],
  },
  textDecorationStyle: {
    type: 'choose',
    value: [
      '',
      'solid',
      'double',
      'dotted',
      'dashed',
      'wavy',
      'initial',
      'inherit',
    ],
  },
  textIndent: {
    type: 'input',
    value: ['px', '%'],
  },
  textJustify: {
    type: 'choose',
    value: [
      '',
      'auto',
      'none',
      'inter-word',
      'inter-ideograph',
      'inter-cluster',
      'distribute',
      'kashida',
    ],
  },
  textOverflow: {
    type: 'choose',
    value: ['', 'clip', 'ellipsis'],
  },
  textTransform: {
    type: 'choose',
    value: ['', 'none', 'capitalize', 'uppercase', 'lowercase', 'inherit'],
  },
  visibility: {
    type: 'choose',
    value: ['', 'visible', 'hidden', 'collapse', 'inherit'],
  },
  whiteSpace: {
    type: 'choose',
    value: ['', 'normal', 'pre', 'nowrap', 'pre-wrap', 'pre-line', 'inherit'],
  },
  wordBreak: {
    type: 'choose',
    value: ['', 'normal', 'break-all', 'keep-all'],
  },
  wordSpacing: {
    type: 'input',
    value: ['px'],
  },
  wordWrap: {
    type: 'choose',
    value: ['', 'normal', 'break-word'],
  },
  zIndex: {
    type: 'input',
    value: [],
  },
};

const common: object = {
  float: '',
  backgroundColor: 'fff',
  color: 'bfbfbf',
  top: '',
  right: '',
  bottom: '',
  left: '',
  lineHeight: '',
  paddingTop: '',
  paddingRight: '',
  paddingBottom: '',
  paddingLeft: '',
  marginTop: '',
  marginRight: '',
  marginBottom: '',
  marginLeft: '',
  boxSizing: 'border-box',
  order: '',
  flexDirection: '',
  flexWrap: '',
  justifyContent: '',
  alignItems: '',
  alignContent: '',
  flexGrow: '',
  flexShrink: '',
  flexBasis: '',
  alignSelf: '',
  textAlign: '',
  fontSize: '',
  fontStyle: 'normal',
  fontWeight: '',
  zIndex: '',
  opcity: '',
};

const commonComponent: object = {
  letterSpacing: '',
  textDecoration: '',
  textDecorationColor: '',
  textIndent: '',
  textJustify: '',
  textTransform: '',
  textOverflow: '',
  whiteSpace: '',
  wordBreak: '',
  wordSpacing: '',
  wordWrap: '',
};

const commonUnits: object = {
  width: 'px',
  height: 'px',
  fontSize: 'px',
  fontWeight: 'px',
  top: 'px',
  right: 'px',
  bottom: 'px',
  left: 'px',
  lineHeight: 'px',
  paddingTop: 'px',
  paddingRight: 'px',
  paddingBottom: 'px',
  paddingLeft: 'px',
  marginTop: 'px',
  marginRight: 'px',
  marginBottom: 'px',
  marginLeft: 'px',
};

const componentUnits: object = {
  letterSpacing: 'px',
  textIndent: 'px',
  wordSpacing: 'px',
};

interface Component {
  [name: string]: {
    value: object;
    unit: object;
  };
}
export const components: Component = {
  button: {
    value: {
      width: '50',
      height: '20',
      borderWidth: '2',
      borderStyle: 'solid',
      borderColor: 'bfbfbf',
      display: 'inline-block',
      textAlign: 'center',
      ...common,
    },
    unit: { borderWidth: 'px', ...commonUnits },
  },
  input: {
    value: {
      width: '200',
      height: '20',
      borderWidth: '2',
      borderStyle: 'solid',
      borderColor: 'bfbfbf',
      display: 'inline-block',
      textAlign: 'start',
      textIndent: '',
      wordSpacing: '',
      ...common,
    },
    unit: {
      borderWidth: 'px',
      textIndent: 'px',
      wordSpacing: 'px',
      ...commonUnits,
    },
  },
  eaPassword: {
    value: {
      width: '200',
      height: '20',
      borderWidth: '2',
      borderStyle: 'solid',
      borderColor: 'bfbfbf',
      display: 'inline-block',
      textAlign: 'start',
      textIndent: '',
      wordSpacing: '',
      ...common,
    },
    unit: {
      borderWidth: 'px',
      textIndent: 'px',
      wordSpacing: 'px',
      ...commonUnits,
    },
  },
  eaRadio: {
    value: {
      width: '200',
      height: '20',
      borderWidth: '0',
      borderStyle: 'none',
      borderColor: 'bfbfbf',
      display: 'inline-block',
      textAlign: 'start',
      textIndent: '',
      wordSpacing: '',
      ...common,
    },
    unit: {
      borderWidth: 'px',
      textIndent: 'px',
      wordSpacing: 'px',
      ...commonUnits,
    },
  },
  eaCheckbox: {
    value: {
      width: '200',
      height: '20',
      borderWidth: '0',
      borderStyle: 'none',
      borderColor: 'bfbfbf',
      display: 'inline-block',
      textAlign: 'start',
      textIndent: '',
      wordSpacing: '',
      ...common,
    },
    unit: {
      borderWidth: 'px',
      textIndent: 'px',
      wordSpacing: 'px',
      ...commonUnits,
    },
  },
  a: {
    value: {
      width: '',
      height: '',
      display: 'inline',
      ...common,
    },
    unit: { ...commonUnits },
  },
  p: {
    value: {
      letterSpacing: '',
      textDecoration: '',
      textDecorationColor: '',
      ...common,
      ...commonComponent,
    },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  h1: {
    value: {
      letterSpacing: '',
      textDecoration: '',
      textDecorationColor: '',
      ...common,
      ...commonComponent,
    },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  h2: {
    value: {
      letterSpacing: '',
      textDecoration: '',
      textDecorationColor: '',
      ...common,
      ...commonComponent,
    },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  h3: {
    value: {
      letterSpacing: '',
      textDecoration: '',
      textDecorationColor: '',
      ...common,
      ...commonComponent,
    },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  h4: {
    value: {
      letterSpacing: '',
      textDecoration: '',
      textDecorationColor: '',
      ...common,
      ...commonComponent,
    },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  h5: {
    value: {
      letterSpacing: '',
      textDecoration: '',
      textDecorationColor: '',
      ...common,
      ...commonComponent,
    },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  h6: {
    value: {
      letterSpacing: '',
      textDecoration: '',
      textDecorationColor: '',
      ...common,
      ...commonComponent,
    },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  strong: {
    value: { letterSpacing: '', ...common, ...commonComponent },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  i: {
    value: { letterSpacing: '', ...common, ...commonComponent },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  s: {
    value: { letterSpacing: '', ...common, ...commonComponent },
    unit: { letterSpacing: 'px', ...commonUnits, ...componentUnits },
  },
  hr: { value: {}, unit: {} },
  sup: { value: {}, unit: {} },
  sub: { value: {}, unit: {} },
  eaTable: {
    value: {
      display: 'table',
      float: '',
      position: '',
      fontSize: '',
      fontStyle: 'normal',
      top: '',
      right: '',
      bottom: '',
      left: '',
      marginTop: '',
      marginRight: '',
      marginBottom: '',
      marginLeft: '',
      zIndex: 0,
      opcity: '',
    },
    unit: {
      fontSize: 'px',
      top: 'px',
      right: 'px',
      bottom: 'px',
      left: 'px',
      marginTop: 'px',
      marginRight: 'px',
      marginBottom: 'px',
      marginLeft: 'px',
    },
  },
  eaNav: {
    value: {
      display: 'block',
      float: '',
      position: '',
      fontSize: '',
      fontStyle: 'normal',
      top: '',
      right: '',
      bottom: '',
      left: '',
      marginTop: '',
      marginRight: '',
      marginBottom: '',
      marginLeft: '',
      zIndex: 0,
      opcity: '',
    },
    unit: {
      fontSize: 'px',
      top: 'px',
      right: 'px',
      bottom: 'px',
      left: 'px',
      marginTop: 'px',
      marginRight: 'px',
      marginBottom: 'px',
      marginLeft: 'px',
    },
  },
  eaMerryGoRound: {
    value: {
      display: 'block',
      float: '',
      position: '',
      fontSize: '',
      fontStyle: 'normal',
      top: '',
      right: '',
      bottom: '',
      left: '',
      marginTop: '',
      marginRight: '',
      marginBottom: '',
      marginLeft: '',
      zIndex: 0,
      opcity: '',
    },
    unit: {
      fontSize: 'px',
      top: 'px',
      right: 'px',
      bottom: 'px',
      left: 'px',
      marginTop: 'px',
      marginRight: 'px',
      marginBottom: 'px',
      marginLeft: 'px',
    },
  },
  div: {
    value: {
      display: 'block',
      width: '',
      height: '100',
      borderWidth: '',
      borderStyle: '',
      borderColor: '',
      opcity: '',
      overFllowX: '',
      overFllowY: '',
      scrollBehavior: '',
      textJustify: '',
      textOverflow: '',
      visibility: '',
      whiteSpace: '',
      wordBreak: '',
      wordSpacing: '',
      ...common,
    },
    unit: { borderWidth: 'px', wordSpacing: 'px', ...commonUnits },
  },
  span: {
    value: {
      display: 'inline',
      width: '100',
      height: '',
      borderWidth: '',
      borderStyle: '',
      borderColor: '',
      opcity: '',
      overFllowX: '',
      overFllowY: '',
      scrollBehavior: '',
      textJustify: '',
      textOverflow: '',
      visibility: '',
      whiteSpace: '',
      wordBreak: '',
      wordSpacing: '',
      ...common,
    },
    unit: { borderWidth: 'px', wordSpacing: 'px', ...commonUnits },
  },
};
