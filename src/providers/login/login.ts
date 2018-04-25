/**
 * @author malisahin
 * @since 2018/04/25
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TokenProvider } from '../token/token';
import { UserProvider } from '../user/user';


@Injectable()
export class LoginProvider {

  constructor(public token: TokenProvider,
    private userProvider: UserProvider) {
    console.log('Hello LoginProvider Provider');
  }

  login(username, password): Promise<any> {
    return this.token.getToken(username, password).toPromise().then(res => {
      console.log(res);
    });

  }



}
