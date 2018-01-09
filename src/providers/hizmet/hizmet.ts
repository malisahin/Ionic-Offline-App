/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { HizmetDao } from '../hizmet-dao/hizmet-dao';
import { Hizmet } from '../../entities/hizmet/hizmet';
import { TokenProvider } from '../token/token';

@Injectable()
export class HizmetProvider {

  constructor(public http: Http, private api: ApiProvider, private hizmetDao: HizmetDao, private token: TokenProvider) {
    console.log('Hello CagriProvider Provider');
    this.token.getToken('ECAMERKEZ', 'EMAR6565');
  }

  downloadCagriList() {
    let url = this.api.getCagriListUrl();
    let header = this.api.getHeader();
    return this.http.get(url, header).subscribe(res => {
      let hizmetList: Hizmet[];
      hizmetList = this.seperateCagri(res);
      return this.hizmetDao.insertList(hizmetList);
    })
  }



  seperateCagri(obj) {
    let hizmetList: Hizmet[] = [];
    let list = [];
    list = JSON.parse(obj._body).message.HizmetDtoList;
    for (let item of list) {
      let cgr = this.fillHizmet(item);
      hizmetList.push(cgr);
    }
    return hizmetList;
  }

  fillHizmet(obj) {
    let item = new Hizmet();
    item.aciklama = obj.aciklama
    item.adi = obj.adi
    //item.anket: Anket[];
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
    item.daireNo = obj.daireNo
    //item.detayList: CagriDetay[];
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
    //item.islemList: IslemList[];
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
