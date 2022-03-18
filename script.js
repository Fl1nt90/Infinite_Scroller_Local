import {
  go,
  reverse,
  randomize,
  tempPhotoArray,
} from "./filelist.js";


const title = document.querySelector("h1");
const uploadContainer = document.getElementById("upload");
const buttonsContainer = document.querySelector(".buttons");
const imageContainer = document.querySelector(".image-container");
const loader = document.getElementById("loader");
const goButton = document.getElementById("go");

let showUpload = false;

const count = 3; //image to load every scroll
let readyBoolean = false; //variable to check if all images are loaded
let imagesLoaded = 0;
let totalImages = 0; //to keep track of the total images

let imagesDisplayed = []; //need the global array to later sort/randomize


//FUNCTION FIRED AFTER EVERY IMAGE IS LOADED
const loaded = function () {
  imagesLoaded++; //every loaded image, increase the counter by 1
  console.log(imagesLoaded, totalImages);

  if (imagesLoaded === totalImages) {
    readyBoolean = true; //se the ready boolean to TRUE
    loader.hidden = true; //hide the loader
  }
};

//DISPLAY THE PHOTO ON THE PAGE
const displayPhotos = function (photos) {
  //loop over the photos array and create element for every object in the array
  photos.forEach((element) => {
    const img = document.createElement("img"); //create image element
    img.setAttribute("src", element); //set the source
    imageContainer.appendChild(img); //insert in the page
    //event listener for load event for every image
    img.addEventListener("load", function () {
      loaded();
    });
  });
};

//GET AND SLICE THE PHOTOS
const getPhotos = function () {
    const slicePhotosArray = tempPhotoArray.slice(imagesLoaded, imagesLoaded + count)
    imagesDisplayed.push(slicePhotosArray); //push to the global array
    console.log(slicePhotosArray, imagesDisplayed);
    totalImages += slicePhotosArray.length; 
    displayPhotos(slicePhotosArray);
};
getPhotos(); //immediately call at run-time


// //get photos, slice and show on the page
// const getSliceDisplayPhotos = function () {
//   //slice the array, push into the displayed images and set the totalImages variable
//     const slicePhotosArray = tempPhotoArray.slice(imagesLoaded, imagesLoaded + count)
//     imagesDisplayed.push(slicePhotosArray); //push to the global array
//     totalImages += slicePhotosArray.length; 

//   //display the images on the page, looping over the scliced array
//     slicePhotosArray.forEach((element) => {
//     const img = document.createElement("img"); //create image element
//     img.setAttribute("src", element); //set the source
//     imageContainer.appendChild(img); //insert in the page

//   //event listener for load event for every image
//     img.addEventListener("load", function () {
//       loaded(); //call the loaded function
//     });
//   });
// };
// getSliceDisplayPhotos();


//CLEAN THE PHOTOS IN THE IMAGE CONTAINER /remove childre/remove all the child/delete children
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//SCROLL EVENT LISTENER
window.addEventListener("scroll", function () {
  if (
    window.innerHeight + window.scrollY > document.body.offsetHeight -300 &&
    readyBoolean
  ) {
    getPhotos();
    readyBoolean = false; //reset the readyBoolean variable after loading new images
  }
});


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

//SORT and RANDOMIZE BUTTONS EVENT LISTENER
buttonsContainer.addEventListener("click", function (e) {
  e.preventDefault();

  if (!e.target.id) return;
  removeAllChildNodes(imageContainer);
  if (e.target.id === "randomize") randomize(imagesDisplayed);
  if (e.target.id === "sort") reverse();

  displayPhotos(imagesDisplayed);
});
