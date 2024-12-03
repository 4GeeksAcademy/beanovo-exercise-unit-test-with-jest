// We declare the function with the exact name "fromEuroToDollar"
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar / 1.07 * 156.5;
    // return the yen value
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen / 156.5 * 0.87;
    // return the yen value
    return valueInPound;
}
// This is my function that sums two numbers

const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(fromYenToPound(1))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound };