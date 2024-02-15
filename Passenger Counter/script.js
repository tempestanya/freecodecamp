// --------------------------------------------------PASSESNGER COUNTER-------------------------------------------------------
// initialise count to 0
// listen for clicks on increment button
// increment count variable when the button is clicked
// change count-el in HTML to reflect the new count

let countel = document.getElementById("count-el");
let count = 0;
function increment() {
    count = count + 1;
    countel.innerText = count;
    console.log(count);
}


function save() {

}
