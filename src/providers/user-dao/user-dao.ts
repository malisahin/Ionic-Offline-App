import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UserDao {

  constructor(public http: HttpClient) {
    console.log('Hello UserDaoProvider Provider');
  }

}
