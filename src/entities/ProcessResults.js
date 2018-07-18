/**
 * @author malisahin
 * @since 20.06.2018
 */
export var ProcessResults = (function () {
    function ProcessResults() {
        this.errorMessages = [];
        this.infoMessages = [];
        this.objects = [];
    }
    ProcessResults.prototype.isErrorMessagesNull = function () {
        return !(this.errorMessages.length > 0);
    };
    ProcessResults.prototype.isErrorMessagesNotNull = function () {
        return this.errorMessages.length > 0;
    };
    ProcessResults.prototype.isAnyObjectExist = function () {
        return this.objects.length > 0;
    };
    ProcessResults.prototype.addErrorMessage = function (message) {
        this.errorMessages.push(message);
    };
    return ProcessResults;
}());
//# sourceMappingURL=ProcessResults.js.map