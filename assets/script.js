const inputValue = document.getElementById("input");

const button = document.getElementById("btn");

button.onclick = function () {
    const text = inputValue.value;

    console.log(text)
}

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));
