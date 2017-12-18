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
    it('Shoulrd return "FizzBuzz" if number 15 is given', () => {
        expect(fizzbuzz.fizzbuzz(15)).toEqual("FizzBuzz");
    });
    it('Should return "FIZZ" if [number] is divisible by 3', () => {
        expect(fizzbuzz.fizzbuzz(9)).toEqual("FIZZ");
    });
    it('Should return "BUZZ" if [number] is divisible by 5', () => {
        expect(fizzbuzz.fizzbuzz(10)).toEqual("BUZZ");
    });
    it('Should return "BUZZ" if [number] is divisible by 5', () => {
        expect(fizzbuzz.fizzbuzz(35)).toEqual("BUZZ");
    });
    it('Should return "FizzBuzz" if [number] is divisible by 3 and 5', () => {
        expect(fizzbuzz.fizzbuzz(30)).toEqual("FizzBuzz");
    });
    it('Should return string when number given is not divisable by 3 nor 5', () => {
        expect(fizzbuzz.fizzbuzz(8)).toEqual("8");
    });
});