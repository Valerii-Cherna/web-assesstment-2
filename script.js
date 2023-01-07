// Task 1
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
ctx.fillStyle = "aquamarine";
ctx.font = "70px Libre Baskerville";
ctx.fillText("Valerii", 50, 100);
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.arc(350, 50, 50, 0, Math.PI, false);
ctx.lineWidth = 20;
ctx.stroke();

// Task 2
const firstHover = $("#firstHover");
const secondHover = $("#secondHover");

firstHover.hover(
    function () {
        $(this).addClass("hover");
        secondHover.addClass("hover");
    }, function () {
        secondHover.removeClass("hover");
    }
)
secondHover.hover(
    function () {
        $(this).addClass("hover");
        firstHover.addClass("hover");
    }, function () {
        firstHover.removeClass("hover");
    }
)

// Task 3
function switcher(id) {    
    const hiddenButton = $(`#${id}`);
    const idVisibleButton = id === "on" ? "off" : "on";
    const visibleButton = $(`#${idVisibleButton}`);

    hiddenButton.fadeOut("slow");
    visibleButton.fadeIn("slow");
}

// Task 4
function changeCity() {
    const city = $('input[name=country]:checked').val() === "Ireland" ? "Dublin" : "Paris"
    const select = $("#cities");
    select.val(city);
}

// Task 5
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}