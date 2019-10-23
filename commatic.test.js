const test = require('./commatic.js')

console.log('Starting tests')

const NaNInputs = test('Hello')
if (NaNInputs !== "'Hello' is not a number.") {
    throw new Error('Commatic is not recognizing non numbers')
}

const undefinedInputs = test(undefined)
if (undefinedInputs !== 'Your input is undefined.') {
    throw new Error('Commatic is not recognizing undefined inputs')
}

const floatingPointErrorHandling1 = test(9999999999999999)
if (floatingPointErrorHandling1 !== 'This number is too large to maintain accuracy.') {
    throw new Error('Commatic is not recognizing too large numbers')
}

const floatingPointErrorHandling2 = test(-9999999999999999)
if (floatingPointErrorHandling2 !== 'This number is too large to maintain accuracy.') {
    throw new Error('Commatic is not recognizing too large numbers')
}
