let inputValue = document.getElementById("input");
let button = document.getElementById("btn");
let descr = document.getElementsByClassName("description");

// create local storge after user input
button.addEventListener('click', function(event) {
    event.preventDefault();
    text = inputValue.value 
    console.log(text)
    // get the nearby values associated with the textarea
    var text = $(this).siblings('.description').val(text);
    var block = $(this).parent().attr();
    localStorage.setItem(block, text)

    localStorage.setItem('text', text)
    renderInput()
});

function renderInput() {
    let tasks = localStorage.getItem('text');
    console.log(tasks)
    descr.textContent = tasks
}

// get item method 
$('#time8 .description').val(localStorage.getItem('text'))
$('#time9 .description').val(localStorage.getItem('text'))
$('#time10 .description').val(localStorage.getItem('text'))
$('#time11 .description').val(localStorage.getItem('text'))
$('#time12 .description').val(localStorage.getItem('text'))
$('#time1 .description').val(localStorage.getItem('text'))
$('#time2 .description').val(localStorage.getItem('text'))
$('#time3 .description').val(localStorage.getItem('text'))
$('#time4 .description').val(localStorage.getItem('text'))


// time and date for header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// create a function to change description color
function timeColor() {
    let currentHour = moment().hour()
    console.log(currentHour)
    
    if (currentHour > 8) {
        $(".time8").addClass("past");
    } else if (currentHour === 8) {
        $(".time8").addClass("present");
    } else if (currentHour < 8) {
        $(".time8").addClass("future");
    }
    if (currentHour > 9) {
        $(".time9").addClass("past");
    } else if (currentHour === 9) {
        $(".time9").addClass("present");
    } else if (currentHour < 9) {
        $(".time9").addClass("future");
    }
    if (currentHour > 10) {
        $(".time10").addClass("past");
    } else if (currentHour === 10) {
        $(".time10").addClass("present");
    } else if (currentHour < 10) {
        $(".time10").addClass("future");
    }
    if (currentHour > 11) {
        $(".time11").addClass("past");
    } else if (currentHour === 11) {
        $(".time11").addClass("present");
    } else if (currentHour < 11) {
        $(".time11").addClass("future");
    }
    if (currentHour > 12) {
        $(".time12").addClass("past");
    } else if (currentHour === 12) {
        $(".time12").addClass("present");
    } else if (currentHour < 12) {
        $(".time12").addClass("future");
    }
    if (currentHour > 13) {
        $(".time1").addClass("past");
    } else if (currentHour === 13) {
        $(".time1").addClass("present");
    } else if (currentHour < 13) {
        $(".time1").addClass("future");
    }
    if (currentHour > 14) {
        $(".time2").addClass("past");
    } else if (currentHour === 14) {
        $(".time2").addClass("present");
    } else if (currentHour < 14) {
        $(".time2").addClass("future");
    }
    if (currentHour > 15) {
        $(".time3").addClass("past");
    } else if (currentHour === 15) {
        $(".time3").addClass("present");
    } else if (currentHour < 15) {
        $(".time3").addClass("future");
    }
    if (currentHour > 16) {
        $(".time4").addClass("past");
    } else if (currentHour === 16) {
        $(".time4").addClass("present");
    } else if (currentHour < 16) {
        $(".time4").addClass("future");
    }

}
timeColor()
