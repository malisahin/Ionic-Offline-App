/**
 * @author malisahin
 * @since 2018/04/25
*/
import { Injectable } from '@angular/core';
import { TokenProvider } from '../token/token';
import { UserProvider } from '../user/user';
import { User } from '../../entities/user';


@Injectable()
export class LoginProvider {

  user: User;

  constructor(public token: TokenProvider,
    private userProvider: UserProvider) {
    this.user = new User();
  }

  login(userCode, password): Promise<any> {
    this.user.userCode = userCode;
    this.user.password = password;
    return this.token.getToken(userCode, password).then(res => {
      localStorage.setItem(this.user.keys.userCode, userCode);
      localStorage.setItem(this.user.keys.password, password);
      console.log(res);
    });
  }




}
