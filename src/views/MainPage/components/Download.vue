<template>
  <el-dialog title="" :show-close="false" :visible.sync="dialogVisible">
    <div>
      导出类型：
      <el-select v-model="type">
        <el-option
          v-for="(item, index) in allType"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </div>
    <div>
      文件名：
      <el-input
        ref="input"
        v-model="downloadName"
        @keyup.enter.native="checkEffective"
      ></el-input>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="checkEffective">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
  import { Vue, Component, Emit, Prop, Watch } from 'vue-property-decorator';
  @Component({
    name: 'Download',
  })
  export default class Download extends Vue {
    @Prop(Boolean)
    private isClose!: boolean;
    private dialogVisible: boolean = false;
    private downloadName: string = '';
    private allType: string[] = ['vue', 'html'];
    private type: string = 'vue';

    @Watch('dialogVisible')
    private changeVisible(newVal: boolean, oldVal: boolean) {
      if (!this.dialogVisible) {
        this.cancel();
      }
    }

    @Watch('isClose')
    private changeClose(newVal: boolean, oldVal: boolean) {
      if (newVal) {
        this.dialogVisible = true;
        this.$nextTick(() => {
          (this.$refs.input as any).focus();
        });
      } else {
        this.dialogVisible = false;
      }
      this.downloadName = '';
    }

    /**
     * @description:确认是否输入文件名且文件名是否已经存在
     */
    private checkEffective() {
      this.downloadName = this.downloadName.trim();
      if (this.downloadName) {
        this.checkClassName(this.type);
        this.dialogVisible = false;
      }
    }

    @Emit('check')
    private checkClassName(type: string) {
      return this.downloadName;
    }

    @Emit('cancel')
    private cancel() {
      return;
    }
  }
</script>

<style scoped>
  div {
    margin-bottom: 10px;
  }
  .el-input {
    width: 200px;
  }
</style>
