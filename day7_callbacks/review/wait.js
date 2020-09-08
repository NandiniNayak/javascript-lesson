function waitUpToThreeSecods(time) {
    // generate and return a promise
    var promise = new Promise(function (resolve, reject) {
        console.log(`I will wait for 3 seconds, you asked me to wait for ${time} seconds`);

        setTimeout(() => {
            resolve(`I waited for ${time} seconds`);
        }, time * 1000);

        setTimeout(() => {
            reject("waited for too long");
        }, 3000)
    });
    return promise
}


waitUpToThreeSecods(2)
    .then(result => console.log(result))
    .catch(err => console.log(err));

waitUpToThreeSecods(4)
    .then(result => console.log(result))
    .catch(err => console.log(err))