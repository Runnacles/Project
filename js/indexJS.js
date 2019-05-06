// JavaScript Document
"use strict";
var roleIndex = 0;
var myIndex = 0;
var elements = document.getElementsByClassName("column");
var i;

window.onload = function() {
		
		// adds the chart to a container div in our html with an ID donut
	gridView();	// you can look up high charts docs but you do not need to understand below
	carouselRole();
	carousel();	
	

};



function carousel() {


	var x = document.getElementsByClassName("mySlides");
	
	for(i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if(myIndex > x.length) {myIndex = 1;}
	x[myIndex-1].style.display = "block";
	setTimeout(carousel, 2000);
}


function carouselRole() {


	var y = document.getElementsByClassName("roleSlide");
	
	for(i = 0; i < y.length; i++) {
		y[i].style.display = "none";
	}
	roleIndex++;
	if(roleIndex > y.length) {roleIndex = 1;}
	y[roleIndex-1].style.display = "block";
	setTimeout(carouselRole, 2000);
}

function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

function gridView() {
console.log("grid");

  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}