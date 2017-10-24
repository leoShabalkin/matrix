module.exports = class Stack {
    constructor() {
        this.stac = [];
    }

    push(item) {
        this.stac.push(item);
    };

    value() {
        return this.stac.reduce(function (carrier, element) {
            carrier.unshift(element);
            return carrier;
        }, []);
    };
};
