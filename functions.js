// 1=> Print odd numbers in an array anonymous function
var oddnum = function(...arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            res.push(arr[i]);
        }

    }
    return res;
}
let res = [];
console.log(oddnum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//1=> Print odd numbers in an array IIFE function
var oddnum = (function(...arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            res.push(arr[i]);
        }

    }
    return res;
})(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(oddnum);

//1=> Print odd numbers in an array arrow function
var oddnum = (...arr) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            res.push(arr[i]);
        }

    }
    return res;
}
console.log(oddnum(1, 2, 3, 4, 5, 6, 7, 8, 9));
//--------------------------------------------------------------------


//2=> Convert all the strings to title caps in a string array anonymous function

var tcaps = function(...str) {
    let res = [];
    let result;
    for (let i = 0; i < str.length; i++) {
        result = str[i][0].toUpperCase() + str[i].slice(1);
        res.push(result);
    }
    return res;
}
console.log(tcaps("siva", "kumar", "logesh", "kumar"));

//2=> Convert all the strings to title caps in a string array IIFE function

var tcaps = (function(...str) {
    let res = [];
    let result;
    for (let i = 0; i < str.length; i++) {
        result = str[i][0].toUpperCase() + str[i].slice(1);
        res.push(result);
    }
    return res;
})("siva", "kumar", "logesh", "kumar");
console.log(tcaps);

//2=> Convert all the strings to title caps in a string array arrow function

var tcaps = (...str) => {
    let res = [];
    let result;
    for (let i = 0; i < str.length; i++) {
        result = str[i][0].toUpperCase() + str[i].slice(1);
        res.push(result);
    }
    return res;
}

console.log(tcaps("siva", "kumar", "logesh", "kumar"));
//--------------------------------------------------------



//3=>Sum of all numbers in an array anonymous function

var sum = function(...arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//3=> Sum of all numbers in an array IIFE function

var sum = (function(...arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
})(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(sum);

//3=> Sum of all numbers in an array arrow function

var sum = (...arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
//------------------------------------------------


//4=> Return all the prime numbers in an array anonymous function

var primenum = function(...arr) {
    let res = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j < 10; j++) {
            if (arr[i] % j == 0) {
                count++;
            }
        }
        if (count < 2) {
            res.push(arr[i]);
        }
        count = 0;
    }
    return res;
}
console.log(primenum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//4=> Return all the prime numbers in an array IIFE function

var primenum = (function(...arr) {
    let res = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j < 10; j++) {
            if (arr[i] % j == 0) {
                count++;
            }
        }
        if (count < 2) {
            res.push(arr[i]);
        }
        count = 0;
    }
    return res;
})(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(primenum);

//4=> Return all the prime numbers in an array arrow function

var primenum = (...arr) => {
    let res = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j < 10; j++) {
            if (arr[i] % j == 0) {
                count++;
            }
        }
        if (count < 2) {
            res.push(arr[i]);

        }
        count = 0;
    }
    return res;
}
console.log(primenum(1, 2, 3, 4, 5, 6, 7, 8, 9));
//--------------------------------------------------------------


//5=> Return all the palindromes in an array anonymous function

var palind = function(...arr) {
    let str = "";
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            str += arr[i][j];
        }
        if (arr[i] == str) {
            res.push(arr[i]);
        }
        str = "";
    }
    return res;
}
console.log(palind("madam", "siva"));


//5=>Return all the palindromes in an array IIFE function

var palind = (function(...arr) {
    let str = "";
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            str += arr[i][j];
        }
        if (arr[i] == str) {
            res.push(arr[i]);
        }
        str = "";
    }
    return res;
})("madam", "siva");
console.log(palind);

//5=>Return all the palindromes in an array arrow function

var palind = (...arr) => {
    let str = "";
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            str += arr[i][j];
        }
        if (arr[i] == str) {
            res.push(arr[i]);
        }
        str = "";
    }
    return res;
}
console.log(palind("madam", "siva"));


var median = (function(arr1, arr2) {
    var arr3 = arr1 + arr2;
    var a = arr3.split(",").map(Number);
    a.sort();
    var med;
    if (a.length % 2 == 0) {
        med = (a[(a.length / 2)] + a[(a.length / 2) - 1]) / 2;
    } else {
        med = a[(a.length / 2) - 0.5];
    }
    return med;
})([2, 1, 4, 5, 6], [5, 4, 6, 7, 8]);
console.log(median);
//g) Remove dulicates from an array
var duplicate = (function(arr) {
    var arr1 = [];
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr1.length; j++) {
            if (arr[i] == arr1[j]) {
                count++;
            }
        }
        if (count < 1) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
})([1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 8, 9]);
console.log(duplicate);
//h) Rotate an array by k times
var rotate = (function(arr, k) {
    for (var i = 0; i < k; i++) {
        arr.splice(0, 0, arr[arr.length - 1]);
        arr.pop();
    }
    return arr;
})([2, 1, 4, 5, 6, 4, 7, 8, 9], 5);
console.log(rotate);