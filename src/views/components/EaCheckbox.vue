<template>
  <a>
    <slot></slot>
  </a>
</template>

<script lang="ts">
  import { Vue, Component, Emit } from 'vue-property-decorator';

  @Component({
    name: 'EaCheckbox',
  })
  export default class EaCheckbox extends Vue {}
</script>

<style></style>
