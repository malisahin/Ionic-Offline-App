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


  INTERVAL_NAME = "INTERVAL_NAME";
  TASK_TIME_INTERVAL: number;

  ASYNC_CHECK_INTERVAL = 30000;

  public interval: any;

  constructor(private util: UtilProvider,
              private mesajProvider: MesajlarProvider,
              private versiyonProvider: VersiyonProvider,
              private logger: LoggerProvider) {
    this.init();
  }

  init() {
    this.TASK_TIME_INTERVAL = Number(localStorage.getItem(Constants.SYNC.TIME));
    this.TASK_TIME_INTERVAL = this.TASK_TIME_INTERVAL * 60 * 1000;
  }

  runTasks() {
    this.interval = setInterval(() => {
      let token = localStorage.getItem(Constants.ACCESS_TOKEN);
      if (this.util.isNotEmpty(token) && this.checkInterval()) {
        this.logger.success("Tasks running command is given.");
        this.versiyonTask();
        this.messageTask();
        localStorage.setItem(Constants.SYNC.MOMENT, String(new Date().getTime()));
      }

    }, this.ASYNC_CHECK_INTERVAL);
    localStorage.setItem(this.INTERVAL_NAME, String(this.interval));
  }

  public killAndStartTasks() {
    this.killTasks();
    this.startTasks();
    // this.runTasks();
  }

  public killTasks() {
    let interval = Number(localStorage.getItem(this.INTERVAL_NAME));
    this.logger.warn("Task Killed. [" + String(this.interval) + "]");
    clearInterval(interval);
  }

  public  startTasks() {
    this.logger.info("Task Started.");
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

  checkInterval() {
    this.logger.warn("Tasks is checking.");
    let canSync = false;

    let lastSyncMoment = localStorage.getItem(Constants.SYNC.MOMENT);
    if (this.util.isEmpty(lastSyncMoment)) {
      localStorage.setItem(Constants.SYNC.MOMENT, String(new Date().getTime()));
    }

    let moment = new Date().getTime();
    let nextSyncTime = (Number(this.TASK_TIME_INTERVAL) + Number(lastSyncMoment));
    this.logger.info("Moment " + moment + " / Next sync time :" + nextSyncTime);
    if (moment > nextSyncTime) {
      canSync = true;
    }

    return canSync;
  }


}

