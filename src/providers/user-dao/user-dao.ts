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
  constructor(public http: HttpClient,
    private util: UtilProvider,
    private baseDao: BaseDao) {

  }

  insertOne(item: User): Promise<any> {
    let INSERT_QUERY = "INSERT OR REPLACE INTO OFF_USER_DEF (user, userCode, pass,servis,hatirla,ikKod, ikAd,durum,userType,userName,orgKod,dilKod,pB) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
    let params = [item.userName, item.userCode, item.password, item.servis, item.hatirla, item.ikKod, item.ikAd, item.durum, item.userType, item.adi, item.orgKod, item.dilKod, item.pb];
    return this.baseDao.execute(INSERT_QUERY, params);
  }

  getList(user: User): Promise<any> {
    let query = this.prepareSelectQuery(user);
    return this.baseDao.getList(query, "userName", user, Constants.SEARCH_TYPE.EXACT, 0, 100, true);

  }

  prepareSelectQuery(user: User): string {
    let query = 'SELECT * FROM OFF_USER_DEF WHERE 1=1';
    let searchQuery = [];

    if (this.util.isNotEmpty(user.userName))
      searchQuery.push(this.util.prepareWhereQuery(Constants.SEARCH_TYPE.EXACT, 'user', user.userName));

    if (this.util.isNotEmpty(user.userCode))
      searchQuery.push(this.util.prepareWhereQuery(Constants.SEARCH_TYPE.EXACT, 'userCode', user.userCode));

    if (this.util.isNotEmpty(user.password))
      searchQuery.push(this.util.prepareWhereQuery(Constants.SEARCH_TYPE.EXACT, 'pass', user.password));

    return this.util.prepareQuery(query, searchQuery, Constants.SEARCH_TYPE.EXACT);

  }

}
