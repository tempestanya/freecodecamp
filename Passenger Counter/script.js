// --------------------------------------------------PASSESNGER COUNTER-------------------------------------------------------
// initialise count to 0
// listen for clicks on increment button
// increment count variable when the button is clicked
// change count-el in HTML to reflect the new count

// 1. grab save-el paragraph and store it in a variable called savel

let saveEl = document.getElementById("save-el");
let countel = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countel.textContent = count;
}

function save() {
    // 2. create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. render the variable in the saveEl using innerText
    // make sure not to delete the existing content of the parapgraph

    let countStr = count + " - "
    saveEl.textContent += countStr
    countel.textContent = 0
    count = 0
}
