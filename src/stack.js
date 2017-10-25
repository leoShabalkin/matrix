module.exports = class Stack {
    constructor() {
        this.stac = [];
    }

    push(item) {
        this.stac.push(item);
    }

    value() {
        return this.stac.reduce((carrier, element) => {
            carrier.unshift(element);
            return carrier;
        }, []);
    }
};
