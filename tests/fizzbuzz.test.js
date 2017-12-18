const fizzbuzz = require('../src/fizzbuzz');

describe('Fizz Buzz tests', () => {
    it('Should return "1" when number 1 is given', () => {
        expect(fizzbuzz.fizzbuzz(1)).toEqual("1");
    });
});