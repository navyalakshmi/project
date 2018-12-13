// // // // var time =0;
// // // //  var timer=setInterval(function(){
// // // //     time+=2;
// // // //     console.log(time+' seconds have passed');
// // // //     if(time>5){
// // // //         clearInterval(timer);

// // // //     }
// // // // }, 2000);
// // // //console.log(__dirname);
// // // //normal function statement
// // // function sayHi(){
// // //     console.log('hi');

// // // }
// // // sayHi();

// // // //function expression
// // // var sayBye=function(){
// // //     console.log('bye');
// // // };
// // // sayBye();
// // function callFunction(fun){
// //     fun();
// // }
// // var sayBye=function(){
// //         console.log('bye');
// //     };
// //    callFunction(sayBye);










// var count=require('./count');

// console.log(count.counter(['navya','lakshmi','atu']));
// console.log(count.pi);



var events=require('events');

var myEmitter=new events.EventEmitter();

myEmitter.on('someEvent',function(msg){
  console.log(msg);
});

myEmitter.emit('someEvent','the event was emitted');