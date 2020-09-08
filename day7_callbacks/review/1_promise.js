let x = 2;
let y = 'dan';


// instance of class

// every promise either returns a resolve or reject

// most of the time : you define a function that returns promise

let calculation = new Promise((resolve, reject) =>{
       let answer = x + y
       if(isNaN(answer)){
           reject("Input needs to be a number")
       }
       resolve(answer)
})


calculation
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })