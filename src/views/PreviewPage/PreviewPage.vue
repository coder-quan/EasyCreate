<template>
  <div class="view">hello world</div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component({
    name: 'PreviewPage',
  })
  export default class PreviewPage extends Vue {
    // 是否预览
    @Prop({ type: Boolean, default: true })
    private readonly isPreview!: boolean;
  }
</script>

<style lang="scss" scoped>
  .view {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
