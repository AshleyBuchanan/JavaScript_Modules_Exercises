// String.prototype.initTimeStamp = function () {
//     this.createdAt = Date.UTC(...new Date().toISOString().split(/\D+/).slice(0, 6).map(Number));
//     return this;
// }

class SmartString {
    constructor(str) {
        this.value = String(str);
        this.createdAt = Date.UTC(...new Date().toISOString().split(/\D+/).slice(0, 6).map(Number));
    }

    toString() {
        return this.value;
    }
}

export default SmartString;