// // Objects
// const myName = {name:"vaish"}
// var myName2 = {'name-2':"vaish"}
// console.log(myName2['name-2']) // When there is hyphen, can see only with indexing and bracket notation
// var myName3 = {
//     name:'vaish',
//     fun: function()
//     {
//         console.log('hello')
//     }
// };
// // Async
// // To simulate multi-threaded prgmg
// // setTimeout() - to pause execution of the thread/function
// // To call function after waiting for o/p of one fn
// // callback() - for returning data on sucessful completion of one set fn
// function fetchData(callback){
//     setTimeout( () => { // anonymous function
//         const data = {name:'vaish',age: 21};
//         callback(data);
//     },5000);
// }

// // fetchData(function(data){ // anonymous function
// //     console.log(data);
// // });

// function callback(data){
//     console.log(data);
// }
// fetchData(callback);
// console.log('data is fetching');

// promises
// return some val - is a promise
// return state can be RESOLVED/FULFILLED or REJECTED or PENDING
// const myPromise = new Promise(function(resolve,reject));
// RESOLVED/FULFILLED: get a response which can be error or successful run
// REJECTED: no response - after timeout which can be handled in the code based on STATUS CODES
// resolve and reject are both functions

const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error from promise!");
    },5000);
    // setTimeout(()=>{
    //     resolve("Success");
    // },6000);
});

myPromise
.then((result)=>{
    console.log("Success!",result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Done all");
})
// console.log(myPromise);

// getElementsByTagName() -> will return an array which can be indexed
// querySelector("h3,h4") -> gets all h3 and h4 (how do we differentiate h3 and h4)
// querySelectorAll("h3,.list-item") -> similar to getElementsByTagName()