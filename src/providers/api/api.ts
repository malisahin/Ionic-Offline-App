/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Profil } from '../../entities/profil';
import { EProfiles } from '../../entities/enums/eProfil';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class ApiProvider {
  profil: Profil = new Profil();
  ACTIVE_PROFIL: EProfiles;
  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
    this.ACTIVE_PROFIL = EProfiles.LOCAL_DEV;
    let options = new RequestOptions();
  }

  getTokenUrl(username: string, password: string) {
    let tokenUrl = this.profil.getActiveProfil(this.ACTIVE_PROFIL).securityUrl + '/sos-security-service/oauth/token?grant_type=password&client_id=sos-api-enduser-mobile-client&client_secret=somesecret&';
    return tokenUrl + "username=" + username + "&password=" + password;
  }

  loginUrl: string = "";

  getKullanıcı(username: string): Observable<any> {

    return null;
  }
}
