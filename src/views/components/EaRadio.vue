<template>
  <div>
    <input :class="classname" type="radio" name="easycreate" />
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Emit, Prop } from 'vue-property-decorator';

  @Component({
    name: 'EaRadio',
  })
  export default class EaRadio extends Vue {
    @Prop(String)
    private classname!: string;
  }
</script>

<style lang="scss" scoped></style>
