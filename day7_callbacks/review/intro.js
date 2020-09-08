// why
// what
// how :  I understand
// how can I translate this to computer

// why Async js
// what is Async js
// how I understand Async js
// how can I implement this?

// why callback?
// what is callback?
// when will I use it
// how can I implement it?


// Async : non blocking: multi tasking

// willie waiter : javascript running on a call stack
//  ( javascript is not capabale of multitasking on its own)

// delgate tasks to other waiters : ( calling web api) - 
// api calls, file read, delay

// callback : now the food ( data) is ready, hand it back to willie

// callback queue : all waiters ready with the food waiting for willie (callstack where js is running) to be free

function greet(name, age, canCode, callback){
    console.log(name, age, canCode)
    // call it
    callback(name)
}
// greet("red", 20, true, welcome)
// greet("red", 20, true, function(){
//     console.log("hello")
// })
greet("red", 20, true,(name)=> {
    console.log(`hello ${name}`)
})

// function welcome(){
//     console.log("hello")
// }

// name = "nands"

// welcome = function(){
//     console.log("hello")
// }
// function is treated like an object:
// assign to a variable, can be passed as an argument, can be returned from a function, can be part of any Array, part of an object



// call it :  funcName()
// cn a function be passed as an arg to another func









