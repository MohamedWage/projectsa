var addName = document.querySelector(".md_header")
if(localStorage.getItem("userName")){
    addName.innerHTML = "Hello " + JSON.parse(localStorage.getItem("userName"))
}


// const currentDate = new Date();

// console.log(currentDate.toDateString());
// const today = new Date();
// const threeDaysLater = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);
// console.log(threeDaysLater)