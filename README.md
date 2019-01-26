# Images-slideShow
Web Based Responsive Slideshow

i. Design decisions
	- I will display one image at the time on the screen with the preview and next button on the image
	- when the user gets the cursor over the next or the preview symbol, the backgoung collor change indicating the user that he can click 
	- I decided to do the pagination with bullets containing the number aggigned to the image
	-I will also display the number of the image/ total number of the images on the top rigt corner of the image
	- when the user swipes right it displays the next image with ciurrent index +1 
	- when the user swipes left, it displays the prevew image with index -1 or the last image if it's negative
	
ii. Development decisions
	- I created a html file(index.html) where I:
		* created a DIV containing all the images, inside this, I created another DIV for each image, a div to display the number over the total number,
		a div for the title of the image   
		*I created another  div for the pagination bullets containing the number of the image 
	- I created a css file (css/css.css) where I styled the elemnts of the html file 
	- I created the javacript fine (scripts.js) for the ineraction with the DOM elements 
		* inside the javacript file, I wrote several functions
			. 3 functions to handle the click on the next and preview button (plusSlides(n), currentSlide(n), showSlide(n))
				the logic is indexing the images, take the total number, loop throught all the images and disable them. after that, enable the image with current index
			. 2 functions to handle the swipe on the images (startTouch(e),moveTouch(e))
				the logic here is to tahe the initial coordinate of the touch and compare to the actual position and display nex or preview image function of the result
iii. Areas for future improvement
	- polulate the image from the folder imgs amd dynamically display them. this script can be write with a server side laguange like PHP, Python or Java.
	- when the user bring the cursor on any part of the image, activate the background of next and preview button
	- on the first image, disable the preview button and on the last image disable the next button
	- resize the images with the same dimensions
	- use thumnail where you can see the image for the pagination
	- put the next and preview button closer to minimize the distance which the user move the cursor
- use a symbol to indicate that the user can actually swipe	
iv. Anything else I think is important
	- save the history of the imgaes displayed and remember the most watched image, save that in a local storage sothat the next time the slide starts with that partiular image
	- create muliple slideshow for example cars, dogs, cats, and allow the user to select the slideshow he want to see
	- automatically slide the images after a certain time
	
