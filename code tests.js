//find small number from an array 
function small(num) {
    var smallest = num[0];
    for (var i = 1; i < num.length; i++) {
        if (num[i] < smallest) {
            smallest = num[i];
        }
    }
    return smallest;
}

// find small number outside the array 
function smallOutsideNum(num) {
    var res = null;
    for (var i = 1; i < num.length; i++) {

        if (num.indexOf(small(num) + i) == -1) {
            res = small(num) + i;
        }
    }
    return res;
}

//find a max num which is multiples of 11 
function solution(A) {
    var max = null
    for (var i = 0; i < A.length; i++) {
        if ((A[i] % 11 == 0) && (A[i] > max)) {
            max = A[i];
        }

    }
    return max;
}


//given a string of space separated numbers, and have to return the highest and lowest number.
// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers) {
    var numberArray = numbers.split(" ");
    var max = Math.max.apply(null, numberArray);
    var min = Math.min.apply(null, numberArray);
    return max.toString() + " " + min;
}

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// eg:
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

function validatePIN(pin) {
    var pinarray = pin.split("");
    if (pinarray.length != 4 && pinarray.length != 6) {
        return false;
    }
    if (pin.includes("\n")) {
        return false;
    }
    for (var i = 0; i < pinarray.length; i++) {
        if (isNaN(pinarray[i])) {
            return false;
        }
    }
    return true;
}

//make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

function descendingOrder(n) {
    var digits = ('' + n).split('');
    var newNum = digits.sort(function (a, b) {
        return b - a
    }).join('');
    return parseInt(newNum);
}

//Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}


//Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
    var array = str.split(" ");
    var result = "";
    for (var i = 0; i < array.length; i++) {
        var word = array[i];
        if (word.length < 5) {
            result = result + word + " ";
        } else {
            for (var m = word.length - 1; m >= 0; m--) {
                result = result + word[m];
            }
            result = result + " ";
        }
    }
    return result.slice(0, result.length - 1);
}