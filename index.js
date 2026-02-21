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
