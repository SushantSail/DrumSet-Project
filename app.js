alert("You can also play drum set using following KEYPRESS ");
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerText = this.innerText;
        // alert(buttonInnerText);
        makeSound(buttonInnerText);
        buttonAnimation(buttonInnerText);
    });

}



// confirm("enter");
// var numberOfDrumButtons = document.querySelectorAll(".drums").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".drums")[i].addEventListener("click", function() {
//     alert(buttonInnerHTML);

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

document.addEventListener("keypress", function (event) {


    makeSound(event.key.toLowerCase());

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;

        case "y":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
            break;

        case "o":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
            break;

        case "f":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "j":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "b":
            var snare = new Audio('sounds/tom-1.mp3');
            snare.play();
            break;

        case "c":
            var crash = new Audio('sounds/snare.mp3');
            crash.play();
            break;

        case "m":
            var kick = new Audio('sounds/snare.mp3');
            kick.play();
            break;


        default: console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    // pressed is edited in css file
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}
