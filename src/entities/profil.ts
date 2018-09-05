/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Domain } from "./domain";
import { EProfiles } from "./enums/eProfil";


export class Profil {

  public getActiveProfil(ACTIVE_PROFIL) {
    if (ACTIVE_PROFIL == EProfiles.LOCAL_DEV) {
      return this.getlocalDev();
    }
    else if (ACTIVE_PROFIL == EProfiles.LOCAL_TEST) {
      return this.getlocalTest();
    }
    else if (ACTIVE_PROFIL == EProfiles.BAYMAK) {
      return this.getBaymakDomain();
    }
    else if (ACTIVE_PROFIL == EProfiles.ECA) {
      return this.getEcaDomain();
    }
    else if (ACTIVE_PROFIL == EProfiles.LOCAL_DEV) {
      return this.getCustomer3();
    }
  }

  private getlocalDev() {
    let domain = new Domain();
    domain.orgKod = "SAHIN";
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://10.10.10.151:7001";
    domain.securityUrl = "http://sos.ecaservis.com.tr:7003";
    domain.webappurl = "http://sos.ecaservis.com.tr";
    return domain;
  }

  private getlocalTest() {
    let domain = new Domain();
    domain.orgKod = "SAHIN";
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://sos.ecaservis.com.tr:7003";
    domain.securityUrl = "http://sos.ecaservis.com.tr:7003";
    domain.webappurl = "http://sos.ecaservis.com.tr";
    return domain;
  }

  private getBaymakDomain() {
    let domain = new Domain();
    domain.orgKod = "BAY";
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://sos.baymak.com.tr:7008";
    domain.securityUrl = "http://sos.baymak.com.tr:7008";
    domain.webappurl = "http://sos.baymak.com.tr:7008";
    return domain;
  }

  private getEcaDomain() {
    let domain = new Domain();
    domain.orgKod = "ECA";
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "http://sos.ecaservis.com.tr:7003";
    domain.securityUrl = "http://sos.ecaservis.com.tr:7003";
    domain.webappurl = "http://sos.ecaservis.com.tr";
    return domain;
  }

  private getCustomer3() {
    let domain = new Domain();
    domain.orgKod = "SAHIN";
    domain.kod = 'SECRET';
    domain.name = 'Development';
    domain.domainUrl = "";
    domain.securityUrl = "";

    return domain;
  }


}

