let inputValue = document.getElementById("input");
let button = document.getElementById("btn");
let descr = document.getElementsByClassName("description");



var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// create a function to change description color
function timeColor() {
    let currentHour = moment().hour()

    if (currentHour > 9) {
        $(".time9").addClass("past");
    } else if (currentHour === 9) {
        $(".time9").addClass("present");
    } else if (currentHour < 9) {
        $(".time9").addClass("future");
    }
     

}


timeColor()

example = function () {
    let text = inputValue.value;

    console.log(text)
}
function example() {
    
}