import {
  go,
  reverse,
  randomize,
  imgHtmlArray as results,
} from "./filelist.js";

let initialCount = 3; //the count of the photo to be loaded

const title = document.querySelector("h1");
const uploadContainer = document.getElementById("upload");
const buttonsContainer = document.querySelector(".buttons");
const imageContainer = document.querySelector(".image-container");
const loader = document.getElementById("loader");
const goButton = document.getElementById("go");

let showUpload = false;

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
    const img = document.createElement("img"); //create image element
    img.setAttribute("src", photo); //set the source
    imageContainer.appendChild(img); //insert in the page
    //event listener for load event for every image
    img.addEventListener("load", function () {
      console.log("dio");
    });
  });
};
displayPhotos();

// //AJAX API CALL
// const getPhotos = async function () {
//   try {
//     const response = await fetch(apiUrl); //to make a GET request, just pass the url
//     if (!response.ok) throw new Error(response.status); //throw error
//     results = await response.json(); //convert to JSON and pass to the global variable
//     displayPhotos(results); //call the function to display photos
//   } catch (err) {
//     console.log(err);
//   }
// };
// getPhotos(); //immediately call at run-time

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

//RANDOMIZE PHOTOS
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//UPLOAD CONTAINER ----------------------------------------------------------------
//show/hide upload container when clicking on the title
title.addEventListener("click", function () {
  if (!showUpload) {
    uploadContainer.hidden = false;
    showUpload = true;
  } else {
    uploadContainer.hidden = true;
    showUpload = false;
  }
});

//call the function to create the array with html
goButton.addEventListener("click", function () {
  go(); //call the function to process the images and copy the HTML output to clipboard
  uploadContainer.hidden = true;
  showUpload = false;
});

buttonsContainer.addEventListener("click", function (e) {
  e.preventDefault();

  if (!e.target.id) return;
  removeAllChildNodes(imageContainer);
  if (e.target.id === "randomize") randomize(results);
  if (e.target.id === "sort") reverse();

  displayPhotos();
});
