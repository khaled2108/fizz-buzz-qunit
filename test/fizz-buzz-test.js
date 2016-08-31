QUnit.test('when input number is divisible by three then display fizz', function (assert) {
    assert.strictEqual(FizzBuzz.proceed(3), 'fuzz', 'number divisible by three');
    assert.strictEqual(FizzBuzz.proceed(9), 'fuzz', 'number divisible by three');
    assert.strictEqual(FizzBuzz.proceed(12), 'fuzz', 'number divisible by three');
    assert.strictEqual(FizzBuzz.proceed(18), 'fuzz', 'number divisible by three');

});