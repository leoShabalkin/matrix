const expect = require('chai').expect;
const it = require('mocha').it;
const beforeEach = require('mocha').beforeEach;
const describe = require('mocha').describe;
const Matrix = require('../src/matrix');

describe('matrix', () => {
    const n = 2;
    let matrixSpy;
    let matrixConstantSpy;

    beforeEach(() => {
        matrixSpy = new Matrix(n);
        matrixConstantSpy = matrixSpy.constantMatrix();
    });

    it('should return scale', () => {
        expect(matrixSpy.calculateScale()).to.be.a.equal(3);
    });

    it('should return equals static data', () => {
        expect(matrixConstantSpy.getElement(1, 2)).to.be.a.equal(6);
    });

    it('should return error ouf bound', () => {
        expect(matrixConstantSpy.getElement(10, 10)).to.be.a('null');
    });
});
