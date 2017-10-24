'use strict';

const expect = require('chai').expect;
const it = require('mocha').it;
const beforeEach = require('mocha').beforeEach;
const describe = require('mocha').describe;
const assert = require('assert');
const Stack = require('../src/stack');


describe('stack', () => {
    let stackSpy;

    beforeEach(() => {
        stackSpy = new Stack();
        [1, 2, 5].forEach((arg) => {
            stackSpy.push(arg);
        });
    });

    it('equals count element', function () {
        expect(stackSpy.value().length).to.be.a.equals(3);
    });

    it('revert element to stack', function () {
        expect(stackSpy.value()).to.be.a.eql([5, 2, 1]);
    });
});
