/**
 * @author mali.sahin
 * @since 2018/04/25
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { UserDao } from '../user-dao/user-dao';
import { LoggerProvider } from '../logger/logger';
import { UtilProvider } from '../util/util';
import { User } from '../../entities/user';

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

  getDataFromApi(): Promise<any> {
    let url = this.api.getKullaniciUrl();
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header }).toPromise().then(

    );
  }

  async getUser(userCode: string, password: string): Promise<User> {
    this.logger.dir(this.user);
    this.user.password = password;
    this.user.userCode = userCode;
    if (this.util.isOnline()) {
      let userApi = await this.getDataFromApi();
      this.user = this.user.fillUser(userApi);
      await this.userDao.insertOne(this.user);
      return await this.getDataFromDB();
    } else {
      return await this.getDataFromDB();
    }
  }

  async getDataFromDB() {
    let result = await this.userDao.getList(this.user);
    this.logger.dir(result);
    if (result.res.rows.length > 0) {
      return result.res.rows.item(0)
    }
    return null;


  }


}
