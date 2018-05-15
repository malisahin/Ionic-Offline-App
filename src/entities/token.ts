import { transition } from "@angular/core";



export class Token {
    access_token: string;
    error: string;
    error_description: string;

    constructor() {

    }


    fillToken(obj) {
        let item = new Token();
        item.access_token = obj.access_token != null ? obj.access_token : "";
        item.error = obj.error != null ? obj.error : "";
        item.error_description = obj.error_description != null ? obj.error_descriptio : "";
        localStorage.setItem("accessToken", item.access_token);
        return item;
    }

}
