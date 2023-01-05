const password = prompt("Enter your Password");

if(password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("valid Password!")
}
else {
    console.log("Invalid Password")
}