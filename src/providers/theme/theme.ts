import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Constants } from "../../entities/Constants";
import { UtilProvider } from "../util/util";
import { User } from "../../entities/user";


enum THEME {
  BLUE = 'blue-theme',
  GREEN = 'green-theme'
}

@Injectable()
export class ThemeProvider {

  theme: BehaviorSubject<string>;
  user: User = new User();

  constructor(private util: UtilProvider) {

  }

  setTheme() {
    let permanentTheme: string = localStorage.getItem(Constants.SELECTED_THEME);
    if (this.util.isEmpty(permanentTheme)) {
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
    let permanentTheme: string = localStorage.getItem(Constants.SELECTED_THEME);
    let selectedTheme = "";
    if (this.util.isEmpty(permanentTheme) || permanentTheme == THEME.BLUE) {
      selectedTheme = 'BLUE';

    } else if (permanentTheme == THEME.GREEN) {
      selectedTheme = 'GREEN'
    }

    return selectedTheme;
  }


  getBackgroundImage() {
    let orgKod = this.user.getOrgKod();
    if (this.util.isEmpty(orgKod)) {
      orgKod = "ECA";
    }
    return "assets/images/login-background.jpg";
    //return "../../../resources/images/" + orgKod + "/login/login-background.jpg";
  }

  getLoaderPath(): string {
    return "assets/imgs/loader.jpg";
  }
}
