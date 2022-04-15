<template>
  <div class="menu-container">
    <el-menu
      class="menu"
      :collapse="true"
      :background-color="color.theme"
      :text-color="color.color"
      :active-text-color="color.color"
    >
      <el-submenu v-for="(submenu, key) in menu" :index="key + 'a'" :key="key">
        <template slot="title">
          <i :class="submenu.icon"></i>
          <span slot="title">{{ submenu.title }}</span>
        </template>
        <el-menu-item-group
          v-for="(item, index) in submenu.submenu"
          :index="index"
          :key="index"
        >
          <span slot="title">{{ item.title }}</span>
          <el-menu-item
            v-for="(subItem, subIndex) in item.value"
            :index="subIndex + 'a'"
            :key="subIndex"
          >
            {{ subItem }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import { MenuType } from '../interface/MenuInterface';
  @Component({
    name: 'PackageMenu',
  })
  export default class PackageMenu extends Vue {
    @Prop(Array)
    private readonly menu!: MenuType[];

    @Prop(Object)
    private readonly color!: object;
  }
</script>

<style lang="scss" scoped>
  .menu {
    height: calc(100vh - 56px);
  }
</style>
