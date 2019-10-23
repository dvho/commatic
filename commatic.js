module.exports = (num) => {
    //Begin preliminary checks

    if (num === undefined) {
        return `Your input is undefined.`
    }

    if (isNaN(num)) {
        return `'${num}' is not a number.`
    }

    if (num > 9999999999999998) { //Beyond 9999999999999999 IEEE 754 Floating Point conversion inaccuracies will occur in JavaScript and/or will render to scientific notation.
        return `This number is too large to maintain accuracy.`
    }

    if (num < -9999999999999998) {
        return `This number is too large to maintain accuracy.`
    }

    //End preliminary checks

    let ret, numString, isFloat, isNeg, int, dec, intArray
    let intArrayWithComma = []

    isNeg = num < 0

    num = Math.abs(num)

    numString = num.toString()
    isFloat = numString.includes('.')

    if (isFloat) {
        [int, dec] = numString.split('.')
    } else {
        int = numString
        dec =  ''
    }

    intArray = int.split('').reverse()

    intArray.forEach((i, index) => {
        intArrayWithComma.push(i)
        if ((index +1 ) % 3 == 0) {
            intArrayWithComma.push(',')
        }
    })

    intArrayWithComma.reverse()

    intArrayWithComma[0] === ',' ? intArrayWithComma.shift() : intArrayWithComma

    int = intArrayWithComma.join('')

    return `${isNeg ? '-' : ''}${int}${dec !== '' ? '.' + dec : ''}`
}
