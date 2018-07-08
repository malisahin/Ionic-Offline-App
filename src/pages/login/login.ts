/**
 * @author malisahin
 * @since 2018-02-12
 */

import {Component} from '@angular/core';
import {NavController, AlertController, LoadingController, Loading, IonicPage} from 'ionic-angular';
import {LoginProvider} from '../../providers/login/login';
import {UserProvider} from '../../providers/user/user';
import {UtilProvider} from '../../providers/util/util';
import {LoggerProvider} from '../../providers/logger/logger';
import {User} from "../../entities/user";
import {Anasayfa} from "../anasayfa/anasayfa";
import {ThemeProvider} from "../../providers/theme/theme";
import {Constants} from "../../entities/Constants";
import {UserDao} from "../../providers/user-dao/user-dao";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  loading: Loading;
  userCode: string = "ECAMERKEZ";
  password: string = "EMAR6464";
  user: User;
  hasLoginPermission = false;

  constructor(private nav: NavController,
              private util: UtilProvider,
              private alertCtrl: AlertController,
              private userProvider: UserProvider,
              private loadingCtrl: LoadingController,
              private logger: LoggerProvider,
              private loginProvider: LoginProvider,
              private themeProvider: ThemeProvider) {
    this.themeProvider.setTheme();
    this.user = new User();
  }

  async login() {
    this.hasLoginPermission = false;
    this.util.loaderStart();
    localStorage.setItem(this.user.keys.userCode, this.userCode);
    localStorage.setItem(this.user.keys.password, this.password);
    this.checkLoginInfo();
    let token = await this.loginProvider.login(this.userCode, this.password);
    this.logger.log("Username: " + this.userCode + " Password: " + this.password);

    let connection = this.util.getConnectionStatus();

    if (connection == Constants.NETWORK.ONLINE) {

      let token = localStorage.getItem(Constants.ACCESS_TOKEN);
      if (this.util.isNotEmpty(token)) {
        this.user = await this.userProvider.getUser(this.userCode, this.password);
        this.hasLoginPermission = this.user != null;
      }
    }
    else if (connection == Constants.NETWORK.OFFLINE) {
      await this.checkForOfflineConnection();
    }
    else {
      this.hasLoginPermission = false;
    }

    this.logger.dir(this.user);
    this.route();
    this.util.loaderEnd();
  }

  route() {
    if (this.hasLoginPermission) {
      this.nav.push(Anasayfa);
    }
    this.util.loaderEnd();
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  checkLoginInfo() {
    if (this.util.isEmpty(this.userCode)) {
      this.util.message("Kullanıcı Adı boş olamaz.");
      return false;
    }
    if (this.util.isEmpty(this.password)) {
      this.util.message("Şifre boş olamaz.");
      return false;
    }
  }

  async checkAuth() {
    let loginUser = new User();
    loginUser.userCode = this.userCode;
    loginUser.password = this.password;

    let existingUser = await this.userProvider.getUserFromDB(loginUser);
    return this.util.isNotEmpty(existingUser);
  }

  async checkForOfflineConnection() {
    let checkAuth = await this.checkAuth();
    if (checkAuth) {
      this.hasLoginPermission = true;
      this.util.message("Cihazınız offline mod ile çalışmaya devam edecek.");
    }
    else {
      this.util.message("Girmiş olduğunuz bilgilere ait bir kullanıcı bulunamadı.");
    }
  }
}
