/**
 * @author malisahin
 * @since 2018-02-12
 */

import {Component} from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
  Loading,
  IonicPage
} from "ionic-angular";
import {LoginProvider} from "../../providers/login/login";
import {UserProvider} from "../../providers/user/user";
import {UtilProvider} from "../../providers/util/util";
import {LoggerProvider} from "../../providers/logger/logger";
import {User} from "../../entities/user";
import {Anasayfa} from "../anasayfa/anasayfa";
import {ThemeProvider} from "../../providers/theme/theme";
import {Constants} from "../../entities/Constants";
import {UserDao} from "../../providers/user-dao/user-dao";
import {DeeplinkPrinterProvider} from "../../providers/deeplink-printer/deeplink-printer";
import {TableTotalElementsProvider} from "../../providers/table-total-elements/table-total-elements";

class UserInfo {
  userCode: string = "";
  password: string = "";
}

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  passwordType: string = "password";
  passwordIcon: string = "eye-off";
  loading: Loading;
  userCode: string = "ECAMERKEZ";
  password: string = "EMAR6464";
  user: User;
  hasLoginPermission = false;
  backGroundImage: string;
  rememberMe: boolean;
  showPassword: boolean = false;
  spinner: any;

  constructor(private nav: NavController,
              private util: UtilProvider,
              private alertCtrl: AlertController,
              private userProvider: UserProvider,
              private loadingCtrl: LoadingController,
              private logger: LoggerProvider,
              private loginProvider: LoginProvider,
              private deepLinkPrinter: DeeplinkPrinterProvider,
              private totalElementsProvider: TableTotalElementsProvider,
              private themeProvider: ThemeProvider) {
    this.themeProvider.setTheme();
    this.user = new User();
    this.backGroundImage = this.themeProvider.getBackgroundImage();
    this.spinner = this.util.loaderContent();
  }


  ionViewDidLoad() {
    this.logger.info("Login Page ionViewDidLoad");
    this.loadSavedUserInfo();
  }

  async login() {
    await this.saveUserInfo();
    this.hasLoginPermission = false;
    this.util.loaderStart(false);
    localStorage.setItem(this.user.keys.userCode, this.userCode);
    localStorage.setItem(this.user.keys.password, this.password);

    this.checkLoginInfo();
    let token = await this.loginProvider.login(this.userCode, this.password);
    this.logger.log(
      "Username: " + this.userCode + " Password: " + this.password
    );

    let connection = this.util.getConnectionStatus();

    if (connection == Constants.NETWORK.ONLINE) {
      let token = localStorage.getItem(Constants.ACCESS_TOKEN);
      if (this.util.isNotEmpty(token)) {
        this.user = await this.userProvider.getUser(this.userCode, this.password);
        this.hasLoginPermission = this.user != null;
      }
    } else if (connection == Constants.NETWORK.OFFLINE) {
      await this.checkForOfflineConnection();
    } else {
      this.hasLoginPermission = false;
    }

    this.logger.dir(this.user);
    this.route();
    this.util.loaderEnd();
  }

  route() {
    if (this.hasLoginPermission) {
      this.nav.push(Anasayfa);
      this.checkTablesTotalElements();
    }
    this.util.loaderEnd();
  }

  checkTablesTotalElements() {
    this.totalElementsProvider.init();
  }

  hideShowPassword() {
    this.passwordType = this.showPassword ? "text" : "password";

  }

  checkLoginInfo() {
    if (this.util.isEmpty(this.userCode)) {
      this.util.warn("Kullanıcı Adı boş olamaz.");
      return false;
    }

    if (this.util.isEmpty(this.password)) {
      this.util.warn("Şifre boş olamaz.");
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
      this.util.info("Cihazınız offline mod ile çalışmaya devam edecek.");
    } else {
      this.util.info("Girmiş olduğunuz bilgilere ait bir kullanıcı bulunamadı.");
    }
  }

  goDeeplink() {
    this.deepLinkPrinter.init();
  }

  loadSavedUserInfo() {

    let info = localStorage.getItem(Constants.USER_INFO);

    if (this.util.isNotEmpty(info)) {
      let userInfo: UserInfo = JSON.parse(info);

      this.userCode = userInfo.userCode;
      this.password = userInfo.password;
    }

    this.loadIsRememberMeClicked();
  }

  loadIsRememberMeClicked() {
    let isRememberMeClicked = localStorage.getItem(Constants.CLICKED_REMEMBER_ME);

    this.logger.info("Is Remember Clicked" + isRememberMeClicked);
    if (this.util.isNotEmpty(isRememberMeClicked)) {
      this.rememberMe = isRememberMeClicked == "true";
    }
  }

  async onChangeRememberMe() {
    localStorage.setItem(Constants.REMEMBER_ME, String(this.rememberMe));
    localStorage.setItem(Constants.CLICKED_REMEMBER_ME, String(this.rememberMe));

    await this.saveUserInfo();
    this.logger.info("Remember Me value is set as " + this.rememberMe);


  }

  async saveUserInfo(): Promise<any> {
    this.rememberMe = localStorage.getItem(Constants.REMEMBER_ME) == "true";

    if (this.rememberMe) {
      let info: UserInfo = new UserInfo();
      info.userCode = this.userCode;
      info.password = this.password;

      this.logger.info(" User Info Saved: " + JSON.stringify(info));
      localStorage.setItem(Constants.USER_INFO, JSON.stringify(info));
    } else {
      this.logger.info(" User Info Deleted. ");
      localStorage.setItem(Constants.USER_INFO, "");
    }

    return new Promise<any>(res => res());
  }

  startLoader() {
    this.util.loaderStart(false);
  }

  endLoader() {
    this.util.loaderEnd();
  }
}
