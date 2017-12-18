/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
*/

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Cagri } from "../entities/cagri/cagri";


@Injectable()
export class HizmetDao {

    constructor() {
    }

    getHizmet(seqNo): Observable<Cagri> {
        return null;
    }
}