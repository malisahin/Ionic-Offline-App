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
        else if (ACTIVE_PROFIL == EProfiles.CUSTOMER1) {
            return this.getCustomer1();
        }
        else if (ACTIVE_PROFIL == EProfiles.LOCAL_DEV) {
            return this.getCustomer2();
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
        domain.domainUrl = "http://sos.ecaservis.com.tr:7003";
        domain.securityUrl = "http://sos.ecaservis.com.tr:7003";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        }
        return domain;
    }

    private getlocalTest() {
        let domain = new Domain();
        domain.orgKod = "SAHIN";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "";
        domain.securityUrl = "";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        }
        return domain;
    }

    private getCustomer1() {
        let domain = new Domain();
        domain.orgKod = "SAHIN";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "";
        domain.securityUrl = "";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        }
        return domain;
    }

    private getCustomer2() {
        let domain = new Domain();
        domain.orgKod = "SAHIN";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "";
        domain.securityUrl = "";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        }
        return domain;
    }

    private getCustomer3() {
        let domain = new Domain();
        domain.orgKod = "SAHIN";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "";
        domain.securityUrl = "";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        }
        return domain;
    }



}

