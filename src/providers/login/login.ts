/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TokenProvider } from '../token/token';


@Injectable()
export class LoginProvider {

  constructor(public token: TokenProvider) {
    console.log('Hello LoginProvider Provider');
  }

  login(username, password) {
    let tokenUrl = this.token.getToken(username, password).subscribe(res => {
      alert(res);
    });

  }

}
