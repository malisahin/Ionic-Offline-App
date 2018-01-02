import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListItem } from '../../entities/ListItem';
import { ViewController } from 'ionic-angular/navigation/view-controller';



@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  text: string;
  list: ListItem[];
  first: number;
  pageSize: number = 10;


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  constructor(private viewCtrl: ViewController) {
    console.log('Hello ListComponent Component');
    this.text = 'Hello World';

    this.list = [
      new ListItem('ItemName1', 'Code1'),
      new ListItem('ItemName2', 'Code2'),
      new ListItem('ItemName3', 'Code3'),
      new ListItem('ItemName4', 'Code4')
    ]
  }


  itemSelected() {
    console.log("Item selected")
    let obje = {
      sample: 'hello'
    }
    this.viewCtrl.dismiss(obje);
  }

}
