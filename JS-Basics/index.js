//printing
console.log('Welcome guys')
myname="Gayu"
myname=2

//declaring variable
var plan="a"
var myPlan //undefined
plan="c"
console.log(myname)

///Data type

var num=12.60;//number=int,float,long,short

var char="Gayu"; //string

var bool=true;  //boolean

//Object
var obj={name:"gayu",age:21} //key:value
console.log(obj)
console.log(obj.age)
console.log(obj['name'])

//array
var arr=["max",21,true]///collection of values/elements
console.log(arr)
//indexing
//starts from 0 to length of array -1
//length of array=number of elements in the array
//Reverse indexing =>last element=-1
console.log(arr.length);
console.log(arr[-2])

////expressions

var isCompare=  3==4 //value are equal
var isCoompare= 3===4  ///value and data type is equal

var sum =4+4;
var isLogical= (4==5) && (4>=8) || ((4+3)==15);  ///AND //OR

///Statements

var sum=10;

if((3*3)+1 == sum)
{
    console.log("Done");
}
else if(4+4==7)
{
    console.log("Second");
}
else{
    console.log("Next ")
}

///for loop

for(i=0;i<10;i++)
{
    if(i%5==0)
    {
        console.log(i);//0 5
    }
   
}

///functions

function myFunction(a,...b)  ///rest parameter   ///(...a,b) error
{
    console.log("Adding numbers",a,b);
}


function myFunctionOnReturn(a,...b)  ///rest parameter   ///(...a,b) error
{
    console.log("Adding numbers",a,b);
    return b*4;
}
myFunction(1);  //1 undefined
myFunction(1,2,3);  //1 [ 2 , 3 ]

myFunction(1,2,3,4,5);  //1 [2,3,4,5]

var val=myFunctionOnReturn(3,5,3,2);
console.log(val);


////string methods


//substring 
str="hero";
var sub=str.substring(0,1);   ///h
console.log(sub);

///indexOf
var sub1=str.indexOf('q');  ///-1
console.log(sub1);


///includes
var sub2=str.includes('er');    ///true
console.log(sub2);

////slice
var sub3=str.slice(0,2);     
console.log(sub); ///he
console.log(sub3);



///number methods

num=34.987;
var n=num.toFixed(2);
console.log(n);



///toString

var st=num.toString();
console.log(st);