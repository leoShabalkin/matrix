import {beforeEach, describe, it} from 'mocha';
import {expect} from 'chai';
import {Stack} from '../src/stack';


describe('stack', () => {
    let stackSpy;

    beforeEach(() => {
        stackSpy = new Stack();
        [1, 2, 5].forEach((arg) => {
            stackSpy.push(arg);
        });
    });

    it('equals count element', () => {
        expect(stackSpy.value().length().to.be.a.equals(3));
    });

    it('revert element to stack', () => {
        expect(stackSpy.value()).to.be.a.equal([5, 2, 1]);
    });
});
