// Grab welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name - your name & greeting - you want to render on the page)
let username = "Anjali"
let greeting = "Hey, welcome back!"

// Render the message using welcomeEl.innerText &#128075 👋
welcomeEl.innerText = greeting + " " + username 
welcomeEl.innerText += " 👋"