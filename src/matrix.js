module.exports = class Matrix {
    constructor(n) {
        this.n = n;
        this.matrix = [];
    }

    init(d) {
        const rows = this.calculateScale();
        const cols = this.calculateScale();
        for (let y = 0; y < rows; y++) {
            this.matrix[y] = [];
            for (let x = 0; x < cols; x++) {
                this.matrix[y][x] = d.call(null);
            }
        }
    };

    getRandomArbitrary(min, max) {
        return () => {
            return Math.floor(Math.random() * (max - min)) + min;
        };
    };

    getConstant() {
        let i = 0;
        return () => {
            return ++i;
        };
    };

    calculateScale() {
        return 2 * this.n - 1;
    };

    matrix() {
        return this.matrix;
    };

    size() {
        return this.n;
    };

    randomMatrix() {
        this.init(this.getRandomArbitrary(0, 10));
        return this.matrix;
    };

    constantMatrix() {
        this.init(this.getConstant());
        return this;
    };

    getElement(n, m) {
        return this.matrix[n][m];
    };

    getFirstPosition() {
        return this.n;
    };

    getEndPosition() {
        return 0;
    };

};

