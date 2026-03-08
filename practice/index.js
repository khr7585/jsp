// console.log("hello");
// console.log("welcome");
// console.log("to my world");

// ASYNCHRONOUS
// console.log("hello");
// setTimeout(()=>{
//     console.log("welcome");
// },1000);
// console.log("to my world");

//SYNCHRONOUS
// console.log("welcome");
// khr();
// console.log("hello");
// function khr(){
//     let sum=0;
//     for(let i=0;i<3456789;i++){
//         sum+=i;
//     }
//     console.log("total"+sum);
// }


// CALLBACKS
// function step1(value,callback){
// callback(value+10,false);
// }
// function step2(value,callback){
// callback(value+10,false);
// }
// function step3(value,callback){
// callback(value+10,false);
// }
// step1(10,function(result1,error){
//     if(!error){
//         step2(result1,function(result2,error){
//             if(!error){
//                 step3(result2,function(result3,error){
//                     if(!error){
//                         console.log("result:"+result3);
//                     }
//                 })
//             }
//         })
//     }
// });


// CALLBACK HELL SOLUTION(SPLIT CALLBACKS INTO SMALLER FUNCTIONS)
// step1(10,function(result1,error){
//     if(!error){
//         return result1;
//     }
// });
// function step1(value,callback){
//     let result1=callback(value+10,false);
//     step2(result1,function(result2,error){
//         if(!error){
//             return result2;
//         }
//     });
// }
// function step2(value,callback){
//     let result2=callback(value+10,false);
//     step3(result2,function(result3,error){
//         if(!error){
//             return result3;
//         }
//     });
// }
// function step3(value,callback){
//     let result3=callback(value+10,false);
//     console.log("result:"+result3);
// }


// CALLBACK HELL SOLUTION-3(USING PROMISES)
// AVAILABLE PROMISE STATE AND VALUES
// PENDING(UNDEFINED)
// FULLFILLED(RESOLVED VALUE)
// REJECTED(REASON FOR REJECTION)
// AVAILABLE PROMIS METHODS
// Promise.all([promises])
// Promise.allSettled([promises])
// Promise.any([promises])
// Promise.race([promises])

// function step1(value,error){
//     return new Promise((resolve,reject)=>{
//         if(!error){
//             resolve(value+10);
//         }else{
//             reject('something went wrong');
//         }
//     });
// }
// function step2(value,error){
//     return new Promise((resolve,reject)=>{
//         if(!error){
//             resolve(value+10);
//         }else{
//             reject('something went wrong');
//         }
//     });
// }
// function step3(value,error){
//     return new Promise((resolve,reject)=>{
//         if(!error){
//             resolve(value+10);
//         }else{
//             reject('something went wrong');
//         }
//     });
// }
// step1(10,true)
// .then((result1)=>step2(result1,false))
// .then((result2)=>step3(result2,false))
// .then((result3)=>console.log(result3))
// .catch((error)=>console.log(error));


// const p1=Promise.resolve('it is correct');
// const p2=100;
// const p3= new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,'not correct');
// });
// const p4=Promise.reject('rejected');
// Promise.all([p1,p2,p3]).then((values)=>console.log(values));
// Promise.race([p2,p3,p1]).then((value)=>console.log(value));
// Promise.allSettled([p1,p2,p3,p4]).then((value)=>console.log(value));
// Promise.any([p4,p3]).then((value)=>console.log(value));

// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((result)=>console.log(result));

// CHAINING OF PROMISES(async/await)
// function step1(value,error){
//     return new Promise((resolve,reject)=>{
//         if(!error){
//             resolve(value+10)
//         }else{
//             reject('something went wrong');
//         }
//     });
// }
// async function result(){
//     let result1=await step1(10,false);
//     // console.log(result1);
//     return result;
// }
// async function result2(){
//     let result=await Promise.resolve(5);
//     return result;
// }
// console.log(result());
