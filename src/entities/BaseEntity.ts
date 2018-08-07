


export class BaseEntity {


    isEmpty(item: any): boolean {
        if (typeof item == "number") item = String(item);
        return typeof item == "undefined" || item == null || item == "";
    }

    emptyIfNull(item: any) {
        if (this.isEmpty(item)) item = "";

        return item;
    }

    isNotEmpty(item: any): boolean {
        if (typeof item == "number") item = String(item);

        return !(typeof item == "undefined" || item == null || item == "");
    }
}