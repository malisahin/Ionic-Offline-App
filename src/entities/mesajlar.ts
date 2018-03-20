/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


export class Mesaj {
    status: string;
    subject: string;
    endTime: string;
    startTime: string;
    valid: string;
    gonderen: string;
    expl: string;
    id: number;
    type: string;

    fillMesajlar(res: any): Promise<any> {
        let parsedList = [];
        let mesajList = JSON.parse(res.data).message;
        mesajList.forEach(function (item) {
            let mesaj = new Mesaj();
            mesaj.status = item.status;
            mesaj.subject = item.subject;
            mesaj.endTime = item.endTime;
            mesaj.startTime = item.endTime;
            mesaj.valid = item.valid;
            mesaj.gonderen = item.gonderen;
            mesaj.expl = item.expl;
            mesaj.id = item.id;
            mesaj.type = item.type;
            parsedList.push(mesaj);
        });
        return new Promise(resolve => resolve(parsedList));
    }
}
