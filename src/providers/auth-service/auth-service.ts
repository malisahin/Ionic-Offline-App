/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}

@Injectable()
export class AuthService {

  currentUser: User;

  public login(credentials) {
    if (credentials.email === null || credentials === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let access = (credentials.passwordd === 'pass' && credentials.email === 'email');
        this.currentUser = new User('Ali', '1234');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });

  }

}
