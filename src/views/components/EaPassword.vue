<template>
  <input type="password" :value="value" />
</template>

<script lang="ts">
  import { Vue, Component, Emit, Prop } from 'vue-property-decorator';

  @Component({
    name: 'EaPassword',
  })
  export default class EaPassword extends Vue {
    @Prop(String)
    private value!: string;
  }
</script>

<style></style>
