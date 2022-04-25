<template>
  <div class="checkbox">
    <input :class="classname" type="checkbox" name="easycreate" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component({
    name: 'EaCheckbox',
  })
  export default class EaCheckbox extends Vue {
    @Prop(String)
    private classname!: string;
  }
</script>

<style></style>
