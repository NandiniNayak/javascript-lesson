// most of the time : you define a async function that returns promise
function adder(x,y){
    return new Promise((resolve, reject) => {
        let answer = x + y
        if (isNaN(answer)) {
            reject("Input needs to be a number")
        }
        resolve(answer)
    })
}

// adder(1,"ben")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// promise chain
// i want the answer from adder function and pass the answer as an argument to next adder function 

adder(2,5)
    .then(answer1 => {
        adder(answer1,4)
            .then(answer2 => {
                adder(answer2, "test")
                    .then(answer3 =>  console.log(answer3))
                    .catch(err => console.log(err))
            })
            .catch(err =>  console.log(err))
    })
    .catch(err =>  console.log(err))

// clear promise hell

// functionReturningPromise(arg1, arg2)
//     .then(prevresult => functionReturningPromise)
//     .then(anotherprevresult => functionReturningPromise)
//     .then(finalAnswer => print answer )
// answer1, 2, 3 are all placeholders that points to what is resolved in every call
adder(2,5)
    .then(result1 => adder(result1,3))
    .then(result2 => adder(result2, 3))
    .then(result3 => adder(result3, "test"))
    .then(finalAnswer => console.log(finalAnswer))
    .catch(err =>  console.log(err))
