<template>
  <div class="instructions">
    <el-page-header
      :style="{ '--color': theme, '--font-color': color }"
      @back="backHome"
      content="主页"
    ></el-page-header>
    <div class="main-instructions">
      <div v-for="(item, index) in detail" :key="index">
        <h1>{{ item.title }}</h1>
        <p v-for="(content, childIndex) in item.content" :key="childIndex">
          {{ content }}
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { themeModule } from '@/store/modules/theme';

  @Component({
    name: 'Introduce',
  })
  export default class Introduce extends Vue {
    private detail: Array<{ title: string; content: string[] }> = [
      {
        title: '一、初始化页面',
        content: [
          '可通过新建或选择模板初始化页面，页面一旦初始化则不可再次初始化页面，直到点击删除按钮删除页面或刷新页面。',
        ],
      },
      {
        title: '二、添加组件',
        content: [
          '1. 通过侧边栏的组件菜单添加组件，需输入类名且类名唯一（系统需求，实际开发中类名可重复使用），其中密码输入框不可拖拽。',
          '2. 可通过点击页面组件指定目标组件，然后添加的组件会被添加到其子节点，表单元素、链接元素、组件除外;当最后点击的组件被删除时，目标组件会指定为背景元素即最顶层组件。',
          '3. 可点击预览按钮预览页面。',
        ],
      },
      {
        title: '三、拖拽组件',
        content: [
          '1. 可通过拖拽调整组件间关系，点击添加边框按钮可显示各组件边框，此操作可取消。',
          '2. 拖拽组件时可将拖拽组件移动到目标组件的前方、子节点以及后方，判定条件分别为鼠标位于目标组件的左三分之一、中间三分之一以及右三分之一，目标组件为复杂组件或单标签元素则只能移动到其前后方，不可添加至子节点。',
          '3. 当拖拽组件是目标组件的父组件时，不能进行处理，只有两个组件关系如下时才能进行拖拽操作：',
          '（1）	拖拽组件为目标组件的子组件或更低级组件时；',
          '（2）	拖拽组件与目标组件有共同祖先组件且互不为祖先组件时；',
          '（3）	拖拽组件与目标组件为兄弟组件时。',
          '若拖拽组件想插入父级组件前后方，只能将目标元素置为祖先组件，直接拖至父组件右三分之一处无法触发插入方法。',
        ],
      },
      {
        title: '四、导出页面',
        content: [
          '点击导出页面按钮，选择导出类型和输入文件名即可导出页面代码。',
        ],
      },
      {
        title: '五、选择主题颜色',
        content: [
          '点击取色器，可选择颜色或输入颜色，平台会将选择或输入的值保存至本地。',
        ],
      },
    ];

    private theme: string = '#403C3C';
    private color: string = '#BFC3C3';

    private activated() {
      this.theme = themeModule.theme;
      this.color = themeModule.fontColor;
    }

    private backHome() {
      this.$router.replace('/main');
    }
  }
</script>

<style lang="scss" scoped>
  .instructions {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none; //火狐隐藏滚动条
    &::-webkit-scrollbar {
      //谷歌隐藏滚动条
      display: none;
    }
    & ::v-deep .el-page-header {
      background-color: var(--color);
      color: var(--font-color);
      .el-page-header__content {
        color: var(--font-color);
      }
    }
    .main-instructions {
      height: calc(100vh - 24px);
      background-color: #fff;
      padding: 20px 80px;
      overflow-y: scroll;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      h1 {
        margin-bottom: 10px;
      }
      div :last-child {
        margin: 10px 0;
      }
      p {
        text-indent: 32px;
        line-height: 28px;
      }
    }
  }
</style>
