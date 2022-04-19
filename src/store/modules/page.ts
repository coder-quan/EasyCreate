/*
 * @Description: 新建的页面以及相关数据
 * @Autor: dongquan.zhang
 * @LastEditors: dongquan.zhang
 */
import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, store, name: 'page' })
class Page extends VuexModule {}

export const pageModule = getModule(Page);
