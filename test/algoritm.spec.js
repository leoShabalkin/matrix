import {beforeEach, describe, it} from 'mocha';
import {expect} from 'chai';
import {MatrixAlgoritm} from '../src/algoritm';
import {Matrix} from '../src/matrix';


describe('algoritm', () => {
    let algoritmSpy;
    const n = 3;
    let matrixSpy = new Matrix(n);
    let matrixEmptySpy = new Matrix(0);

    beforeEach(() => {
        algoritmSpy = new MatrixAlgoritm(matrixSpy.constantMatrix());
    });

    it('should return undefined if no function provided', () => {
        expect(matrixEmptySpy.spiral()).to.be.an('null');
    });

    it('returns correct values in case', () => {
        expect(algoritmSpy.spiral()).to.be.a.equals([5, 4, 7, 8, 9, 6, 3, 2, 1]);
    });
});
