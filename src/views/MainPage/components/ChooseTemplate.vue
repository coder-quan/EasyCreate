<template>
  <el-dialog
    title="请选择模板"
    :show-close="false"
    :visible.sync="dialogVisible"
  >
    <div>
      <el-radio-group v-model="template">
        <el-radio-button
          v-for="(item, index) in allTemplate"
          :key="index"
          :label="item"
        ></el-radio-button>
      </el-radio-group>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="checkTemplate">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
  import { Vue, Component, Emit, Prop, Watch } from 'vue-property-decorator';

  @Component({
    name: 'ChooseTemplate',
  })
  export default class ChooseTemplate extends Vue {
    @Prop(Boolean)
    private isClose!: boolean;
    private dialogVisible: boolean = false;
    private template: string = '登录页';
    private allTemplate: string[] = ['登录页', '博客'];

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
      } else {
        this.dialogVisible = false;
      }
      this.template = '登录页';
    }

    @Emit('check')
    private checkTemplate() {
      this.dialogVisible = false;
      return this.template;
    }

    @Emit('cancel')
    private cancel() {
      return;
    }
  }
</script>

<style></style>
