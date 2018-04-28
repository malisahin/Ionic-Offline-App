/**
 * @author malisahin
 * @since 2018-02-12
*/

import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { HomeComponent } from '../../components/home/home';
import { LoginProvider } from '../../providers/login/login';
import { UserProvider } from '../../providers/user/user';
import { UtilProvider } from '../../providers/util/util';
import { LoggerProvider } from '../../providers/logger/logger';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  userCode: string = "";
  password: string = "";

  hasLoginPermission = false;

  constructor(private nav: NavController,
    private util: UtilProvider,
    private alertCtrl: AlertController,
    private userProvider: UserProvider,
    private loadingCtrl: LoadingController,
    private logger: LoggerProvider,
    private loginProvider: LoginProvider) { }

  async  login() {
    this.showLoading();
    this.checkLoginInfo();
    let token = await this.loginProvider.login(this.userCode, this.password);
    this.logger.log("Username: " + this.userCode + " Password: " + this.password);

    let user = await this.userProvider.getUser(this.userCode, this.password);
    this.hasLoginPermission = user != null ? true : false
    this.logger.dir(user);
    this.route();
  }

  route() {
    if (this.hasLoginPermission) {
      this.nav.push(HomeComponent);
      this.loading.dismiss();
    }
    else {
      this.util.message("Giriş bilgileriniz yanlış lütfen kontrol ediniz.");
      this.loading.dismiss();
    }
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
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
}