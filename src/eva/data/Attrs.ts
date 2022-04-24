interface Style {
  type: 'input' | 'colorInput' | 'choose';
  value: string[];
  flex?: {
    flexDirection: string[];
    flexWrap: string[];
    justifyContent: string[];
    alignItems: string[];
    alignContent: string[];
  };
}
export interface Attribute {
  [name: string]: Style;
}
export const Attrs: Attribute = {
  boxSizing: {
    type: 'choose',
    value: ['content-box', 'border-box', 'inherit'],
  },
  display: {
    type: 'choose',
    value: ['none', 'block', 'inline', 'inline-block', 'flex'],
    flex: {
      flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
      flexWrap: ['nowarp', 'warp', 'warp-reverse'],
      justifyContent: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
      ],
      alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      alignContent: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'stretch',
      ],
    },
  },
  position: {
    type: 'choose',
    value: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
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
    value: ['left', 'center', 'right', 'justify', 'inherit'],
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
    value: [''],
  },
  flexGrow: {
    type: 'input',
    value: [''],
  },
  flexShrink: {
    type: 'input',
    value: [''],
  },
  flexBasis: {
    type: 'input',
    value: [''],
  },
  alignSelf: {
    type: 'choose',
    value: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  },
  float: {
    type: 'choose',
    value: ['left', 'right', 'none', 'inherit'],
  },
  fontSize: {
    type: 'input',
    value: ['px', '%'],
  },
  fontStyle: {
    type: 'choose',
    value: ['normal', 'italic', 'oblique', 'inherit'],
  },
  fontWeight: {
    type: 'choose',
    value: ['normal', 'bold', 'bolder', 'lighter', 'inherit'],
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
  maxHeight: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  maxWidth: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  minHeight: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  minWidth: {
    type: 'input',
    value: ['px', '%', 'vh', 'vw'],
  },
  opcity: {
    type: 'input',
    value: [''],
  },
  overFllowX: {
    type: 'choose',
    value: ['visible', 'hidden', 'scroll', 'auto', 'inherit'],
  },
  overFllowY: {
    type: 'choose',
    value: ['visible', 'hidden', 'scroll', 'auto', 'inherit'],
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
    value: ['auto', 'smooth', 'initial', 'inherit'],
  },
  textDecoration: {
    type: 'choose',
    value: [
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
    value: ['clip', 'ellipsis'],
  },
  textTransform: {
    type: 'choose',
    value: ['none', 'capitalize', 'uppercase', 'lowercase', 'inherit'],
  },
  visibility: {
    type: 'choose',
    value: ['visible', 'hidden', 'collapse', 'inherit'],
  },
  whiteSpace: {
    type: 'choose',
    value: ['normal', 'pre', 'nowrap', 'pre-wrap', 'pre-line', 'inherit'],
  },
  wordBreak: {
    type: 'choose',
    value: ['normal', 'break-all', 'keep-all'],
  },
  wordSpacing: {
    type: 'input',
    value: ['px'],
  },
  wordWrap: {
    type: 'choose',
    value: ['normal', 'break-word'],
  },
  zIndex: {
    type: 'input',
    value: [''],
  },
};

const common: object = {
  fontSize: '16',
  fontStyle: 'normal',
  fontWeight: '',
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
};
const button: object = {
  width: '50',
  height: '20',
  borderWidth: '2',
  borderStyle: 'solid',
  borderColor: 'bfbfbf',
  display: 'inline-block',
  textAlign: 'center',
  ...common,
};
const input: object = {
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
};
const password: object = input;
const radio: object = Object.assign(input, {
  borderWidth: 0,
  borderStyle: 'none',
});
const checkbox: object = radio;
const a: object = {
  width: '',
  height: '',
  display: 'inline',
  ...common,
};
const table: object = {
  display: 'table',
  ...common,
};
const nav: object = {
  display: 'inline-block',
  ...common,
};
const merryGoRound: object = {
  display: 'block',
  width: '',
  height: '100',
  ...common,
};
const select: object = {
  display: 'inline-block',
  width: '',
  height: '',
  ...common,
};
const div: object = {
  display: 'block',
  width: '',
  height: '100',
  ...common,
};
const span: object = {
  display: 'inline',
  width: '100',
  height: '',
  ...common,
};
