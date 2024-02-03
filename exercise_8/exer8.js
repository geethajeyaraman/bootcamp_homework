var array = ['Greg','James','Mary','Devon'];
// console all the people
for (var i =0;i<array.length;i++){
    console.log(array[i]);
}
// remove Greg
var index= array.indexOf("Greg");

array.splice(index, 1);

console.log(array);
// remove James

index = array.indexOf("James");

array.splice(index, 1);

console.log(array);
// add Matt to the front

array.unshift('Matt');


console.log(array);

// add your name
``
array.push("Geetha");

console.log(array);
// exit after mary

for(var i = 0; i<array.length;i++){
    console.log(array[i]);
    if(array[i].toString() == 'Mary'){
        break;
    }
}

// copy array using slice

var copyarray = array.slice(2,4);

console.log(copyarray);
// index of Mary

console.log(array.indexOf("Mary"));

// index of Foo

console.log(array.indexOf("Foo"));

// remove Devon

var index = array.indexOf("Devon");

array.splice(index, 1);
console.log(array);
// add Elizabeth and James
array.push("Elizabeth");

array.push("Artie");
console.log(array);

// add Bob

var withBob = array;
withBob.push('Bob');
console.log(withBob);