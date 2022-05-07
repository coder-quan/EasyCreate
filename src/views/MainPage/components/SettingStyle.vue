<template>
  <div class="setting-style">
    <div v-if="!showText" class="text">
      Text:
      <el-input
        size="small"
        v-model="elementText"
        @change="changeText"
      ></el-input>
    </div>
    <div class="setting-item" v-for="(item, index) in attribute" :key="index">
      {{ item + ':' }}
      <span v-if="showSpan(item)">#</span>
      <el-input
        v-if="isInput(item)"
        :class="{ 'is-color': !showSpan(item) }"
        size="small"
        v-model="editStyle[item]"
      ></el-input>
      <el-select class="unit" v-if="showUnit(item)" v-model="unit[item]">
        <el-option
          v-for="(value, index) in attrs[item].value"
          :label="value"
          :value="value"
          :key="index"
        ></el-option>
      </el-select>
      <el-select
        :class="{ 'is-color': !showSpan(item) }"
        v-if="!isInput(item)"
        v-model="editStyle[item]"
      >
        <el-option
          v-for="(value, index) in attrs[item].value"
          :label="value"
          :value="value"
          :key="index"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Emit, Prop, Watch } from 'vue-property-decorator';
  import { Attribute, Attrs } from '@/eva/data/Attrs';
  import { ElementInterface } from '@/eva/interface/ElementInterface';
  import { packageElement } from '@/eva/data/Components';
  import { isExist } from '@/utils/array';

  @Component({
    name: 'SettingStyle',
  })
  export default class SettingStyle extends Vue {
    @Prop(Object)
    private element!: ElementInterface;
    private elementText: string = '';
    private editStyle: object = {};
    private attribute: string[] = [];
    private attrs: Attribute = Attrs;
    private unit: object = {};
    @Watch('element', { immediate: true, deep: true })
    private setStyle(newVal: ElementInterface, oldVal: ElementInterface) {
      this.elementText = newVal.text ? newVal.text : '';
      this.editStyle = newVal.style.value;
      this.attribute = Object.getOwnPropertyNames(newVal.style.value);
      this.attribute.pop();
      this.unit = newVal.style.unit;
    }

    get showText() {
      return isExist(packageElement, this.element.html);
    }
    private showSpan(attribute: string) {
      return Attrs[attribute].type === 'colorInput';
    }
    private showUnit(attribute: string) {
      if (Attrs[attribute].type === 'input' && Attrs[attribute].value.length) {
        return true;
      }
    }
    private isInput(attribute: string) {
      return (
        Attrs[attribute].type === 'input' ||
        Attrs[attribute].type === 'colorInput'
      );
    }

    @Emit('change-text')
    private changeText(text: string) {
      return;
    }
  }
</script>

<style lang="scss" scoped>
  .setting-style {
    ::v-deep .text {
      margin: 5px 0;
      width: 370px;
      height: 36px;
      .el-input.el-input--small {
        width: 150px;
        margin-left: 15px;
      }
    }
    .setting-item {
      margin: 5px 0;
      width: 370px;
      height: 36px;
      .el-input.el-input--small {
        width: 150px;
        margin-left: 5px;
        &.is-color {
          margin-left: 15px;
        }
      }
      ::v-deep .el-select.is-color {
        margin-left: 15px;
        .el-input__inner {
          width: 150px;
          height: 32px;
        }
      }
      .unit ::v-deep .el-input__inner {
        padding: 0;
        width: 40px;
        height: 32px;
        margin-left: 5px;
      }
    }
  }
</style>
