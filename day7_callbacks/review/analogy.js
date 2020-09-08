var woodFound = true;
var buildSuccess = true;
var sailSuccess = true;

let getWood = () => {
    return new Promise((resolve, reject) => {
        if (woodFound) {
            resolve("got wood!")
        } else {
            reject("Wood not found")
        }
    });
}

let buildBoat = () => {
    return new Promise((resolve, reject) => {
        if (buildSuccess) {
            resolve("Built a Boat!")
        } else {
            reject("Building the boat failed")
        }

    });
}

let sailTheOcean = () => {
    return new Promise((resolve, reject) => {
    if (success) {
        resolve("Sailed the ocean");
    }else {
        reject("couldn't sail")
    }
 })
}
getWood()
 .then((answer) =>{
    return buildBoat()
  })
.then((answer) => {
    return sailTheOcean()
  })
.then(answer => console.log(answer))
.catch(err=> console.log(err));