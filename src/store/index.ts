import Vue from 'vue';
import Vuex from 'vuex';
import { ThemeState } from './modules/theme';

Vue.use(Vuex);

export interface RootState {
  theme: ThemeState;
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<RootState>({});
