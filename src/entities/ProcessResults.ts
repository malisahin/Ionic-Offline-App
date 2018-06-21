/**
 * @author malisahin
 * @since 20.06.2018
 */


export class ProcessResults {

  errorMessages: string[] = [];
  infoMessages: string[] = [];
  objects: any[] = [];

  isErrorMessagesNull(): boolean {
    return !(this.errorMessages.length > 0);
  }

  isErrorMessagesNotNull(): boolean {
    return this.errorMessages.length > 0;
  }

  isAnyObjectExist() {
    return this.objects.length > 0;
  }

}
