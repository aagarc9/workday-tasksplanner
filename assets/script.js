let inputValue = document.getElementById("input");
let button = document.getElementById("btn");
let descr = document.getElementsByClassName("description");
let  row = document.getElementsByClassName('row');
let present = document.getElementsByClassName('present');
let future = document.getElementsByClassName('future');


var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

function timeColor() {
    let currentHour = moment().hour()

    if(currentHour < 8) {
    row.classList.add('past');
    }



}

timeColor()

button.onclick = function () {
    let text = inputValue.value;

    console.log(text)
}