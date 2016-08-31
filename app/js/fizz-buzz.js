var FizzBuzz = {

    proceed: function (inputNumber) {
        if (this.isDivisibleByThree(inputNumber) && this.isDivisibleByFive(inputNumber)) {
            return "fizzbuzz";
        }
        else if (this.isDivisibleByThree(inputNumber)) {
            return "fizz";
        } else if (this.isDivisibleByFive(inputNumber)) {
            return "buzz";
        }
        return inputNumber;
    },
    isDivisibleByThree: function (number) {
        if (number % 3 == 0) {
            return true;
        }
        return false;
    },
    isDivisibleByFive: function (number) {
        if (number % 5 == 0) {
            return true;
        }
        return false;
    }
};