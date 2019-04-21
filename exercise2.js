console.log("exercise2.js start");
// INSTRUCTIONS
// Write a function named getCustomer that accepts
// customerID as an argument and returns the
// customer's first and last name. Don't forget to
// include a space between the first and last names.

var customersObj = {
    23567: {
        'name': {
            'first': 'Ichigo',
            'last': 'Kurosaki'
        }, 
        'customerID': 23567,
        'balance': 153677345
    },
    1234: {
        'name': {
            'first': 'Gin',
            'last': 'Ichimaru'
        }, 
        'customerID': 1234,
        'balance': 1235412356
    },
    1531: {
        'name': {
            'first': 'Shunsui',
            'last': 'Kyoraku'
        }, 
        'customerID': 1531,
        'balance': 65432467
    },
    543: {
        'name': {
            'first': 'Kisuke',
            'last': 'Urahara'
        }, 
        'customerID': 543,
        'balance': 63463723562
    },
    //This customer doesn't have a last name
    //Be sure to account for that in your function
    667: {
        'name': {
            'first': 'Ulquiorra' 
        }, 
        'customerID': 667,
        'balance': 4562647745
    }
};

function getCustomer(CustomerID,first, last) {
  return first, last ;
}

///////////////////////
// INSTRUCTOR FEEDBACK
///////////////////////
// -6pts your function is returning undefined because you aren't referencing the customersObj on line 53.
// Look at the feedback I gave on exercise1.js and use some similar bracket notation.
























// VERIFICATION
// These statements verify that your code does what the instructions
// ask. Do not edit these lines.
console.log(getCustomer(23567)); //should return Ichigo Kurosaki
console.log(getCustomer(1234)); //should return Gin Ichimaru
console.log(getCustomer(1531)); //should return Shunsui Kyoraku
console.log(getCustomer(543)); //should return Kisuke Urahara
console.log(getCustomer(667)); //should return Ulquiorra
