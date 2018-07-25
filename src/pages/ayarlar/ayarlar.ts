/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";
import {Constants} from "../../entities/Constants";
import {BaseDao} from "../../providers/base-dao/base-dao";
import {FiyatDao} from "../../providers/fiyat-dao/fiyat-dao";
import {HizmetDao} from "../../providers/hizmet-dao/hizmet-dao";
import {CagrilarPage} from "../cagrilar/cagrilar";
import {GuncellemePage} from "../guncelleme/guncelleme";
import {TasksProvider} from "../../providers/tasks/tasks";
import {BehaviorSubject} from "rxjs";
import {ThemeProvider} from "../../providers/theme/theme";
import {LoggerProvider} from "../../providers/logger/logger";

@IonicPage()
@Component({
  selector: 'page-ayarlar',
  templateUrl: 'ayarlar.html',
})

export class AyarlarPage {

  activePage: string = "silme";

  deletedVersion: string = (-1).toString();
  syncTime: number;
  DEFAULT_SYNC_TIME: number = 2;

  selectedTheme: string;
  messageDuration: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  util: UtilProvider,
              private  baseDao: BaseDao,
              private tasks: TasksProvider,
              private  fiyatDao: FiyatDao,
              private  hizmetDao: HizmetDao,
              private themeProvider: ThemeProvider,
              private logger: LoggerProvider) {
    this.onChangeSyncTime('TS');
    this.selectedTheme = this.themeProvider.getSelectedTheme();
    this.onChangeTheme();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AyarlarPage');
    this.onChangeMessageDuration('TS');
  }

  async  deleteUrunler() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.URUN);
    this.util.info("Ürün Listesi Silindi");
  }

  async deleteUrunAnaGrup() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.URUN_ANA_GRUP);
    this.util.info("Ürün Ana Grup Listesi Silindi");
  }

  async deleteUrunIscilik() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.URUN_ISCILIK);
    this.util.info("Ürün Ana Grup Listesi Silindi");
  }

  async deleteUrunMalzeme() {
    await this.baseDao.deleteAll(Constants.DATA_TYPE.URUN_MALZEME);
    this.util.info("Ürün Malzeme Listesi Silindi");
  }

  async deleteIslemArizaIscilik() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.ISLEM_ARIZA_ISCILIK);
    this.util.info("Işlem Arıza İşçilik Listesi Silindi");
  }

  async deleteMalzemeFiyat() {
    await this.fiyatDao.deleteAllByTip(Constants.DATA_TYPE.MALZEME_FIYAT);
    this.util.info("Malzeme Fiyat Listesi Silindi");
  }

  async deleteIscilikFiyat() {
    await this.fiyatDao.deleteAllByTip(Constants.DATA_TYPE.ISCILIK_FIYAT);
    this.util.info("Işçilik Fiyat Listesi Silindi");
  }

  async deleteSehirList() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.SEHIR_TNM);
    this.util.info("Şehir Listesi Silindi");
  }

  async deleteIlceList() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.ILCE_TNM);
    this.util.info("Ilçe Listesi Silindi");
  }

  async deleteMahalleList() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.MAHALLE_TNM);
    this.util.info("Mahalle Listesi Silindi");
  }

  async  deleteAllServices() {

    await  this.hizmetDao.deleteList();
    this.util.info("Çağrı Listesi Silindi");
    setTimeout(() => {
      this.navCtrl.push(CagrilarPage)
    }, 500);
  }

  async deleteAllRecords() {
    await this.deleteUrunler();
    await this.deleteUrunAnaGrup();
    await this.deleteUrunIscilik();
    await this.deleteUrunMalzeme();
    await this.deleteIslemArizaIscilik();
    await this.deleteMalzemeFiyat();
    await this.deleteIscilikFiyat();
    await this.deleteSehirList();
    await this.deleteIlceList();
    await this.deleteMahalleList();
    this.util.info("Tüm Kayıtlar Silindi.");
    setTimeout(() => {
      this.navCtrl.push(GuncellemePage)
    }, 500);
  }

  onChangeSyncTime(nerden: string) {
    let permanentSyncTime = Number(localStorage.getItem(Constants.SYNC.TIME));
    if (this.util.isEmpty(this.syncTime)) {
      if (this.util.isEmpty(permanentSyncTime)) {
        this.syncTime = this.DEFAULT_SYNC_TIME;
        localStorage.setItem(Constants.SYNC.TIME, String(this.DEFAULT_SYNC_TIME));
      } else {
        this.syncTime = Number(permanentSyncTime);
      }
    } else {
      localStorage.setItem(Constants.SYNC.TIME, String(this.syncTime));
      if (nerden == 'HTML') {
        this.util.success("Senkronize süresi değiştirildi. Atanan değer " + String(this.syncTime) + " dk.");
        this.tasks.killAndStartTasks();
      }
    }
  }


  onChangeTheme() {
    if (this.util.isEmpty(this.selectedTheme)) {
      this.logger.log("Tema seçilmemiş default set edilir.");
      this.themeProvider.setTheme();
    } else {
      this.logger.log("Tema değiştirildi. Yeni tema" + this.selectedTheme);
      this.themeProvider.changeTheme(this.selectedTheme);
    }
  }

  onChangeMessageDuration(nerden: string) {
    if (this.util.isEmpty(this.messageDuration)) {
      let duration = localStorage.getItem(Constants.MESSAGE_DURATION);
      if (this.util.isEmpty(duration)) {
        duration = Constants.DEFAULT_MESSAGE_DURATION;
        localStorage.setItem(Constants.MESSAGE_DURATION, duration);
      }
      this.messageDuration = Number(duration);
    }

    if (nerden == "HTML") {

      localStorage.setItem(Constants.MESSAGE_DURATION, String(this.messageDuration));

      let degisimSonrasiUyari = "Uyarı Süresi Değiştirildi. Atanan Değer : " + this.messageDuration;
      this.util.success(degisimSonrasiUyari);
      this.logger.info(degisimSonrasiUyari);
    }


  }

}
