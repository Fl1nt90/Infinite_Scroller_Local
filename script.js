import {go, imgHtmlArray as results} from "./filelist.js";

let initialCount = 3; //the count of the photo to be loaded

const title = document.querySelector("h1");
const uploadContainer = document.getElementById("upload");
const imageContainer = document.querySelector(".image-container");
const loader = document.getElementById("loader");
const goButton = document.getElementById("go");

let readyBoolean = false; //variable to check if all images are loaded
let imagesLoaded = 0;
let totalImages = 0; //to keep track of the total images

//FUNCTION FIRED AFTER EVERY IMAGE IS LOADED
const loaded = function () {
  imagesLoaded++; //every loaded image, increase the counter by 1

  if (imagesLoaded === totalImages) {
    readyBoolean = true; //se the ready boolean to TRUE
    loader.hidden = true; //hide the loader
    //increase the initial count to load more photos
    updateApiUrl(undefined, 10); //skip first parameter/pass second parameter/pass only second parameter
  }
};

//CREATE HTML FOR IMAGES
const displayPhotos = function () {
  //set the totalImages variable
  totalImages += results.length;
  //loop over the photos array and create element for every object in the array
  results.forEach((photo) => {
    imageContainer.insertAdjacentHTML("afterbegin", photo);
  });
};
displayPhotos();

//AJAX API CALL
const getPhotos = async function () {
  try {
    const response = await fetch(apiUrl); //to make a GET request, just pass the url
    if (!response.ok) throw new Error(response.status); //throw error
    results = await response.json(); //convert to JSON and pass to the global variable
    displayPhotos(results); //call the function to display photos
  } catch (err) {
    console.log(err);
    //replace KEY if reached the limit
    if ((err = "403")) {
      updateApiUrl(BACKUP_KEY); //update the apiUrl with new KEY
      getPhotos(); //immediately re-call the function
    }
  }
};
getPhotos(); //immediately call at run-time

//SCROLL EVENT LISTENER
window.addEventListener("scroll", function () {
  if (
    window.innerHeight + window.scrollY > document.body.offsetHeight - 1000 &&
    readyBoolean
  ) {
    getPhotos();
    readyBoolean = false; //reset the readyBoolean variable after loading new images
  }
});

//call the function to create the array with html
goButton.addEventListener("click", function () {
  go(); //call the function to process the images and copy the HTML output to clipboard
  uploadContainer.hidden = true;
});

//show upload container when hovering on the title
title.addEventListener("mouseover", function () {
  uploadContainer.hidden = false;
});
