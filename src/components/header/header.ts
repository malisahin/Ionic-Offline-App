/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';


@Component({
  selector: 'icon-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;

  constructor(private nav: NavController) {
    console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';
  }


  sayfayaGit(page) {
    this.nav.push(page);
  }

}
