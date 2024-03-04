
// /*let a=3;
// console.log(a);
// b=4;
// c=a+b;
// console.log(c);
// car=['bmw','jaquer'];
// car.push('swift');
// console.log(car[0]+" "+"my fav");
// var h=3;//let=3;
// var h=6;//let=6;not allowed but can inside the block
// console.log(h);
// anyName={name:"sunitha"}//anyName.name,anyName['name'],anyName['name-1']*/

// const person={name:"lexi",hobby:"playing",marks:{science:70,math:75}}
// typeof person
// console.log(person['marks'])//also we can use . operator person.marks
// console.log(person['marks']['science']) //person.marks.science


/*console.log("hii");
setTimeout(function(){
console.log("late hii");
},2000)
console.log("Tata");*/

function fetchData(callback){
  setTimeout(()=>{
    const data={name:"john",age:30};
    callback(data);

  },3000)
}
// fetchData(function(data) 
// console.log(data);
//  )
// fetchData(callback);

// function callback(data){
//   console.log(data);
// }

const myPromise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('hello');
  },3000)
  // reject('failed');
});
 
//  console.log(myPromise);
 myPromise
    .then((result)=>{
      console.log(result);
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      console.log('last');
    })
