var myImage = document.querySelector("img");
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "images/blocks-icon.png") {
		myImage.setAttribute("src", "images/blocks.png");
	}
	else {
		myImage.setAttribute("src", "images/blocks-icon.png");
	}
}

Welcome Message

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName () {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Blocks' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Blocks' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

/*
// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Blocks, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Blocks, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
*/