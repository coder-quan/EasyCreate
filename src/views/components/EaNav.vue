<template>
  <div class="nav">
    <div class="container">
      <ul :class="classname">
        <li v-for="(item, index) in data" :key="index">
          <a :class="classname">
            {{ item.text }}
          </a>
          <ul v-if="item.arr">
            <li v-for="(value, subIndex) in item.arr" :key="subIndex">
              <a :class="classname">
                {{ value }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
  import { Style } from '@/eva/interface/ElementInterface';

  @Component({
    name: 'EaNav',
  })
  export default class EaNav extends Vue {
    @Prop(String)
    private classname!: string;
    @Prop(Object)
    private cssstyle!: Style;
    private background: string = '#1989fa';
    private color: string = '#333';
    private data: object[] = [
      { text: '首页' },
      {
        text: '博客',
        arr: ['html', 'css', 'js', 'ts'],
      },
      {
        text: '论坛',
        arr: ['html', 'css', 'js', 'ts'],
      },
      { text: '关于我们' },
    ];

    @Watch('cssstyle', { immediate: true, deep: true })
    private setCssStyle(newVal: Style, oldVal: Style) {
      if (newVal.value.background)
        this.background = '#' + newVal.value.background;
      if (newVal.value.color) this.color = '#' + newVal.value.color;
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
  }
  .container {
    margin: 0 auto;
    width: 1000px;
  }

  .nav {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #403c3c;
  }

  .nav li {
    float: left;
    position: relative;
  }

  .nav li a {
    display: block;
    width: 100px;
    text-align: center;
    color: #bfc3c3;
    text-decoration: none;
  }

  .nav li ul li a {
    color: #bfc3c3;
  }
  .nav li ul li {
    float: none;
  }
  .nav li ul {
    background: #403c3c;
    display: none;
    position: absolute;
    left: 0;
  }

  .nav li a:hover {
    color: #403c3c;
  }
  .nav li:hover {
    background: #fff;
    color: #403c3c;
  }
  .nav li:hover ul {
    display: block;
  }
</style>
