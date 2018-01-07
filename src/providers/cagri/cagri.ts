/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/


import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { HizmetDao } from '../hizmet-dao/hizmet-dao';
import { Cagri } from '../../entities/cagri/cagri';

@Injectable()
export class CagriProvider {

  constructor(public http: Http, private api: ApiProvider, private hizmetDao: HizmetDao) {
    console.log('Hello CagriProvider Provider');
  }

  downloadCagriList() {
    let url = this.api.getCagriListUrl();
    let header = this.api.getHeader();
    return this.http.get(url, header).subscribe(res => {
      let hizmetList: Cagri[];
      hizmetList = this.seperateCagri(res);
      return this.hizmetDao.insertList(hizmetList);
    });
  }



  seperateCagri(obj) {
    let hizmetList: Cagri[] = [];
    let list = [];
    list = JSON.parse(obj._body).message.HizmetDtoList;
    for (let item of list) {
      let cgr = this.fillCagri(item);
      hizmetList.push(cgr);
    }
    return hizmetList;
  }

  fillCagri(obj) {
    let item = new Cagri();
    item.aciklama = obj.aciklama
    item.adi = obj.adi
    //item.anket: Anket[];
    item.apartman = obj.apartman;
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
    item.firmaUnvani = obj.firmaUnvanı;
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
    item.serAd = obj.serAd;
    item.serKod = obj.serKod;
    item.servisNotu = obj.servisNotu;
    item.sokak = obj.sokak;
    item.soyadi = obj.soyadi;
    return item;
  }

}
