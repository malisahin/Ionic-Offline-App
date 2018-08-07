import { Component } from '@angular/core';
import { UtilProvider } from '../../providers/util/util';
import { LoggerProvider } from '../../providers/logger/logger';


@Component({
  selector: 'base',
  templateUrl: 'base.html'
})
export class BaseComponent {

  text: string;

  constructor(private util: UtilProvider, private logger: LoggerProvider) {

  }

}
