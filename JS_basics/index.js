console.log('welcome to js');
var varia; // taken as undefined
varia = 'vaish'; // string data type taken automatically
console.log(varia,varia.length);
// console.log(varia);
varia = 34; // number taken as final value
// console.log(varia);
var array = [12,'name'] // collection of values
var obj = { key:'value', key2:4, key:'value2' } // property/key should be unique and key should be a variable
console.log(obj)
// console.log(array[-2])
console.log(array.length)

// if condition
var sum = 10;
if(3*3 === sum){
    console.log('equal');
}
else if(sum==2+8){
    console.log('equal to 10')
}
else{
console.log('next line');
}

// for loop
for(i=0;i<10;i++){
    console.log(i);
}

// functions
function sumOfNumbers(a,...b){ // ... - rest parameter where rest of parameters (except the first one) is assigned to an array [1,2]
    console.log('adding numbers',a,b);
}

function sumRet(a,b){
    return a+b
}

sumOfNumbers('cat',1,2,[4,5,20]); // parameters are optional, can send any type of parameter data
var val = sumRet(4,6);
console.log(val);

/*
String methods
*/

var st = 'here'
var substring = st.substring(0,1);
console.log(substring)

var ind = st.indexOf('q'); // -1 is returned for unfound character
console.log(ind)

var found = st.includes('er');
console.log(found);

var sliced = st.slice(0,2);
console.log(st);
console.log(sliced);

/* Number methods */

var num = 34.6785768;
var n = num.toFixed(2);
console.log(n)

var s = num.toString();
console.log(typeof s);

