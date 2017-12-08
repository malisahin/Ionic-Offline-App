/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profil } from '../../entities/profil';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  profil: Profil;

  getTokenUrl(username: string, password: string) {
    this.profil = new Profil();
    let tokenUrl = this.profil.getActiveProfil().securityUrl;
    return tokenUrl + "/" + username + "/" + password;
  }

  loginUrl: string = "";
}
