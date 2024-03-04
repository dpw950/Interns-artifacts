console.log('welcome to js');
// definition without declaration
myname="sun";
myname=23;
// declare varaiable
var myplan;//undefined if no value is assigned to "myplan"
myplan=true;
console.log(myplan)
console.log(myname);
//primitive 
//datatypes=number(no double,long...)
var num=12
//string
var char="name"
//boolean
var istrue=true;
//non-primitive
//object
var myobj={name:"max",age:21};//key(string):value
console.log(myobj);
console.log(myobj.age);//dot operator
console.log(myobj['name']);
//array
var myarr=["sun",21,true];//collection of values or elements
//indexing
//starts from 0 to length of array-1
//length of the array =no.of.elements in the array
console.log(myarr.length);//3
console.log(myarr[-2]);//true

//myname.length(in array=no of elements but in string it is no.of.characters)
// function myfunc(){
//   document.getElementById('demo').innerHTML='this is new one!';
// }
sum=2;
//statements if
if(sum==2){
  console.log("first");
}
//rest parameters
function myFunc(a,...b){
  console.log("Add",a,b);
}
myFunc(1,2,3);

function sumOfNumbers(a,...b){
  console.log("display",a,b);
}
function sumofnumndersOn(a,...b){
  console.log("display",a,b);

}

var value=sumofnumndersOn(1,2);
console.log(value);

//string indexing method
//if indexof some element is not found then output is equal to -1
//.includes()
//.indexof()
//.slice
var a='hero';
console.log(a.indexOf('o'));
console.log(a.includes('ro'));
//difference bw slice and indexing

//number methods
var num=34.678;
var n=num.toFixed(2);
//toString()
//typeOf()
console.log(n)
