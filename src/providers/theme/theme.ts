import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Constants} from "../../entities/Constants";
import {UtilProvider} from "../util/util";
import {User} from "../../entities/user";
import {Profil} from '../../entities/profil';
import {BaseProvider} from "../base/base";


enum THEME {
  BLUE = 'blue-theme',
  GREEN = 'green-theme'
}

@Injectable()
export class ThemeProvider extends BaseProvider {

  theme: BehaviorSubject<string>;
  user: User = new User();

  constructor() {
    super();
  }

  setTheme() {
    let permanentTheme: string = localStorage.getItem(Constants.SELECTED_THEME);
    if (this.isEmpty(permanentTheme)) {
      permanentTheme = THEME.BLUE;
      this.theme = new BehaviorSubject(permanentTheme);
      localStorage.setItem(Constants.SELECTED_THEME, permanentTheme);
    }
    else {
      this.theme = new BehaviorSubject(permanentTheme);
    }
    return permanentTheme;
  }

  changeTheme(selectedTheme: string) {
    let permanentTheme = THEME[selectedTheme];
    localStorage.setItem(Constants.SELECTED_THEME, permanentTheme);
    this.setTheme();
  }

  getSelectedTheme(): string {

    let selectedTheme = "";
    switch (Profil.getOrgKod()) {
      case Constants.ORG_KODS.SOS:
        selectedTheme = THEME.BLUE;
        break;

      case  Constants.ORG_KODS.BAY:
        selectedTheme = THEME.GREEN;
        break;

      case Constants.ORG_KODS.ECA:
        selectedTheme = THEME.BLUE;
        break;

      default:
        selectedTheme = THEME.BLUE;

    }

    return selectedTheme;
  }

  getDefaultImageFolder(): string {
    return "assets/images/" + Profil.getActiveProfil().orgKod + "/";
  }


  getBackgroundImage() {
    return this.getDefaultImageFolder() + "login-background.jpg";
  }

  getAnasayfaLogo() {
    return this.getDefaultImageFolder() + "anasayfa-logo.jpg";
  }
}
