/**
 * @author mali.sahin
 * @since 03.07.2018
 */

import {Injectable} from '@angular/core';
import {UtilProvider} from "../util/util";
import {LoggerProvider} from "../logger/logger";
import {ApiProvider} from "../api/api";
import {TokenProvider} from "../token/token";
import {HttpClient} from "@angular/common/http";
import {MesajlarProvider} from "../mesajlar/mesajlar";
import {UserProvider} from "../user/user";
import {VersiyonProvider} from "../versiyon/versiyon";
import {Constants} from "../../entities/Constants";


@Injectable()
export class TasksProvider {


  TASK_TIME_INTERVAL: number;

  public interval: any;

  constructor(private util: UtilProvider,
              private mesajProvider: MesajlarProvider,
              private versiyonProvider: VersiyonProvider,
              private logger: LoggerProvider) {
    this.init();
  }

  init() {
    this.TASK_TIME_INTERVAL = Number(localStorage.getItem(Constants.SYNC_TIME));
    this.TASK_TIME_INTERVAL = this.TASK_TIME_INTERVAL * 60 * 1000;
  }

  runTasks() {
    this.interval = setInterval(() => {
      this.logger.warn("Tasks running command is given.");
      let token = localStorage.getItem(Constants.ACCESS_TOKEN);
      if (this.util.isNotEmpty(token)) {
        this.versiyonTask();
        this.messageTask();
      }

    }, this.TASK_TIME_INTERVAL);
  }

  public killAndStartTasks() {
    this.logger.warn("Task Killed. [" + String(this.interval) + "]");
    clearInterval(this.interval);
    this.init();
    this.runTasks();
  }


  async versiyonTask() {
    this.logger.warn("Versiyon Task Started");
    await this.versiyonProvider.getVersiyonFromServer();
  }

  async messageTask() {
    this.logger.warn("Messages Task Started");
    await this.mesajProvider.getDataFromApi(Constants.CALLED_FROM.TASKS);
  }


}

