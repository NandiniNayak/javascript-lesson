## why promise?
### serves 3 purpose:
1. solves callback hell
2. better error handling
3. promise is async : which mean we can write custom function, A promise is asynchronous so it is removed from the call stack while it processes and brought back onto the call stack by the event loop once the call stack is clear.
<!-- 
function returns promise -> has the power to delegate tasks to the waiter
setTimeout, fileRead -->

<!-- promise chain
promise all -->