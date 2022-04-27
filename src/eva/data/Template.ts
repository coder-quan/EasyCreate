import { ElementInterface } from '@/eva/interface/ElementInterface';
interface Template {
  load: ElementInterface;
  blog: ElementInterface;
}
export const TemplateMap: Map<string, string> = new Map([
  ['登录页', 'load'],
  ['博客', 'blog'],
]);
export const pageTemplate: Template = {
  load: {
    html: 'div',
    class: 'first-div',
    arr: [
      {
        html: 'div',
        class: 'load',
        text: '',
        style: {
          unit: {
            borderWidth: 'px',
            wordSpacing: 'px',
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
          },
          value: {
            display: 'flex',
            width: '300',
            height: '400',
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
            flexDirection: 'column',
            flexWrap: '',
            justifyContent: 'center',
            alignItems: 'center',
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
          },
        },
        arr: [
          {
            html: 'span',
            class: 'load-tip',
            text: '登录',
            style: {
              unit: {
                borderWidth: 'px',
                wordSpacing: 'px',
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
              },
              value: {
                display: 'block',
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
                float: '',
                backgroundColor: 'fff',
                color: '666',
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
                marginBottom: '70',
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
                textAlign: 'center',
                fontSize: '30',
                fontStyle: 'normal',
                fontWeight: '',
                zIndex: '',
              },
            },
            arr: [],
          },
          {
            html: 'div',
            class: 'user-div',
            text: '用户名：',
            style: {
              unit: {
                borderWidth: 'px',
                wordSpacing: 'px',
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
              },
              value: {
                display: 'block',
                width: '250',
                height: '30',
                borderWidth: '',
                borderStyle: 'none',
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
                float: '',
                backgroundColor: 'fff',
                color: 'bfbfbf',
                top: '',
                right: '',
                bottom: '',
                left: '',
                lineHeight: '30',
                paddingTop: '',
                paddingRight: '',
                paddingBottom: '',
                paddingLeft: '',
                marginTop: '',
                marginRight: '',
                marginBottom: '20',
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
              },
            },
            arr: [
              {
                html: 'input',
                class: 'user',
                text: 'hello world',
                style: {
                  unit: {
                    borderWidth: 'px',
                    textIndent: 'px',
                    wordSpacing: 'px',
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
                  },
                  value: {
                    width: '150',
                    height: '30',
                    borderWidth: '2',
                    borderStyle: 'solid',
                    borderColor: 'bfbfbf',
                    display: 'inline-block',
                    textAlign: '',
                    textIndent: '',
                    wordSpacing: '',
                    float: 'right',
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
                    fontSize: '',
                    fontStyle: 'normal',
                    fontWeight: '',
                    zIndex: '',
                    opcity: '',
                  },
                },
                arr: [],
              },
            ],
          },
          {
            html: 'div',
            class: 'password-div',
            text: '密码：',
            style: {
              unit: {
                borderWidth: 'px',
                wordSpacing: 'px',
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
              },
              value: {
                display: 'block',
                width: '250',
                height: '30',
                borderWidth: '',
                borderStyle: 'none',
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
                float: '',
                backgroundColor: 'fff',
                color: 'bfbfbf',
                top: '',
                right: '',
                bottom: '',
                left: '',
                lineHeight: '30',
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
              },
            },
            arr: [
              {
                html: 'ea-password',
                class: 'password',
                text: 'hello world',
                style: {
                  unit: {
                    borderWidth: 'px',
                    textIndent: 'px',
                    wordSpacing: 'px',
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
                  },
                  value: {
                    width: '150',
                    height: '30',
                    borderWidth: '2',
                    borderStyle: 'solid',
                    borderColor: 'bfbfbf',
                    display: 'inline-block',
                    textAlign: '',
                    textIndent: '',
                    wordSpacing: '',
                    float: 'right',
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
                    fontSize: '',
                    fontStyle: 'normal',
                    fontWeight: '',
                    zIndex: '',
                    opcity: '',
                  },
                },
                arr: [],
              },
            ],
          },
        ],
      },
    ],
    style: {
      value: {
        boxSizing: 'border-box',
        width: '100',
        height: '100',
        color: 'fff',
        backgroundColor: 'bfbfbf',
        display: 'flex',
        position: '',
        order: '',
        flexDirection: 'column',
        flexWrap: '',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: '',
        textAlign: 'left',
        fontSize: '16',
        fontStyle: 'normal',
        fontWeight: '',
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
      },
      unit: {
        width: 'vw',
        height: 'vh',
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
      },
    },
    text: '',
  },
  blog: {
    html: 'div',
    class: 'first-div',
    arr: [
      {
        html: 'ea-nav',
        class: 'ea-nav',
        text: 'hello world',
        style: {
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
            zIndex: '0',
            opcity: '',
          },
        },
        arr: [],
      },
      {
        html: 'div',
        class: 'ea-main-div',
        text: '',
        style: {
          unit: {
            borderWidth: 'px',
            wordSpacing: 'px',
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
          },
          value: {
            display: 'block',
            width: '',
            height: '500',
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
          },
        },
        arr: [
          {
            html: 'h1',
            class: 'ea-title',
            text: '标题1（此处填写标题）',
            style: {
              unit: {
                letterSpacing: 'px',
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
                textIndent: 'px',
                wordSpacing: 'px',
              },
              value: {
                letterSpacing: '',
                textDecoration: '',
                textDecorationColor: '',
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
                textIndent: '',
                textJustify: '',
                textTransform: '',
                textOverflow: '',
                whiteSpace: '',
                wordBreak: '',
                wordSpacing: '',
                wordWrap: '',
              },
            },
            arr: [],
          },
          {
            html: 'p',
            class: 'ea-text',
            text: '正文（此处填写正文）',
            style: {
              unit: {
                letterSpacing: 'px',
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
                textIndent: 'px',
                wordSpacing: 'px',
              },
              value: {
                letterSpacing: '',
                textDecoration: '',
                textDecorationColor: '',
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
                textIndent: '',
                textJustify: '',
                textTransform: '',
                textOverflow: '',
                whiteSpace: '',
                wordBreak: '',
                wordSpacing: '',
                wordWrap: '',
              },
            },
            arr: [],
          },
          {
            html: 'div',
            class: 'ea-merry-div',
            text: '',
            style: {
              unit: {
                borderWidth: 'px',
                wordSpacing: 'px',
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
              },
              value: {
                display: 'flex',
                width: '',
                height: '300',
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
                flexDirection: 'column',
                flexWrap: '',
                justifyContent: 'center',
                alignItems: 'center',
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
              },
            },
            arr: [
              {
                html: 'ea-merry-go-round',
                class: 'ea-merry',
                text: 'hello world',
                style: {
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
                    zIndex: '0',
                    opcity: '',
                  },
                },
                arr: [],
              },
              {
                html: 'span',
                class: 'ea-tip',
                text: '图一 走马灯',
                style: {
                  unit: {
                    borderWidth: 'px',
                    wordSpacing: 'px',
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
                  },
                  value: {
                    display: 'inline',
                    width: '100',
                    height: '30',
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
                    float: '',
                    backgroundColor: 'fff',
                    color: '000',
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                    lineHeight: '30',
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
                    textAlign: 'center',
                    fontSize: '',
                    fontStyle: 'normal',
                    fontWeight: '',
                    zIndex: '',
                  },
                },
                arr: [],
              },
            ],
          },
          {
            html: 'ea-table',
            class: 'ea-table',
            text: 'hello world',
            style: {
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
                zIndex: '0',
                opcity: '',
              },
            },
            arr: [],
          },
          {
            html: 'span',
            class: 'ea-table-span',
            text: '表格一',
            style: {
              unit: {
                borderWidth: 'px',
                wordSpacing: 'px',
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
              },
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
                paddingLeft: '120',
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
              },
            },
            arr: [],
          },
        ],
      },
    ],
    style: {
      value: {
        boxSizing: 'border-box',
        width: '100',
        height: '100',
        color: 'bfbfbf',
        backgroundColor: 'fff',
        display: 'block',
        position: '',
        order: '',
        flexDirection: '',
        flexWrap: '',
        justifyContent: '',
        alignItems: '',
        alignContent: '',
        textAlign: 'left',
        fontSize: '16',
        fontStyle: 'normal',
        fontWeight: '',
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
      },
      unit: {
        width: 'vw',
        height: 'vh',
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
      },
    },
    text: '',
  },
};
