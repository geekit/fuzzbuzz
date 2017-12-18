exports.fizzBuzz = function (number) {
    const rules = [
        [15, "FizzBuzz"],
        [3, "FIZZ"],
        [5, "BUZZ"]
    ];
    for (var i = 0; i < rules.length; i++) {
        if (number % rules[i][0] === 0) {
            return rules[i][1];
        }
    }
    return number.toString();
};

exports.fizzBuzzGenerator = function(numbers){
    var result = "";
    for(var i = 0;i < numbers.length; i++){
        result += this.fizzBuzz(numbers[i]);
    }
    return result;
};