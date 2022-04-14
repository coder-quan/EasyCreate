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
  public theme: string = '#1989fa';
  public fontColor: string = '#e67604';

  @Mutation
  private Set_Theme(theme: string) {
    this.theme = theme;
  }
  @Mutation
  private Set_Color(color: string) {
    this.fontColor = color;
  }

  @Action
  public GetTheme() {
    let color: string | null = localStorage.getItem('theme');
    if (color) this.Set_Theme(color);
    else this.ResetTheme();
    this.ResetColor(color as string);
    return this.theme;
  }

  @Action
  public ResetTheme(color: string = '#1989fa') {
    console.log(color);
    localStorage.setItem('theme', color);
    this.Set_Theme(color);
    this.GetTheme();
  }

  @Action
  public ResetColor(themeColor: string = '#e67604') {
    let color: string = '';
    color =
      '#' +
      (parseInt('ffffff', 16) - parseInt(themeColor.slice(1), 16)).toString(16);
    this.Set_Color(color);
  }
}

export const themeModule = getModule(Theme);
