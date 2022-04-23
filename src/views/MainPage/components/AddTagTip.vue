<template>
  <el-dialog
    title="请输入类名"
    :show-close="false"
    :visible.sync="dialogVisible"
  >
    <span>此处类名不可与已有类名重复</span>
    <el-input v-model="className"></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="checkEffective">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
  import { Vue, Component, Emit, Prop, Watch } from 'vue-property-decorator';
  import { pageModule } from '@/store/modules/page';
  import { catchItem } from '@/utils/dragElement';
  @Component({
    name: 'AddTagTip',
  })
  export default class AddTagTip extends Vue {
    @Prop(Boolean)
    private isClose!: boolean;
    private dialogVisible: boolean = false;
    private className: string = '';

    @Watch('dialogVisible')
    private changeVisible(newVal: boolean, oldVal: boolean) {
      if (!this.dialogVisible) this.cancel();
    }

    @Watch('isClose')
    private changeClose(newVal: boolean, oldVal: boolean) {
      if (newVal) this.dialogVisible = true;
      else this.dialogVisible = false;
      this.className = '';
    }

    /**
     * @description:确认是否输入类名且类名是否已经存在
     */
    private checkEffective() {
      let isExist: boolean = false;
      this.className = this.className.trim();
      catchItem([pageModule.pageData], ['ea-' + this.className], () => {
        isExist = true;
      });
      if (this.className && !isExist) this.checkClassName();
      else if (isExist)
        this.$alert('类名已存在，请重新输入', '', {
          confirmButtonText: '确定',
        });
      else
        this.$alert('请输入类名', '', {
          confirmButtonText: '确定',
        });
    }

    @Emit('check')
    private checkClassName() {
      return 'ea-' + this.className;
    }

    @Emit('cancel')
    private cancel() {
      return;
    }
  }
</script>

<style></style>
