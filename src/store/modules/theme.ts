import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface ThemeState {
  theme: string;
  fontColor: string;
}
@Module({ dynamic: true, store, name: 'theme' })
class Theme extends VuexModule implements ThemeState {
  public theme: string = '#403C3C';
  public fontColor: string = '#BFC3C3';

  @Mutation
  private Set_Theme(theme: string) {
    this.theme = theme;
  }
  @Mutation
  private Set_Color(color: string) {
    this.fontColor = color;
  }

  @Action
  public async GetTheme() {
    let color: string | null = localStorage.getItem('theme');
    if (color) {
      await this.Set_Theme(color);
    } else {
      await this.ResetTheme();
    }
  }

  @Action
  public async ResetTheme(color: string = '#1989fa') {
    localStorage.setItem('theme', color);
    await this.Set_Theme(color);
    await this.GetTheme();
  }

  @Action
  public async ResetColor(themeColor: string = '#e67604') {
    let color: string = '';
    if (themeColor.length === 4) {
      let result: string = '#';
      for (let letter of themeColor) {
        result += letter + letter;
      }
      themeColor = result;
    }
    color =
      '#' +
      (parseInt('ffffff', 16) - parseInt(themeColor.slice(1), 16)).toString(16);
    await this.Set_Color(color);
  }
}

export const themeModule = getModule(Theme);
