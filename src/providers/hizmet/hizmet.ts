/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


import {Injectable} from '@angular/core';
import {HizmetDao} from '../hizmet-dao/hizmet-dao';
import {Hizmet} from '../../entities/hizmet/hizmet';
import {TokenProvider} from '../token/token';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {ApiProvider} from '../api/api';
import {Anket} from "../../entities/hizmet/anket";
import {IslemList} from "../../entities/hizmet/islemList";

@Injectable()
export class HizmetProvider {

  getToken: Promise<any>;

  constructor(public http: HttpClient, private api: ApiProvider, private hizmetDao: HizmetDao, private token: TokenProvider) {
    console.log('Hello CagriProvider Provider');

  }

  downloadCagriList(): Promise<any> {

    return new Promise((resolve, reject) => {
      this.token.getTokenInside()
        .then(res => this.fetchDataFromApi())
        .then(res => this.insertComingData(res))
        .then(res => resolve("SUCCESS"));
    });

  }

  fetchDataFromApi(): Promise<any> {
    let url = this.api.getCagriListUrl();
    let header = this.api.getHeader();
    return new Promise((resolve, reject) => {
      this.http.get(url, {headers: header}).toPromise().then(res => {
        resolve(res);
      });
    });
  }

  insertComingData(res: any): Promise<any> {
    let hizmetList: Hizmet[];
    hizmetList = this.seperateCagri(res);
    return this.hizmetDao.insertList(hizmetList);
  }


  seperateCagri(obj) {
    let hizmetList: Hizmet[] = [];
    let list = [];
    list = obj.message.hizmetDtoList;
    for (let item of list) {
      let cgr = this.fillHizmet(item);
      hizmetList.push(cgr);
    }
    return hizmetList;
  }

  fillHizmet(obj) {
    let item = new Hizmet();
    item.aciklama = obj.aciklama;
    item.adi = obj.adi;
    //item.anket = Anket[];
    item.apartman = obj.aparman;
    item.basvuruNedenAdi = obj.basvuruNedenAdi;
    item.basvuruNedeni = obj.basvuruNedeni;
    item.bayiKod = obj.bayiKod;
    item.blok = obj.blok;
    item.cadde = obj.cadde;
    item.cagriTarihi = obj.cagriTarihi;
    item.cmNo = obj.cmNo;
    item.cmTarihi = obj.cmTarihi;
    item.cozumKodu = obj.cozumKodu;
    item.daireNo = obj.daireNo;
    item.detayList = obj.detayDtoList;
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
    item.islemBitTarihi = obj.islemBitTarihi;
    item.islemList = obj.islemList;
    item.islemTarihi = obj.islemTarihi;
    item.kapatmaKodu = obj.kapatmaKodu;
    item.mahalle = obj.mahalle;
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
    item.randevuTarihi = obj.randevuTarihi;
    item.sattar = obj.sattar;
    item.sehir = obj.sehir;
    item.sehirKod = obj.sehirKod;
    item.semt = obj.semt;
    item.seqNo = obj.seqNo;
    item.serAd = obj.serAdi;
    item.serKod = obj.serKod;
    item.servisNotu = obj.servisNotu;
    item.sokak = obj.sokak;
    item.soyadi = obj.soyadi;
    return item;
  }


}
