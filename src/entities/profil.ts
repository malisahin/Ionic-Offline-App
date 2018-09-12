/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Domain } from "./domain";
import { Constants } from "./Constants";

export class Profil {

  public static getActiveProfil() {
    return Profil.getCustomer1();
  }

  public static getOrgKod() {
    return Profil.getActiveProfil().orgKod;
  }


  private static getCustomer3() {
    let domain = new Domain();
    domain.orgKod = "SAHIN";
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "";
    domain.securityUrl = "";

    return domain;
  }

  private static getCustomer2() {
    let domain = new Domain();
    domain.orgKod = "SAHIN";
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "";
    domain.securityUrl = "";

    return domain;
  }

  private static getCustomer1() {
    let domain = new Domain();
    domain.orgKod = "SAHIN";
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "";
    domain.securityUrl = "";

    return domain;
  }


}

