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

@IonicPage()
@Component({
  selector: 'page-ayarlar',
  templateUrl: 'ayarlar.html',
})
export class AyarlarPage {

  activePage: string = "silme";

  deletedVersion: string = (-1).toString();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  util: UtilProvider,
              private  baseDao: BaseDao,
              private  fiyatDao: FiyatDao,
              private  hizmetDao: HizmetDao) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AyarlarPage');
  }

  async  deleteUrunler() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.URUN);
    this.util.message("Ürün Listesi Silindi");
  }

  async deleteUrunAnaGrup() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.URUN_ANA_GRUP);
    this.util.message("Ürün Ana Grup Listesi Silindi");
  }

  async deleteUrunIscilik() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.URUN_ISCILIK);
    this.util.message("Ürün Ana Grup Listesi Silindi");
  }

  async deleteUrunMalzeme() {
    await this.baseDao.deleteAll(Constants.DATA_TYPE.URUN_MALZEME);
    this.util.message("Ürün Malzeme Listesi Silindi");
  }

  async deleteIslemArizaIscilik() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.ISLEM_ARIZA_ISCILIK);
    this.util.message("Işlem Arıza İşçilik Listesi Silindi");
  }

  async deleteMalzemeFiyat() {
    await this.fiyatDao.deleteAllByTip(Constants.DATA_TYPE.MALZEME_FIYAT);
    this.util.message("Malzeme Fiyat Listesi Silindi");
  }

  async deleteIscilikFiyat() {
    await this.fiyatDao.deleteAllByTip(Constants.DATA_TYPE.ISCILIK_FIYAT);
    this.util.message("Işçilik Fiyat Listesi Silindi");
  }

  async deleteSehirList() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.SEHIR_TNM);
    this.util.message("Şehir Listesi Silindi");
  }

  async deleteIlceList() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.ILCE_TNM);
    this.util.message("Ilçe Listesi Silindi");
  }

  async deleteMahalleList() {
    await  this.baseDao.deleteAll(Constants.DATA_TYPE.MAHALLE_TNM);
    this.util.message("Mahalle Listesi Silindi");
  }

  async  deleteAllServices() {

    await  this.hizmetDao.deleteList();
    this.util.message("Çağrı Listesi Silindi");
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
    this.util.message("Tüm Kayıtlar Silindi.")

  }

}
