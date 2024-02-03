// circlevalue
   
function circleValue(r) {
    
    var area =3.14*r*r;
    var perimeter =2*3.14*r;
    console.log("perimter of the circle is" +perimeter);
    console.log("area of the circle is"+ area );
var circle = {
    areaValue :area,
    perimeterValue : perimeter
};
return circle;
    
 }
 var area_perimeter = circleValue(10);
 console.log("Area is "+area_perimeter.areaValue);

 console.log("Perimeter is "+area_perimeter.perimeterValue);

 // Reversed Number

function reverse(num)
{ 
    var str = num.toString();
    
    var reverse=str.split("").reverse().join("");
    return reverse;
}
 var reverseNum=reverse(1234);
console.log("Number Reversed "+reverseNum);

// Vowels

function countVowel(str){
    var numberofvowel = 0;
    
    for (var i=0;i<str.length;i++){        
        if(str[i].toString() == "a" || str[i].toString() == "e" || str[i].toString() == "i" ||
        str[i].toString() == "o" || str[i].toString() == "u"
        ){
            numberofvowel = numberofvowel + 1;
        }
    }
    return numberofvowel;
     
}

var countofvowel = countVowel("geetha");
console.log("Count of Vowel : "+countofvowel);

// Palindrome

function checkPalindrome(str) {
    let j = str.length - 1;
    console.log("String length :"+str.length/2);
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
 
var str = "geetha";
console.log("Palindrome Check 1 "+checkPalindrome(str));

str = "madam";


console.log("Palindrome Check 2 "+checkPalindrome(str));


// Simple Compund Interest

function simpleInt(principal,interest, time){
    var amount = principal * (1 + interest * time);

    return amount;
}

var amount = simpleInt(1000,2,5);

console.log("Final Simple Interest Amount :"+amount);

function compoundInt(principal,rateofinterest,time,numofperiods){
    var timebyperiod  = numofperiods* time;
    var temp = principal * (Math.pow(1+ rateofinterest/numofperiods),timebyperiod); 
    var compoundinterest = temp - principal;

    return compoundinterest;
}

var amount = compoundInt(1000,2,4,12);
console.log("Final Compound Interest Amount :"+amount);


// Random NUmber generate

function genRandom(start, end){
    var randomnumber = Math.floor(Math.random() * end) + start;
    return randomnumber;
}

var randnumber = genRandom(100,300);
console.log("Random Number Generated :"+randnumber);

// Factorial

function getFactorial(num){
    
    var result = 1;
    for (var i =num ; i > 0; i--){
        
        if(i == 0){
            return result;
        }
        result = result * i;
    }

    return result;

}

var factorialNumber = getFactorial(10);
console.log("Factorial Number "+factorialNumber);

// Add arrays

var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,0];
function addArrays(arr1,arr2){
    var result = arr1.concat(arr2);
    return result
}
var concatarray = addArrays(arr1,arr2);
console.log("Concatenation Array : "+concatarray);

// LetterCount

function letterCount(str){
    return str.length;
}

var result = letterCount("javascript");

console.log(" Letter Count :"+result);

// PrimeNumber

function checkPrime(num){
    if(num %2 ==1){
        return true;
    }else{
        return false;
    }
}

var result = checkPrime(10);
console.log(" Prime Number :"+result);


