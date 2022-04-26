<template>
  <table :class="classname">
    <tr :class="classname">
      <th :class="classname">Firstname</th>
      <th :class="classname">Lastname</th>
      <th :class="classname">Savings</th>
    </tr>
    <tr :class="classname">
      <td :class="classname">Bill</td>
      <td :class="classname">Gates</td>
      <td :class="classname">$100</td>
    </tr>
    <tr :class="classname">
      <td :class="classname">Steve</td>
      <td :class="classname">Jobs</td>
      <td :class="classname">$150</td>
    </tr>
    <tr :class="classname">
      <td :class="classname">Elon</td>
      <td :class="classname">Musk</td>
      <td :class="classname">$300</td>
    </tr>
    <tr :class="classname">
      <td :class="classname">Mark</td>
      <td :class="classname">Zuckerberg</td>
      <td :class="classname">$250</td>
    </tr>
  </table>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component({
    name: 'EaTable',
  })
  export default class EaTable extends Vue {
    @Prop(String)
    private classname!: string;
  }
</script>

<style lang="scss" scoped>
  table,
  td,
  th {
    border: 1px solid black;
  }

  table {
    border-collapse: collapse;
    width: 300px;
  }
</style>
