/**
 * @author malisahin
 * @date 2018-04-08
*/

export class Pageable {
    constructor() {

    }

    tip: string;
    first: number = 0;
    pageSize: number = 20;
    listLength: number = -1;
    toPage: number;


    compute() {
        let firstItemOfLastPage;
        let bolumdenKalan = this.listLength % Number(this.pageSize);
        if (bolumdenKalan == 0) {
            firstItemOfLastPage = this.listLength - Number(this.pageSize);
        } else {
            firstItemOfLastPage = this.listLength - bolumdenKalan;
        }

        if (this.tip == 'BEGINNING') {

        }
        else if (this.tip == 'PREVIOUS') {
            this.first -= Number(this.pageSize);
            if (this.first < 0) {
                this.first = 0;
            }
        }
        else if (this.tip == 'NEXT') {
            this.first += Number(this.pageSize);
            if (this.first > this.listLength)
                this.first = Number(firstItemOfLastPage);
        }
        else if (this.tip == 'FIRST') {
            this.first = 0;
        }
        else if (this.tip == 'LAST') {
            this.first = Number(firstItemOfLastPage);
        }
        else if (this.tip == 'LIST_LENGTH') {
            this.first = 0;
        }
        else if (this.tip == 'PAGENO') {
            this.first = Number(this.pageSize) * Number(this.pageSize);
        }

        return this;

    }
}


