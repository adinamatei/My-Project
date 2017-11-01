//Multiple of 3 and 5
function sumOfMultiple(n) {
    // const showAnswer = document.querySelector('.sum');
    let sum = 0;
    for(let i = 0; i <= n; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return `The sum of the multiples of 3 or 5 below 1000 is: ${sum}`;
}
// console.log(SumOfMultiple(9));



//Even Number Checker
function evenNumber(arr) {
    let result = [];
    let theResult;
    arr = document.querySelector('#arrinput').value;
    arr = arr.split(',').map(Number);
    document.querySelector('#arrinput').value = "";
    // console.log(arr);
    if(arr.length === 0){
        return ("Please type some numbers!");
    }
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i]);
            console.log(arr[i])
        }
        console.log(result);
    }

    theResult = "The even numbers of this array are: " + result;
    return theResult;
}

//Reverse a string
function reverseString(str){
    str = document.querySelector('#stringinput').value;
    document.querySelector('#stringinput').value = "";
    let reverse = '';
    let len = str.length-1;
    if(str.length > 1) {
        for(let i = len; i >= 0; i--) {
            reverse += str[i];
        }
        return reverse;
    }
    return ('Use a phrase from the provided example');
}


//Check for Palindrome
function isPalindrome(str){
    str = document.querySelector('#palin-input').value;
    document.querySelector('#palin-input').value = "";
    str = str.toLowerCase().replace(/[\W_]/g, '');
    let len = str.length -1;
    if(len > 1) {
        for(let i = 0; i <= len/2; i++){
            if(str[i] !== str[len-i]){
                return false;
            }
        }
        return true;
    }
    return ("Please enter the text or use some of the examples");
}


//Longest Word in a String
function longestWord(str) {
    str = document.querySelector('#longest-input').value;
    document.querySelector('#longest-input').value = "";
    str = str.split(' ');
    if(str.length > 1) {
        let longest = 0;
        for(let i = 0; i < str.length; i++) {
            if(str[i].length > longest) {
                longest = str[i].length;
            }
        }
        return ("The length of the longest word is: " + longest);
    }
    return ("Please enter your phrase or use some of the example");
}


//Title Case a Sentence
function titleCase(str) {
    str = document.querySelector('#sentence-input').value;
    document.querySelector('#sentence-input').value = "";
    str = str.toLowerCase().split(' ');
    if(str.length > 1){
        let upperStr = "";
        let temp = [];
        for (let i = 0; i < str.length; i++){
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            temp.push(str[i]);
            upperStr= temp.join(' ');
        }
        return upperStr;
    }
    return "Please enter your sentence or use some of the example"
}


//Factorialize a Number
function factorialize(num) {
    num = document.querySelector('#number-input').value;
    num = parseInt(num, 10);
    document.querySelector('#number-input').value = "";
    let result = 1;
    if (isNaN(num)){
        return ("This is not a number! Please enter a number!");
    }
    else if (num === 0){
        return 1;
    }
    else {
        for (let i = num; i > 0; i-- ) {
            result = result * i;
        }
        return (num + "! = " + result);
    }
}

//Find the maximum of an array
function findMax(arr) {
    arr = document.querySelector('#array-input').value;
    // document.querySelector('#array-input').value = "";
    arr = arr.split(',').map(Number);
    if(arr.length > 1) {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
            // console.log(" max = ", max);
        }
        return "The maximum number is " + max;
    }
    return "Please enter an array of numbers!"
}
//Find the minimum of an array
function findMin(arr) {
    arr = document.querySelector('#array-input').value;
    // document.querySelector('#array-input').value = "";
    arr = arr.split(',').map(Number);
    if(arr.length > 1){
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] < min) {
                min = arr[i];
            }
            // console.log(" min = ", min);
        }
        return "The minimum number is " + min;
    }
    return "Please enter an array of numbers!"
}

//Repeat a string
function repeatString(str, n) {
    str = document.querySelector('#string-input').value;
    document.querySelector('#string-input').value = "";
    n = document.querySelector('#times-input').value;
    document.querySelector('#times-input').value = "";
    let newStr = "";
    if(str.length >= 1 && n > 0) {
        for (let i = 1; i <= n; i++ ){
            newStr += str + " ";
        }
        console.log(newStr)
        return "Repeat the string for " + n + " times: " + newStr;
    }
    return "The input is empty.Please enter a string and a number "
}