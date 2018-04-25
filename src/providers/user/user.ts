import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { UserDao } from '../user-dao/user-dao';
/**
 * @author mali.sahin
 * @since 2018/04/25
 */

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient, private api: ApiProvider, private userDao: UserDao) {
  }

  getDataFromApi(): Observable<any> {
    let url = this.api.getKullaniciUrl();
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }
}