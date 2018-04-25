/**
 * @author mali.sahin
 * @since  2018/04/25
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../entities/user';
import { BaseDao } from '../base-dao/base-dao';
import { UtilProvider } from '../util/util';
import { Constants } from '../../entities/Constants';

@Injectable()
export class UserDao {
  constant: Constants;
  constructor(public http: HttpClient,
    private util: UtilProvider,
    private baseDao: BaseDao) {

    this.constant = new Constants();
  }

  insertOne(item: User): Promise<any> {
    let INSERT_QUERY = "INSERT INTO OFF_USER_DEF (user, pass,servis,hatirla,ikKod, ikAd,durum,userType,userName,orgKod,dilKod,pB) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
    let params = [item.userName, item.password, item.servis, item.hatirla, item.ikKod, item.ikAd, item.durum, item.userType, item.adi, item.orgKod, item.dilKod, item.pb];
    return this.baseDao.execute(INSERT_QUERY, params);
  }

  getList(user: User): Promise<any> {
    let query = this.prepareSelectQuery(user);
    return this.baseDao.getList(query, "userName", user, this.constant.SEARCH_TYPE.EXACT, 0, 100, true);

  }

  prepareSelectQuery(user: User): string {
    let query = 'SELECT * FROM OFF_USER_DEF WHERE 1=1';
    let searchQuery = [];

    if (this.util.isNotEmpty(user.userName))
      searchQuery.push(this.util.prepareWhereQuery(this.constant.SEARCH_TYPE.EXACT, 'user', user.userName));

    if (this.util.isNotEmpty(user.password))
      searchQuery.push(this.util.prepareWhereQuery(this.constant.SEARCH_TYPE.EXACT, 'pass', user.password));

    return this.util.prepareQuery(query, searchQuery, this.constant.SEARCH_TYPE.EXACT);

  }

}
