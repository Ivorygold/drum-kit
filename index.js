const drumClicked = document.querySelectorAll(".drum").length;
for (i = 0; i < drumClicked; i++) {
  //  detect keypress
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //A Switch statement is needed to produce a different sound from pressing different button using the innerhtmld
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}
// detect keybord press
document.addEventListener("keypress", function (e) {
  makeSound(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "i":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// CONSTRUCTOR FUNCTION.
// THIS function is all capitlised eg(BellBoy) as against the normal JS convention
// note that it is used in building a factory of function as it associated to variables of similar characteristics
// more so, it takes a number of input and this inputs are used when creating an object.

function HouseKeeper(yearsOfExperience, name, cleaningRepertoir) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoir = cleaningRepertoir;
  this.clean = function () {
    //alert("i am cleaning the kichen");
  };
}
const houseKeeper1 = new HouseKeeper(9, "tom", [("bedroom", "looby")]);
const houseKeeper2 = new HouseKeeper(19, "jerry", [("kichen", "dinning")]);
const houseKeeper3 = new HouseKeeper(29, "sam", [("parlor", "toilet")]);
console.log(houseKeeper1.name);
houseKeeper1.clean();

// PERFORMING A HIGH ORDER FUNCTION
// This is a process of a function taking in another function as an input
function multiply(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

console.log(calculator(3, 6, multiply));
console.log(calculator(4, 6, add));
console.log(calculator(7, 90, subtraction));
