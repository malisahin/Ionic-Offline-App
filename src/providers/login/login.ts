/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from '../../components/login/login';
import { Api } from '../../util/api-urls';
import { TokenProvider } from '../token/token';


@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient, public api: Api, public token: TokenProvider) {
    console.log('Hello LoginProvider Provider');
  }

  search(term: string): Observable<Array<string>> {
    let tokenUrl = this.token.getToken();

    return null;
  }

}
