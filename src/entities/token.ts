import { transition } from "@angular/core";
import {Constants} from "./Constants";



export class Token {
    access_token: string;
    error: string;
    error_description: string;

    constructor() {

    }


    fillToken(obj) {
        let item = new Token();
        if(obj.access_token != null) {
          localStorage.setItem(Constants.LOGGED_IN, String(true));
        }
        item.access_token = obj.access_token != null ? obj.access_token : "";
        item.error = obj.error != null ? obj.error : "";
        item.error_description = obj.error_description != null ? obj.error_descriptio : "";
        localStorage.setItem(Constants.ACCESS_TOKEN, item.access_token);
        return item;
    }

}
