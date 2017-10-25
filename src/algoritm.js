/* eslint-disable no-plusplus */
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
        let i;
        let k = Matrix.getEndPosition();
        let l = Matrix.getEndPosition();
        let m = this.matrix.getFirstPosition();
        let n = this.matrix.getFirstPosition();
        const stk = new Stack();

        while (k <= m && l <= n) {
            for (i = l; i <= n; ++i) {
                stk.push(this.matrix.getElement(k, i));
            }
            k += 1;

            for (i = k; i <= m; ++i) {
                stk.push(this.matrix.getElement(i, n));
            }
            n -= 1;

            if (k <= m) {
                for (i = n; i >= l; --i) {
                    stk.push(this.matrix.getElement(m, i));
                }
                m -= 1;
            }

            if (l <= n) {
                for (i = m; i >= k; --i) {
                    stk.push(this.matrix.getElement(i, l));
                }
                l += 1;
            }
        }
        return stk.value();
    }
};
