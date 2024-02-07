// //object
// const anyName={name:"sanjay"};
// console.log(anyName);

// //accessing obj
// console.log(anyName.name);
// console.log(anyName["name"]);
// console.log(typeof(anyName));

// //nested obj
// const anyName2={name:"sanjay",age:'21',marks:{
//     science:70, maths:75}};

// console.log(anyName2["marks"]["maths"])


// ///asynchronous

// ///setTimeOut

// console.log("Fisrt block")

// setTimeout(function()
// {
//     console.log("Heelo");
// },4000)

// console.log("Waiting");


// ///callback function

// function fetchData(callback)
// {
//     setTimeout(()=>{
//         const data={name:"John",age:30};
//         callback(data);
//         console.log("Wait");
//     },3000);
// }

// fetchData(myFunction);


// function myFunction(data)
// {
//     {
//         console.log(data);
//     }
// }
// console.log("Over");


///promises=>response,reject
////will get a reason for the reject

///const params=new promise(function(resolve,reject){})


const mypromise=new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
        resolve("Success");
    },1000);
    setTimeout(()=>
    {
        reject("Rejected");
    },2000);
})

mypromise
.then((result)=>{
    console.log(result);

}
)
.catch((error)=>
{
    console.log(error);
})

.finally(()=>
{
    console.log("Finaaly");
})


///getElementById
//getElementByTagName
//querySelector
//querySelectorAll