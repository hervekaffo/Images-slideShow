//scripts.js

window.onload = function(){
	
	showSlides(1); // display image with index one when the window loads
	var cont = document.getElementById("container");
	cont.addEventListener("touchstart", startTouch, false); // when you touch the screen
	cont.addEventListener("touchmove", moveTouch, false); // when you move after touching
	
	// initial point at the first touch: Swipe Left / Right
	var initialX = null;
	var initialY = null;
}
	
// set the first index at one to display the first image	
var slideIndex = 1;
//showSlides(slideIndex);

// function trigged when next or preview are cliqued
function plusSlides(n){
	showSlides(slideIndex += n);
}

//function trigged to display the current image
function currentSlide(n){
	showSlides(slideIndex = n);
}

// function to display image which takes in parameter the index of the image
function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	// if the index of the slide is greater than the number of images, set the index to one
	if (n > slides.length) {slideIndex = 1}
	// if the index of the slide is less than the number of images, set the index to the number of images
	if (n < 1) {slideIndex = slides.length}
	//disable the display of all the images 
	for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none";
	}
	// make all the dots active 
	for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" active", "");
	}
	// display only the image of the current index
	slides[slideIndex-1].style.display = "block";
	// highlight the dot realtive to the image displayed
	dots[slideIndex-1].className += " active";
}

/* Functions for the swipe*/
// at the initial touch position put the coordinates in initialX and initialY 
function startTouch(e) {
	initialX = e.touches[0].clientX;
	initialY = e.touches[0].clientY;
};

// function to capture the touch movement and slide to the next or preview image when touchmove is fired
function moveTouch(e) {

  // if the initial points are null, do nothing	
  if (initialX === null) {
    return;
  }
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  // substract the initial position from the current position on x and y axis
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
	  plusSlides(-1)
    } else {
      // swiped right
	  plusSlides(1)
    }  
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
    } else {
      // swiped down
    }  
  }
 // reinitialize the x and y coordinates
  initialX = null;
  initialY = null;
  // Prevent any brownser movenment when the touch is fired
  e.preventDefault();
};

//}