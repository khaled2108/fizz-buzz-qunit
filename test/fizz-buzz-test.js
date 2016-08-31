QUnit.test('when input number is divisible by three then display fizz', function (assert) {
    assert.strictEqual(FizzBuzz.proceed(3), 'fizz', '3 divisible by three');
    assert.strictEqual(FizzBuzz.proceed(9), 'fizz', '9 divisible by three');
    assert.strictEqual(FizzBuzz.proceed(12), 'fizz', '12 divisible by three');
    assert.strictEqual(FizzBuzz.proceed(18), 'fizz', '18 divisible by three');

});

QUnit.test('when input number is divisible by five then display buzz', function (assert) {
    assert.strictEqual(FizzBuzz.proceed(5), 'buzz', '5 divisible by five');
    assert.strictEqual(FizzBuzz.proceed(10), 'buzz', '10 divisible by five');
    assert.strictEqual(FizzBuzz.proceed(20), 'buzz', '20 divisible by five');
    assert.strictEqual(FizzBuzz.proceed(25), 'buzz', '25 divisible by five');

});

QUnit.test('when input number is divisible by five and three then display fizzbuzz', function (assert) {
    assert.strictEqual(FizzBuzz.proceed(15), 'fizzbuzz', '15 divisible by three and five');
    assert.strictEqual(FizzBuzz.proceed(30), 'fizzbuzz', '10 divisible by three and five');
    assert.strictEqual(FizzBuzz.proceed(45), 'fizzbuzz', '20 divisible by three and five');
    assert.strictEqual(FizzBuzz.proceed(60), 'fizzbuzz', '25 divisible by three and five');

});

test("when the input is not divisible by 3 or 5 then return the same",function(){
    equal(FizzBuzz.proceed(1), 1);
    equal(FizzBuzz.proceed(7), 7);
    equal(FizzBuzz.proceed(19), 19);
});