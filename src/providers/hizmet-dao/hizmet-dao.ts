/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Injectable} from "@angular/core";
import {BaseDao} from "../base-dao/base-dao";
import {Hizmet} from "../../entities/hizmet/hizmet";
import {LoggerProvider} from "../logger/logger";

@Injectable()
export class HizmetDao {
  INSERT_QUERY = "INSERT INTO OFF_HIZ_MST(seqNo, randevuTarihi, hizmetTipiAdi, mamAnaGrpAdi, basvuruNedeni, durum, adi, soyadi, firmaUnvani, evTel, isTel, gsmNo, data) " +
    " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ";
  UPDATE_QUERY = "UPDATE OFF_HIZ_MST SET seqNo =?, randevuTarihi=?, hizmetTipiAdi=?, mamAnaGrpAdi=?, basvuruNedeni=?, durum=?, adi=?, soyadi=?, firmaUnvani=?" +
    ", evTel =?, isTel=?, gsmNo=?, data=? WHERE seqNo=?  ";
  DELETE_QUERY = "DELETE FROM OFF_HIZ_MST";

  insertedRow: number = 0;

  constructor(private baseDao: BaseDao, private  logger: LoggerProvider) {
    console.log('Hello HizmetDaoProvider Provider');
  }

  // Listede her bir item kayit edilir ve liste tekrar cagrilir.Cagrilmadan once kayit edilen item listeden silinir.
  insertList(list: Hizmet[]): Promise<any> {
    let array: Promise<any>[] = new Array();
    for (let item of list) {
      array.push(this.insertOne(item));
    }
    return Promise.all(array).then(res => {
      console.log("Çağrı Listesi Kayıt Edildi");
      return res;
    });
  }

  async insertOne(hizmet: Hizmet): Promise<any> {
    let hizmetObject: string = JSON.stringify(hizmet);
    let isHizmetExist = await this.isHizmetExist(hizmet.seqNo);
    if (!isHizmetExist) {
      let params = [hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
        hizmet.durum, hizmet.adi, hizmet.soyadi, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo, hizmetObject];
      return this.baseDao.execute(this.INSERT_QUERY, params);
    }
  }

  updateHizmet(hizmet: Hizmet) {
    let hizmetObject: string = JSON.stringify(hizmet);
    let params = [hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
      hizmet.durum, hizmet.adi, hizmet.soyadi, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo, hizmetObject, hizmet.seqNo];
    return this.baseDao.execute(this.UPDATE_QUERY, params);
  }

  find(item: Hizmet): Promise<Hizmet[]> {
    let query = this.prepareSelectQuery(item);
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
    if (item.randevuTarihi != null && item.randevuTarihi != "")
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

  deleteList(): Promise < any > {
    return this.baseDao.execute(this.DELETE_QUERY, []);
  }

}
