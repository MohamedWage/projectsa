var log = document.querySelector(".login")
var reg = document.querySelector(".reg")
var goReg = document.querySelector(".login p a")
var goLog = document.querySelector(".reg p a")
goReg.addEventListener("click", function () {
    log.style.display = "none"
    reg.style.display = "block"
})
goLog.addEventListener("click", function goLogin() {
    log.style.display = "block"
    reg.style.display = "none"

})

// violotion in register
var subReg = document.querySelector(".reg button")
var userName = document.querySelector("#fName")
var pass1 = document.querySelector("#pass1")
var pass2 = document.querySelector("#pass2")
var email = document.querySelector(".reg #email")
var lname = document.querySelector("#lname")
subReg.addEventListener("click", function () {
    const Gender = document.querySelector("input[name='gender']:checked");
    // console.log(genderType)
    // console.log(!Gender)
    // console.log(pass1.value.length)
    if ((userName.value == "") ||
        (pass1.value == "") ||
        (pass2.value == "") ||
        (email.value == "") ||
        (lname.value == "") ||
        (!Gender)) {
        alert("please fill data")
        return;
    }


    if (email.value.includes("@")) {

        if (pass1.value == pass2.value) {
            if (pass1.value.length > 7) {
                localStorage.setItem("pass", JSON.stringify(pass1.value))
                localStorage.setItem("userName", JSON.stringify(userName.value))
                localStorage.setItem("email", JSON.stringify(email.value))
                log.style.display = "block"
                reg.style.display = "none"
                window.location = 'index.html'
            }
            else {
                alert("the password must be more than 7")
            }
        }
        else {
            alert("The password does not match")
        }
    }
    else {
        alert("please enter a email correct")
    }

})


// violotion in login
var emaillog = document.querySelector(".login #email")
var pass = document.querySelector("#pass")
var sublog = document.querySelector(".login button")

sublog.addEventListener("click", function () {
    if (
        pass.value == "" ||
        emaillog.value == "") {
        alert("please fill data")
    }
    else {
        if (pass.value == JSON.parse(localStorage.getItem("pass")) &&
            emaillog.value == JSON.parse(localStorage.getItem("email"))) {
            window.location = "index.html"
        }
        else {
            alert("password or email is wrong")
        }
    }
})