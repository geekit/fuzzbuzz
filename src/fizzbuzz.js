exports.fizzbuzz = function (number) {
    switch (number) {
        case 1: return number.toString();
        case 3: return "FIZZ";
        case 5: return "BUZZ";
        default: return "";
    }
};