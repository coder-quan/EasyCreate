<template>
  <div class="setting-style">
    <div class="setting-item" v-for="(item, index) in attribute" :key="index">
      {{ item + ':' }}
      <span v-if="showSpan(item)">#</span>
      <el-input
        v-if="isInput(item)"
        :class="{ 'is-color': !showSpan(item) }"
        size="small"
        v-model="editStyle[item]"
        @change="changeStyle('value', $event, 'item')"
      ></el-input>
      <el-select
        class="unit"
        v-if="showUnit(item)"
        v-model="unit[item]"
        @change="changeStyle('unit', $event, 'item')"
      >
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
        @change="changeStyle('value', $event, 'item')"
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
  import { Style } from '@/eva/interface/ElementInterface';
  import { pageModule } from '@/store/modules/page';

  @Component({
    name: 'SettingStyle',
  })
  export default class SettingStyle extends Vue {
    @Prop(Object)
    private cssStyle!: Style;
    private editStyle: object = {};
    private attribute: string[] = [];
    private attrs: Attribute = Attrs;
    private unit: object = {};
    @Watch('cssStyle', { immediate: true, deep: true })
    private setStyle(newVal: Style, oldVal: Style) {
      this.editStyle = newVal.value;
      this.attribute = Object.getOwnPropertyNames(newVal.value);
      this.attribute.pop();
      this.unit = newVal.unit;
    }
    private showSpan(attribute: string) {
      return Attrs[attribute].type === 'colorInput';
    }
    private showUnit(attribute: string) {
      if (Attrs[attribute].type === 'input' && Attrs[attribute].value.length)
        return true;
    }
    private isInput(attribute: string) {
      return (
        Attrs[attribute].type === 'input' ||
        Attrs[attribute].type === 'colorInput'
      );
    }
  }
</script>

<style lang="scss" scoped>
  .setting-style .setting-item {
    margin: 5px 0;
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
</style>
