/**
 * @author mali.sahin
 * @since 2018/04/25
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {UserDao} from '../user-dao/user-dao';
import {LoggerProvider} from '../logger/logger';
import {UtilProvider} from '../util/util';
import {User} from '../../entities/user';

@Injectable()
export class UserProvider {

  user: User;

  constructor(public http: HttpClient,
              private logger: LoggerProvider,
              private util: UtilProvider,
              private api: ApiProvider,
              private userDao: UserDao) {
    this.user = new User();
  }

  async getDataFromApi(): Promise<any> {
    let url = this.api.getKullaniciUrl();
    let header = await this.api.getHeader();
    return this.http.get(url, {headers: header}).toPromise();
  }

  async getUser(userCode: string, password: string): Promise<User> {
    this.logger.dir(this.user);
    this.user.password = password;
    this.user.userCode = userCode;
    if (this.util.isOnline()) {
      let userApi = await this.getDataFromApi();
      userApi.message.password = password;
      this.user = this.user.fillUser(userApi);
      await this.userDao.insertOne(this.user);
      return await this.getUserFromDB(this.user);
    } else {
      return await this.getUserFromDB(this.user);
    }
  }

  async getUserFromDB(user: User) {
    let result = await this.userDao.getList(user);
    this.logger.dir(result);
    if (result.res.rows.length > 0) {
      return result.res.rows.item(0)
    }

    return null;
  }


}
