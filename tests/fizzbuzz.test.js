const fizzbuzz = require('../src/fizzbuzz');

describe('Fizz Buzz tests', () => {
    it('Should return "1" when number 1 is given', () => {
        expect(fizzbuzz.fizzbuzz(1)).toEqual("1");
    });
    it('Shoulrd return "FIZZ" if number 3 is given', () => {
        expect(fizzbuzz.fizzbuzz(3)).toEqual("FIZZ");
    });
    it('Shoulrd return "BUZZ" if number 5 is given', () => {
        expect(fizzbuzz.fizzbuzz(5)).toEqual("BUZZ");
    });

});