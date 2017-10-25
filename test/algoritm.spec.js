const expect = require('chai').expect;
const it = require('mocha').it;
const beforeEach = require('mocha').beforeEach;
const describe = require('mocha').describe;
const MatrixAlgoritm = require('../src/algoritm');
const Matrix = require('../src/matrix');


describe('algoritm', () => {
    let algoritmSpy;
    let algoritmEmptySpy;
    const n = 2;
    let matrixSpy = new Matrix(n);
    let matrixEmptySpy = new Matrix(0);

    beforeEach(() => {
        algoritmSpy = new MatrixAlgoritm(matrixSpy.constantMatrix());
        algoritmEmptySpy = new MatrixAlgoritm(matrixEmptySpy.constantMatrix())
    });

    it('should return undefined if no function provided', function () {
        expect(algoritmEmptySpy.spiral()).to.be.an('null');
    });

    it('returns correct values in case', function () {
        expect(algoritmSpy.spiral()).to.be.a.eql([5, 4, 7, 8, 9, 6, 3, 2, 1]);
    });

    it('check correct constructor value', function () {
        expect(() => new MatrixAlgoritm(1)).to.throw('Do not correct element');
    })
});
