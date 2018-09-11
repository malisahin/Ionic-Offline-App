/**
 * @author malisahin
 * @date 2018-04-08
 */

export class Pageable {
  constructor() {

  }

  tip: string;
  first: number = 0;
  pageSize: number = 10;
  listLength: number = -1;
  pageNo: number;
  isFirstPage: boolean = false;
  isLastPage: boolean = false;
  pageList: number[] = [];

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
    else if (this.tip == 'TO_PAGE') {
      this.first = (Number(this.pageNo) - 1) * Number(this.pageSize);
    }


    this.isFirstPage = false;
    this.isLastPage = false;

    if (this.first == 0) {
      this.isFirstPage = true;
    }
    /*
     if (firstItemOfLastPage + Number(this.pageSize) >= this.listLength) {
     this.isLastPage = true;
     }*/
    if (Number(this.pageSize) >= this.listLength) {
      this.isLastPage = true;

    } else if (this.listLength > 2 * Number(this.pageSize) + this.first) {
      this.isLastPage = true;

    }

    this.preparePageList();

    this.pageNo = (Number(this.first) / Number(this.pageSize)) + 1;
    return this;

  }

  preparePageList() {
    this.pageList = [];
    let size = (Number(this.listLength) / Number(this.pageSize));
    for (let i = 0; i < size; i++) {
      this.pageList.push(i + 1);
    }

  }

}


