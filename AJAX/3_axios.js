// axios returns a promise
let getUserName = () =>{
    axios.get("https://randomuser.me/api/")
        .then(response => console.log(response.data.results[0].name.first))
        .catch(err =>  console.log(err))
}

document.getElementById("button").addEventListener("click", getUserName)
