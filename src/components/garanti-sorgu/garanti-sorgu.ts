import {Component} from '@angular/core';
import {UrunAnaGrup} from '../../entities/urunAnaGrup';
import {UrunAnaGrupDao} from '../../providers/urun-ana-grup-dao/urun-ana-grup-dao';
import {Urun} from '../../entities/urun';
import {ModalController} from 'ionic-angular';
import {Constants} from '../../entities/Constants';
import {UtilProvider} from '../../providers/util/util';
import {UrunAnaGrupSearchComponent} from '../urun-ana-grup-search/urun-ana-grup-search';
import {UrunSearchComponent} from '../urun-search/urun-search';
import {HttpClient} from '@angular/common/http';
import {GarantiSorgu} from '../../entities/GarantiSorgu';
import {GarantiSorguProvider} from '../../providers/garanti-sorgu/garanti-sorgu';
import {User} from '../../entities/user';
import {UtilPlugin} from "../../providers/util-plugin/util-plugin";


@Component({
  selector: 'garanti-sorgu',
  templateUrl: 'garanti-sorgu.html'
})
export class GarantiSorguComponent {

  barkodNo: string;
  urun: Urun;
  urunAnaGrupList: UrunAnaGrup[];
  urunAnaGrup: UrunAnaGrup;
  faturaTarihi: Date;
  data = {type: "", nerden: "BILGI_SORGU"};

  constructor(private urunAnaGrupDao: UrunAnaGrupDao,
              private modalController: ModalController,
              private util: UtilProvider,
              private garantiSorguProvider: GarantiSorguProvider,
              private plugins: UtilPlugin,
              public http: HttpClient) {
    this.urunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    this.urun = new Urun();
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.urunAnaGrupDao.getPage(this.urunAnaGrup, Constants.SEARCH_TYPE.EXACT, 0, 10).then(list => {
      this.urunAnaGrupList = list.rows;
    });
  }


  public urunAnaGrupSorgula() {
    this.data.type = Constants.DATA_TYPE.URUN_ANA_GRUP;
    let aramaModal = this.modalController.create(UrunAnaGrupSearchComponent, {data: this.data});
    aramaModal.onDidDismiss(data => {
      this.urunAnaGrup = data;
    });
    aramaModal.present();
  }

  public urunSorgula() {

    this.data.type = Constants.DATA_TYPE.URUN;
    let aramaModal = this.modalController.create(UrunSearchComponent, {data: this.data});
    aramaModal.onDidDismiss(data => {
      this.urun = data;
    });
    aramaModal.present();
  }

  garantiSorgula() {
    if (this.util.isEmpty(this.faturaTarihi)) {
      this.util.error("Fatura tarihi boş bırakılamaz");
      return false;
    }
    if (this.util.isEmpty(this.barkodNo)) {
      this.util.error("Barkod No Boş bırakılamaz");
      return false;
    }
    this.util.success("Garanti Sorgulandı");
    let sorguData = new GarantiSorgu();
    let user = new User();
    sorguData.mamKod = this.urun.mamKod;
    sorguData.satisTarihi = this.faturaTarihi.toString();
    sorguData.orgKod = "ECA";  //user.getOrgKod();
    sorguData.mamSeriNo = this.barkodNo;
    sorguData.islemTarihi = this.faturaTarihi.toString(); // new Date().toString();
    sorguData.serKod = "ECA_TEST"; //user.getSerKod();
    sorguData.dilKod = "T"; //user.getDilKod();
    this.garantiSorguProvider.fetchDataFromApi(sorguData);
  }

  async scanBarcode() {
    let result = await this.plugins.scanBarcode();
    if (this.util.isNotEmpty(result) && this.util.isNotEmpty(result.text)) {
      this.util.success(" Barcode Alındı: " + result.text);
      this.barkodNo = result.text;
    }

  }

}
