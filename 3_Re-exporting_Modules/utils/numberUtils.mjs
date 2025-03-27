class SmartNumber {
    constructor(num) {
        this.value = num;
        this.createdAt = Date.UTC(...new Date().toISOString().split(/\D+/).slice(0, 6).map(Number));
    }

    toString() {
        return String(this.value);
    }
}

export default SmartNumber;