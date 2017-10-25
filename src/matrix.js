module.exports = class Matrix {
    constructor(n) {
        this.n = n;
        this.matrix = [];
    }

    init(d) {
        const rows = this.calculateScale();
        const cols = this.calculateScale();
        for (let y = 0; y < rows; y += 1) {
            this.matrix[y] = [];
            for (let x = 0; x < cols; x += 1) {
                this.matrix[y][x] = d.call(null);
            }
        }
    }

    static getRandomArbitrary(min, max) {
        return () => Math.floor(Math.random() * (max - min)) + min;
    }

    static getConstant() {
        let i = 0;
        return () => ++i;
    }

    calculateScale() {
        return (2 * this.n) - 1;
    }

    matrixValues() {
        return this.matrix;
    }

    size() {
        return this.n;
    }

    randomMatrix() {
        this.init(Matrix.getRandomArbitrary(0, 10));
        return this;
    }

    constantMatrix() {
        this.init(Matrix.getConstant());
        return this;
    }

    getElement(n, m) {
        const rows = this.matrix[n];
        if (rows === undefined) {
            return null;
        }
        return rows[m];
    }

    getFirstPosition() {
        return this.n;
    }

    static getEndPosition() {
        return 0;
    }
};

