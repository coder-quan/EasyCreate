<template>
  <div class="slide">
    <input
      type="radio"
      :class="classname"
      name="sildeInput"
      value="0"
      id="sildeInput1"
      checked
      hidden
    />
    <label for="sildeInput1">1</label>

    <input
      type="radio"
      :class="classname"
      name="sildeInput"
      value="1"
      id="sildeInput2"
      hidden
    />
    <label for="sildeInput2">2</label>

    <input
      type="radio"
      :class="classname"
      name="sildeInput"
      value="1"
      id="sildeInput3"
      hidden
    />
    <label for="sildeInput3">3</label>

    <ul :class="classname">
      <li :class="classname">one-点击切换</li>

      <li :class="classname">two-点击切换</li>

      <li :class="classname">three-点击切换</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component({
    name: 'EaMerryGoRound',
  })
  export default class EaMerryGoRound extends Vue {
    @Prop(String)
    private classname!: string;
  }
</script>

<style lang="scss" scoped>
  .slide {
    display: inline-block;
    position: relative;
    width: 600px;
    height: 200px;
    text-align: center;
    font-family: Arial;
    color: #fff;
    overflow: hidden;
    ul {
      padding: 0;
      width: calc(600px * 3);
      transition: all 0.5s;
    }
    li {
      float: left;
      width: 600px;
      height: 200px;
      list-style: none;
      line-height: 200px;
      font-size: 36px;
    }
    li:nth-child(1) {
      background: #9fa8ef;
    }
    li:nth-child(2) {
      background: #ef9fb1;
    }
    li:nth-child(3) {
      background: #9fefc3;
    }
    input[name='sildeInput'] {
      display: none;
    }
    label[for^='sildeInput'] {
      position: absolute;
      // top: 170px;
      bottom: 20px;
      width: 20px;
      height: 20px;
      margin: 0 10px;
      line-height: 20px;
      color: #fff;
      background: #fff;
      cursor: pointer;
      border-radius: 50%;
    }
    label[for='sildeInput1'] {
      left: calc(50% - 40px);
    }
    label[for='sildeInput2'] {
      left: calc(50% - 10px);
    }
    label[for='sildeInput3'] {
      left: calc(50% + 20px);
    }
  }

  #sildeInput1:checked ~ ul {
    margin-left: 0;
  }

  #sildeInput2:checked ~ ul {
    margin-left: -600px;
  }

  #sildeInput3:checked ~ ul {
    margin-left: -1200px;
  }

  #sildeInput1:checked ~ label[for='sildeInput1'] {
    color: #000;
    background: #1989fa;
  }

  #sildeInput2:checked ~ label[for='sildeInput2'] {
    color: #000;
    background: #1989fa;
  }

  #sildeInput3:checked ~ label[for='sildeInput3'] {
    color: #000;
    background: #1989fa;
  }
</style>
