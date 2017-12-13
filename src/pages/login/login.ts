/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { HomeComponent } from '../../components/home/home';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  username: string;
  password: string;

  constructor(private nav: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private loginProvider: LoginProvider) { }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.showLoading();
    // Yorumlar Kaldırılacak.
    /*this.loginProvider.login(this.username, this.password);
    console.log("Username: " + this.username + " Password: " + this.password);
    */
    this.nav.push(HomeComponent);
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
}