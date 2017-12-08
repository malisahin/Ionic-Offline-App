/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from '../../components/login/login';
import { Api } from '../../util/api-urls';


@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello LoginProvider Provider');
  }

  search(term: string): Observable<string> {
    let tokenUrl = this.api.tokenUrl;
    return null;
  }

}
