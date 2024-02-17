// when user clicks purchase button, render out "Something went wrong, please try again" in the paragraph that has id = "error"

let errormsg = document.getElementById("error"); 
console.log(errormsg)

function purchase() {
    console.log("Button Clicked")
    errormsg.textContent = "Something went wrong, please try again"
}