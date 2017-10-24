const Matrix = require('./matrix');
const MatrixAlgoritm = require('./algoritm');

const n = 2;
let ma = new Matrix(n);
let al = new MatrixAlgoritm(ma.constantMatrix());
console.log(al.spiral());
