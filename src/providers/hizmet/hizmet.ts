/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


import { Injectable } from '@angular/core';
import { HizmetDao } from '../hizmet-dao/hizmet-dao';
import { Hizmet } from '../../entities/hizmet/hizmet';
import { TokenProvider } from '../token/token';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../api/api';
import { DetayKayit } from "../../entities/hizmet/DetayKayit";
import { UtilProvider } from "../util/util";
import { UrunAnaGrpProvider } from "../urun-ana-grp/urun-ana-grp";
import { UrunAnaGrup } from "../../entities/urunAnaGrup";
import { Constants } from "../../entities/Constants";
import { LoggerProvider } from "../logger/logger";
import { async } from "@angular/core/testing";
import { Ilce } from "../../entities/Ilce";
import { AdresDao } from "../adres-dao/adres-dao";
import { Anket } from "../../entities/hizmet/Ankets/Anket";
import { AnketService } from "../anket-service/anket-service";

@Injectable()
export class HizmetProvider {

  getToken: Promise<any>;

  constructor(public http: HttpClient,
    private api: ApiProvider,
    private hizmetDao: HizmetDao,
    private token: TokenProvider,
    private urunAnaGrpProvider: UrunAnaGrpProvider,
    private logger: LoggerProvider,
    private adresDao: AdresDao,
    private anketService: AnketService,
    private util: UtilProvider) {


  }

