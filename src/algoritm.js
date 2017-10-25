const Stack = require('./stack');
const Matrix = require('./matrix');

module.exports = class MatrixAlgoritm {

    constructor(matrix) {
        if (matrix === undefined || !(matrix instanceof Matrix)) {
            throw new Error('Do not correct element');
        }
        this.matrix = matrix;
    }

    spiral() {
        if (this.matrix.size() < 2) {
            return null;
        }
        let i, k = this.matrix.getEndPosition(), l = this.matrix.getEndPosition();
        let m = this.matrix.getFirstPosition(), n = this.matrix.getFirstPosition();
        let stk = new Stack();

        while (k <= m && l <= n) {
            for (i = l; i <= n; ++i) {
                stk.push(this.matrix.getElement(k, i));
            }
            k++;

            for (i = k; i <= m; ++i) {
                stk.push(this.matrix.getElement(i, n));
            }
            n--;

            if (k <= m) {
                for (i = n; i >= l; --i) {
                    stk.push(this.matrix.getElement(m, i));
                }
                m--;
            }

            if (l <= n) {
                for (i = m; i >= k; --i) {
                    stk.push(this.matrix.getElement(i, l));
                }
                l++;
            }
        }
        return stk.value();
    };
};
