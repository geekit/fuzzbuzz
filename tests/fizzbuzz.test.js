const fizzbuzz = require('../src/fizzbuzz');

describe('Fizz Buzz tests', () => {
    it('Should return "1" when number 1 is given', () => {
        expect(fizzbuzz.fizzBuzz(1)).toEqual("1");
    });
    it('Shoulrd return "FIZZ" if number 3 is given', () => {
        expect(fizzbuzz.fizzBuzz(3)).toEqual("FIZZ");
    });
    it('Shoulrd return "BUZZ" if number 5 is given', () => {
        expect(fizzbuzz.fizzBuzz(5)).toEqual("BUZZ");
    });
    it('Shoulrd return "FizzBuzz" if number 15 is given', () => {
        expect(fizzbuzz.fizzBuzz(15)).toEqual("FizzBuzz");
    });
    it('Should return "FIZZ" if [number] is divisible by 3', () => {
        expect(fizzbuzz.fizzBuzz(9)).toEqual("FIZZ");
    });
    it('Should return "BUZZ" if [number] is divisible by 5', () => {
        expect(fizzbuzz.fizzBuzz(10)).toEqual("BUZZ");
    });
    it('Should return "BUZZ" if [number] is divisible by 5', () => {
        expect(fizzbuzz.fizzBuzz(35)).toEqual("BUZZ");
    });
    it('Should return "FizzBuzz" if [number] is divisible by 3 and 5', () => {
        expect(fizzbuzz.fizzBuzz(30)).toEqual("FizzBuzz");
    });
    it('Should return string when number given is not divisable by 3 nor 5', () => {
        expect(fizzbuzz.fizzBuzz(8)).toEqual("8");
    });
});

describe('Fizz buzz generator tests', () => {
    it('Should return "1" if number one is given', () => {
        expect(fizzbuzz.fizzBuzzGenerator([1])).toEqual("1");
    });
    it('Should return "12FIZZ" when numbers are 1,2,3', () => {
        expect(fizzbuzz.fizzBuzzGenerator([1, 2, 3])).toEqual('12FIZZ');
    });
    it('Should return "12FIZZ4BUZZ" when numbers are 1,2,3,4,5', () => {
        expect(fizzbuzz.fizzBuzzGenerator([1, 2, 3, 4, 5])).toEqual('12FIZZ4BUZZ');
    });
    it('Should return "12FIZZ4BUZZFIZZ78FIZZBUZZ11FIZZ1314FizzBuzz" when numbers are 1,2,3,4,5...15', () => {
        var numbers = [];
        for(var i = 1; i < 16;i++) numbers.push(i);
        expect(fizzbuzz.fizzBuzzGenerator(numbers)).toEqual('12FIZZ4BUZZFIZZ78FIZZBUZZ11FIZZ1314FizzBuzz');
    });
});