  async downloadCagriList(): Promise<any> {
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      this.util.loaderStart(false);

      let res = await this.fetchDataFromApi(header);
      if (this.util.isNotEmpty(res)) {
        return await this.insertComingData(res);
      }

    } else {
      this.util.error("Çağrılar yalnızca online durumda güncellenebilir.")
    }
  }

  async getMevcutCagriSeqNoList(): Promise<Number[]> {
    let seqNoList: Number[] = [];
    let query = " SELECT seqNo FROM OFF_HIZ_MST WHERE durum = 'ACIK' ";
    let res = await this.hizmetDao.findWithQuery(query);

    if (this.util.isNotEmptyRows(res)) {
      for (let i = 0; i < res.rows.length; i++) {
        seqNoList.push(res.rows.item(i).seqNo);
      }
    }

    return seqNoList;
  }

  async updateCagri(hizmet: Hizmet, durum: string): Promise<any> {
    let url = this.api.setCagriUrl(durum);
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      return this.http.post(url, hizmet, { headers: header }).toPromise();
    } else {
      this.util.ifOffline();
    }
  }


  async fetchDataFromApi(header): Promise<any> {
    let url = this.api.getCagriListUrl();
    let seqNoList = await this.getMevcutCagriSeqNoList();
    try {
      let res = await this.http.post(
        url,
        { seqNoListe: seqNoList },
        { headers: header })
        .toPromise();

      return new Promise((resolve, reject) => {
        resolve(res);
      });

    }
    catch (e) {
      this.logger.error("Çağrı indirme hatası ==> ");
      this.logger.dir(e);
      this.util.error("Çağrıları indirirken bir hata oluştu. Lütfen tekrar deneyiniz.");
      this.util.loaderEnd();
    }
  }

  async insertComingData(res: any): Promise<any> {
    let hizmetList: Hizmet[];
    hizmetList = await this.seperateCagri(res);
    localStorage.setItem(Constants.LENGTHS.HIZMET_LIST, String(hizmetList.length));
    hizmetList = await this.hizmetBosAlanlariDoldur(hizmetList);
    return this.hizmetDao.insertList(hizmetList);
  }


  async updateComingData(res: any): Promise<any> {
    let hizmetList: Hizmet[];
    hizmetList = await this.seperateCagri(res);
    await hizmetList.forEach(item => {
      this.hizmetDao.updateHizmet(item);
    });
  }


  async seperateCagri(obj) {
    let hizmetList: Hizmet[] = [];
    let list = [];
    let silinmesiGerekenCagrilar = [];

    if (this.util.isNotEmpty(obj.message) && this.util.isNotEmpty(obj.message.silinmesiGerekenCagrilar)) {
      silinmesiGerekenCagrilar = obj.message.silinmesiGerekenCagrilar;
      await this.silinmesiGerekenCagrilariSil(silinmesiGerekenCagrilar);
    }

    if (this.util.isNotEmpty(obj.message) && this.util.isNotEmpty(obj.message.hizmetDtoList)) {
      list = obj.message.hizmetDtoList;

      for (let item of list) {
        let cgr = this.fillHizmet(item);
        hizmetList.push(cgr);
      }
    }

    return hizmetList;
  }

  async silinmesiGerekenCagrilariSil(silinmesiGerekenCagrilar: any[]): Promise<any> {
    return this.hizmetDao.deleteHizmetList(silinmesiGerekenCagrilar);
  }

  fillHizmet(obj): Hizmet {
    /**
     *
     * @type fromServer
     *  @description Hem Sunucudan gelen veri hem de uygulama içerisindeki veri bu fonksiyon ile dolduruluyor.
     *  Sunucu ile Client verisi hazırlanırken ufak bir farklılık mevcut. Bu farklılığı 'fromServer' ile yönetiyoruz.
     */
    let fromServer: boolean = false;
    /*  farklılık:
     *    server : detayDtoList : [][]
     *    client : detayDtoList : []
     *
     */


    //DeepClone amaçlı önce String'e sonra da JSON Obje'ye dönüşüm olmuştur.
    //Bu entity içerisinde metod eklenir ise bu dönüşüm ile KAYBOLACAKTIR!!
    let objString = JSON.stringify(obj);
    obj = JSON.parse(objString);


    let item = new Hizmet();
    item.aciklama = obj.aciklama;
    item.adi = obj.adi;
    item.anket = this.anketService.fillAnket(obj.anket);

    item.aparman = obj.aparman;
    item.apartmanNo = obj.apartmanNo;
    item.basvuruNedenAdi = obj.basvuruNedenAdi;
    item.basvuruNedeni = obj.basvuruNedeni;
    item.bayiKod = obj.bayiKod;
    item.blok = obj.blok;
    item.cadde = obj.cadde;
    item.cagriTarihi = this.util.newDateTime(obj.cagriTarihi);
    item.cmNo = obj.cmNo;
    item.cmTarihi = this.util.newDateTime(obj.cmTarihi);
    item.cozumKodu = obj.cozumKodu;
    item.daireNo = obj.daireNo;

    if (obj.detayDtoList != null && obj.detayDtoList.length > 0) {
      fromServer = Array.isArray(obj.detayDtoList[0]);
      // Sunucudan matris geldiği için obj.detayDtoList[0] kullanmak gerekti. Uygulama da normal array kullanılıyor.
      if (fromServer)
        item.detayDtoList = this.fillHizmetDetay(obj.detayDtoList[0], obj.seqNo);
      else {
        item.detayDtoList = this.fillHizmetDetay(obj.detayDtoList, obj.seqNo);
      }
    }
    item.durum = obj.durum;
    item.eposta = obj.eposta;
    item.evTel = obj.evTel;
    item.firmaUnvani = obj.firmaUnvani;
    item.garanti = obj.garanti;
    item.gsmNo = obj.gsmNo;
    item.hizmetTipi = obj.hizmetTipi;
    item.hizmetTipiAdi = obj.hizmetTipiAdi;
    item.ikKod = obj.ikKod;
    item.ilceKod = obj.ilceKod;
    item.iletisimIstek = obj.iletisimIstek;
    item.isTel = obj.isTel;
    item.islemBitTarihi = this.util.newDateTime(obj.islemBitTarihi);

    if (obj.islemList != null && obj.islemList.length > 0) {
      fromServer = Array.isArray(obj.islemList[0]);

      item.islemList = this.fillIslemList(fromServer, obj); //fromServer ? obj.islemList[0] : obj.islemList;
    }

    item.islemTarihi = this.util.newDateTime(obj.islemTarihi);
    item.kapatmaKodu = obj.kapatmaKodu;
    item.mahalle = obj.mahalle;
    item.mahalleKodu = obj.mahalleKodu;
    item.mamAdi = obj.mamAdi;
    item.mamAnaGrp = obj.mamAnaGrp;
    item.mamAnaGrpAdi = obj.mamAnaGrpAdi;
    item.mamKod = obj.mamKod;
    item.mamSeriNo = obj.mamSeriNo;
    item.mamSeriNo2 = obj.mamSeriNo2;
    item.merkezNotu = obj.merkezNotu;
    item.mesguliyet = obj.mesguliyet;
    item.musId = obj.musId;
    item.musKod = obj.musKod;
    item.musTip = obj.musTip;
    item.nobet = obj.nobet;
    item.odemeTipi = obj.odemeTipi;
    item.randevuTarihi = this.util.newDateTime(obj.randevuTarihi);
    item.sattar = this.util.newDateTime(obj.sattar);
    item.sehir = obj.sehir;
    item.sehirKod = obj.sehirKod;
    item.semt = obj.semt;
    item.seqNo = obj.seqNo;
    item.serAd = obj.serAdi;
    item.serKod = obj.serKod;
    item.servisNotu = obj.servisNotu;
    item.sokak = obj.sokak;
    item.soyadi = obj.soyadi;
    item.crmNo = obj.crmNo;
    return item;
  }

  fillIslemList(fromServer: boolean, obj: any) {

    let islemList = fromServer ? obj.islemList[0] : obj.islemList;

    if (this.util.isNotEmpty(islemList)) {
      islemList.forEach(item => {
        item.basTar = this.util.newDateTime(item.basTar);
        item.bitTar = this.util.newDateTime(item.bitTar);
      })
    }
    return islemList;

  }


  fillHizmetDetay(detayList: any[], seqNo: string) {
    let detayDtoList: DetayKayit[] = [];
    detayList.forEach(res => {
      let det: DetayKayit = new DetayKayit();
      det.seqNo = seqNo;
      det.satirNo = res.satirNo;
      det.islemKod = res.islemKod;
      det.arizaKod = res.arizaKod;
      det.mlzIsc = res.mlzIsc;
      det.mlzIscKod = res.mlzIscKod;
      det.aciklama = res.aciklama;
      det.miktar = Number(res.miktar);
      det.birimFiyat = Number(res.birimFiyat);
      det.kdvOran = 18;
      det.tutar = Number(res.tutar);
      det.olcuBrm = "";
      det.satirHata = "";
      detayDtoList.push(det);
    });

    return detayDtoList;
  }


  async hizmetBosAlanlariDoldur(hizmetList: Hizmet[]): Promise<Hizmet[]> {
    if (this.util.isNotEmpty(hizmetList)) {
      for (let i = 0; i < hizmetList.length; i++) {
        let item = hizmetList[i];
        item = await this.mamAnaGrpDoldur(item);
        item = await this.basvuruNedenDoldur(item);
        item = await this.ilceDoldur(item);
      }
    }

    return hizmetList;
  }

  async mamAnaGrpDoldur(hizmet: Hizmet): Promise<Hizmet> {
    let filter: UrunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    if (this.util.isNotEmpty(hizmet.mamAnaGrp)) {
      filter.mamAnaGrp = hizmet.mamAnaGrp;
      let res = await this.urunAnaGrpProvider.findUrunAnaGrp(filter);
      if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.ad)) {
        hizmet.mamAnaGrpAdi = res.ad;
      }
    }
    return hizmet;
  }

  async basvuruNedenDoldur(hizmet: Hizmet): Promise<Hizmet> {
    let filter: UrunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
    if (this.util.isNotEmpty(hizmet.basvuruNedeni)) {
      filter.mamAnaGrp = hizmet.mamAnaGrp;
      filter.neden = hizmet.basvuruNedeni;
      let res = await this.urunAnaGrpProvider.findUrunAnaGrp(filter);
      if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.ad)) {
        hizmet.basvuruNedenAdi = res.ad;
      }
    }
    return hizmet;
  }

  async fillAnket() {

  }

  async ilceDoldur(hizmet: Hizmet): Promise<Hizmet> {

    if (this.util.isNotEmpty(hizmet.sehirKod) && this.util.isNotEmpty(hizmet.ilceKod)) {
      let filter: Ilce = new Ilce();
      filter.sehirKodu = hizmet.sehirKod;
      filter.ilceKodu = hizmet.ilceKod;
      let res = await this.adresDao.getIlce(filter);

      if (this.util.isNotEmptyRows(res)) {
        hizmet.ilceAdi = res.rows.item(0).ilceAdi;
      }
    }
    return hizmet;
  }


  getAdres(item: Hizmet): string {
    let adres = "";

    if (this.util.isNotEmpty(item.semt))
      adres += "Semt: " + item.semt + " ";

    if (this.util.isNotEmpty(item.mahalle))
      adres += "Mah: " + item.mahalle + " ";

    if (this.util.isNotEmpty(item.cadde))
      adres += "Cadde: " + item.cadde + " ";

    if (this.util.isNotEmpty(item.sokak))
      adres += "Sokak: " + item.sokak + " ";

    if (this.util.isNotEmpty(item.aparman))
      adres += "Apt: " + item.aparman + " ";

    if (this.util.isNotEmpty(item.apartmanNo))
      adres += " " + item.apartmanNo + " ";

    if (this.util.isNotEmpty(item.daireNo))
      adres += "Daire: " + item.daireNo + " ";

    return adres;
  }

  getIlIlce(item: Hizmet) {
    let ilIlce = "";

    if (this.util.isNotEmpty(item.ilceAdi))
      ilIlce += item.ilceAdi;

    if (this.util.isNotEmpty(item.sehir))
      ilIlce += "/" + item.sehir;

    return ilIlce;
  }


}
