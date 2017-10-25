const Matrix = require('./matrix');
const MatrixAlgoritm = require('./algoritm');

const n = 2;
const ma = new Matrix(n);
const al = new MatrixAlgoritm(ma.constantMatrix());
console.log(al.spiral());
