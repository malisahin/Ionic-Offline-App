/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Domain } from "./domain";
import {Constants} from "./Constants";

export class Profil {

  public static getActiveProfil() {
    return Profil.getEcaTestDomain();
  }

  private static getlocalDev(): Domain {
    let domain = new Domain();
    domain.orgKod = Constants.ORG_KODS.SOS;
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://10.10.10.151:7001";
    domain.securityUrl = "http://sos.ecaservis.com.tr:7003";
    domain.webappurl = "http://sos.ecaservis.com.tr";
    return domain;
  }

  private static getlocalTest() {
    let domain = new Domain();
    domain.orgKod = Constants.ORG_KODS.SOS;
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://10.10.10.26:7005";
    domain.securityUrl = "http://10.10.10.26:7005";
    domain.webappurl = "http://10.10.10.26:7005";
    return domain;
  }

  private static getBaymakTestVPNDomain() {
    let domain = new Domain();
    domain.orgKod = Constants.ORG_KODS.BAY;
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://172.24.1.10:7005";
    domain.securityUrl = "http://172.24.1.10:7005";
    domain.webappurl = "http://172.24.1.10:7005";
    return domain;
  }

  private static getBaymakTestDomain() {
    let domain = new Domain();
    domain.orgKod = Constants.ORG_KODS.BAY;
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://sos.baymak.com.tr:7008";
    domain.securityUrl = "http://sos.baymak.com.tr:7008";
    domain.webappurl = "http://sos.baymak.com.tr:7008";
    return domain;
  }

  private static getBaymakProdDomain() {
    let domain = new Domain();
    domain.orgKod = Constants.ORG_KODS.BAY;
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://sos.baymak.com.tr:7006";
    domain.securityUrl = "http://sos.baymak.com.tr:7006";
    domain.webappurl = "http://sos.baymak.com.tr:7005";
    return domain;
  }

  private static getEcaTestDomain() {
    let domain = new Domain();
    domain.orgKod = Constants.ORG_KODS.BAY;
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://sos.ecaservis.com.tr:7003";
    domain.securityUrl = "http://sos.ecaservis.com.tr:7003";
    domain.webappurl = "http://sos.ecaservis.com.tr";
    return domain;
  }


  private static getEcaProdDomain() {
    let domain = new Domain();
    domain.orgKod = Constants.ORG_KODS.ECA;
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://sos.ecaservis.com.tr:7009";
    domain.securityUrl = "http://sos.ecaservis.com.tr:7009";
    domain.webappurl = "http://sos.ecaservis.com.tr:7009";
    return domain;
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


}

