/**
 * @author malisahin
 * @since 2018/04/25
 */
import {Injectable} from '@angular/core';
import {TokenProvider} from '../token/token';
import {UserProvider} from '../user/user';
import {User} from '../../entities/user';
import {TasksProvider} from "../tasks/tasks";
import {MesajlarProvider} from "../mesajlar/mesajlar";
import {Constants} from "../../entities/Constants";
import {UtilProvider} from "../util/util";


@Injectable()
export class LoginProvider {

  user: User;
  DEFAULT_SYNC_TIME: number = 10;

  constructor(public token: TokenProvider, private  tasks: TasksProvider, private util: UtilProvider) {
    this.user = new User();

  }


  login(userCode, password): Promise<any> {
    this.user.userCode = userCode;
    this.user.password = password;
    return this.token.getToken(userCode, password).then(res => {

      localStorage.setItem(this.user.keys.userCode, userCode);
      localStorage.setItem(this.user.keys.password, password);
      localStorage.setItem(Constants.IS_ONLINE, String(true));

      this.setDefaultSettings();
      this.tasks.runTasks();
    });
  }

  setDefaultSettings() {

    let syncTime = localStorage.getItem(Constants.SYNC_TIME);
    if (this.util.isEmpty(syncTime)) {
      localStorage.setItem(Constants.SYNC_TIME, String(this.DEFAULT_SYNC_TIME));
    }


  }


}
