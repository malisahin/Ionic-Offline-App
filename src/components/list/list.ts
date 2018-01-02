import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ListItem } from '../../entities/ListItem';


@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  text: string;
  list: ListItem[];
  first: number;
  pageSize: number;

  constructor() {
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
  }

}
