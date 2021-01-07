"use strict";

/***************************
 * VARIABLES
 ****************************/

let photos = [ 
    "canicheScroll.png", 
    "canicheScroll5.jpg",
    "canicheScrol.jpg"
    ];

 let prevButton = document.querySelector("#previous");
 console.log(prevButton);
 let nextButton = document.querySelector("article #next");
 let image = document.querySelector("article #slide");
 let counter = 0;


/***************************
 * FONCTIONS
 ****************************/
 function next() {
    image.classList.add("tailleStandard");
    counter++;
     if( counter == photos.length) {
        counter = 0;
     }
     image.src = "../img/" + photos[counter];

 }

 function previous() {
   image.classList.add("tailleStandard");
   counter--;
    if( counter < 0) {
       counter = photos.length - 1;
    }
    image.src = "../img/" + photos[counter];

 }

/***************************
 * EVENT HANDLERS
 ****************************/

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", previous);