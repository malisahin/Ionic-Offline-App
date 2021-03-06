/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Injectable } from "@angular/core";
import { BaseDao } from "../base-dao/base-dao";
import { Hizmet } from "../../entities/hizmet/hizmet";
import { LoggerProvider } from "../logger/logger";
import { Pageable } from "../../entities/Pageable";
import { Constants } from "../../entities/Constants";
import { UtilProvider } from "../util/util";

@Injectable()
export class HizmetDao {
  INSERT_QUERY = "INSERT INTO OFF_HIZ_MST(seqNo, randevuTarihi, hizmetTipiAdi, mamAnaGrpAdi, basvuruNedeni, durum, adi, soyadi, firmaUnvani, evTel, isTel, gsmNo, data) " +
    " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ";
  UPDATE_QUERY = "UPDATE OFF_HIZ_MST SET seqNo =?, randevuTarihi=?, hizmetTipiAdi=?, mamAnaGrpAdi=?, basvuruNedeni=?, durum=?, adi=?, soyadi=?, firmaUnvani=?" +
    ", evTel =?, isTel=?, gsmNo=?, data=? WHERE seqNo=?  ";
  DELETE_QUERY = "DELETE FROM OFF_HIZ_MST";

  insertedRow: number = 0;

  constructor(private baseDao: BaseDao, private logger: LoggerProvider, private util: UtilProvider) {

  }

  // Listede her bir item kayit edilir ve liste tekrar cagrilir.Cagrilmadan once kayit edilen item listeden silinir.
  insertList(list: Hizmet[]): Promise<any> {
    let array: Promise<any>[] = [];
    for (let item of list) {
      array.push(this.insertOne(item));
    }
    return Promise.all(array).then(res => {
      console.log("Çağrı Listesi Kayıt Edildi");
      return res;
    });
  }

  async insertOne(hizmet: Hizmet): Promise<any> {
    hizmet = this.filterToSaveHizmet(hizmet);
    let hizmetObject: string = JSON.stringify(hizmet);
    this.logger.warn("Randevu Tarihi => " + hizmet.randevuTarihi);
    let isHizmetExist = await this.isHizmetExist(hizmet.seqNo);
    if (!isHizmetExist) {
      let params = [hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
      hizmet.durum, hizmet.adi, hizmet.soyadi, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo, hizmetObject];
      return this.baseDao.execute(this.INSERT_QUERY, params);
    }
  }

  updateHizmet(hizmet: Hizmet) {
    hizmet = this.filterToSaveHizmet(hizmet);
    let hizmetObject: string = JSON.stringify(hizmet);
    let params = [hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
    hizmet.durum, hizmet.adi, hizmet.soyadi, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo, hizmetObject, hizmet.seqNo];
    return this.baseDao.execute(this.UPDATE_QUERY, params);
  }

  filterToSaveHizmet(hizmet: Hizmet): any {

    /*if (this.util.isNotEmpty(hizmet.randevuTarihi))
      hizmet.randevuTarihi = this.util.newDateTime(hizmet.randevuTarihi);

    if (this.util.isNotEmpty(hizmet.cagriTarihi))
      hizmet.cagriTarihi = this.util.newDateTime(hizmet.cagriTarihi);
*/
    return hizmet;
  }

  find(item: Hizmet, orderBy: string, pageable: Pageable): Promise<Hizmet[]> {
    let query = this.prepareSelectQuery(item);
    this.logger.info("Query ==> " + query + "/ ORDER BY ==> " + orderBy);
    return this.search(query, orderBy, pageable);
  }

  findOne(seqNo: string) {
    let query = "SELECT * FROM OFF_HIZ_MST WHERE 1=1 AND seqNo='" + seqNo + "'";
    return this.baseDao.execute(query, []);
  }

  search(query: string, orderBy: string, pageable: Pageable): Promise<any> {
    return this.baseDao.getList(query, orderBy, "", "EXACT", pageable.first, pageable.pageSize, true);
  }

  findWithQuery(query: string): Promise<any> {
    return this.baseDao.execute(query, []);
  }

  async isHizmetExist(seqNo: string): Promise<boolean> {
    let hizmet: Hizmet = new Hizmet();
    hizmet.seqNo = seqNo;
    let res = await this.baseDao.execute(this.prepareSelectQuery(hizmet), []);
    this.logger.dir(res);
    return res.rows.length > 0;
  }

  prepareSelectQuery(item: Hizmet): string {
    let query = "SELECT * FROM OFF_HIZ_MST WHERE 1=1 ";

    if (item.seqNo != null && item.seqNo != "")
      query += " AND seqNo= '" + item.seqNo + "' ";

    // TODO: Randevu Tarihi between date yapilacak sekilde duzenlenmeli
    if (this.util.isNotEmpty(item.randevuTarihi))
      query += " AND randevuTarihi='" + item.randevuTarihi + "'";

    if (item.hizmetTipiAdi != null && item.hizmetTipiAdi != "")
      query += " AND hizmetTipiAdi='" + item.hizmetTipiAdi + "'";

    if (item.mamAnaGrpAdi != null && item.mamAnaGrpAdi != "")
      query += " AND mamAnaGrpAdi='" + item.mamAnaGrpAdi + "'";

    if (item.basvuruNedeni != null && item.basvuruNedeni != "")
      query += " AND basvuruNedeni='" + item.basvuruNedeni + "'";

    if (item.durum != null && item.durum != "")
      query += " AND durum='" + item.durum + "'";

    if (item.adi != null && item.adi != "")
      query += " AND adi='" + item.adi + "'";

    if (item.soyadi != null && item.soyadi != "")
      query += " AND soyadi='" + item.soyadi + "'";

    if (item.firmaUnvani != null && item.firmaUnvani != "")
      query += " AND firmaUnvani='" + item.firmaUnvani + "'";

    if (item.evTel != null && item.evTel != "")
      query += " AND evTel='" + item.evTel + "'";

    if (item.isTel != null && item.isTel != "")
      query += " AND isTel='" + item.isTel + "'";

    if (item.gsmNo != null && item.gsmNo != "")
      query += " AND gsmNo='" + item.gsmNo + "'";


    return query;
  }

  deleteList(): Promise<any> {
    localStorage.setItem(Constants.LENGTHS.HIZMET_LIST, String(0));
    return this.baseDao.execute(this.DELETE_QUERY, []);
  }

  deleteHizmet(seqNo: string): Promise<any> {
    let query = this.DELETE_QUERY + " WHERE seqNo='" + seqNo + "'";
    return this.baseDao.execute(query, []);
  }

  deleteHizmetList(list: any[]) {
    let seqNoList: string[] = [];
    list.forEach(item => seqNoList.push("'" + String(item) + "'"));
    let seqNoListStr: string = seqNoList.join(",");

    let query = this.DELETE_QUERY + " WHERE seqNo in (" + seqNoListStr + ")";
    return this.baseDao.execute(query, []);
  }

  async findAcikHizmetSayisi(): Promise<any> {
    let query = "SELECT * FROM OFF_HIZ_MST where durum not in('KAPALI', 'IPTAL')";
    let result = await this.baseDao.execute(query, []);
    let count = result.rows.length;
    return new Promise((resolve, reject) => {
      resolve(count);
    })
  }
}
