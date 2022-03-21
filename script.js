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

const count = 3; //image to load every scroll
let imagesLoaded = 0;
let totalImages = 0; //to keep track of the total images

let showUpload = false; //to show the title upload box
let readyBoolean = false; //variable to check if all images are loaded
//ready boleand to momentary disable the "scroll" event while rendering randomized/sorted elements
let disableScroll = false; 

let imagesDisplayed = []; //need the global array to sort/randomize



//FUNCTION FIRED AFTER EVERY IMAGE IS LOADED
const loaded = function (randomizing) {
  if (!randomizing) imagesLoaded++; //every loaded image, increase the counter by 1
  console.log(imagesLoaded, totalImages);
  console.log(randomizing);

  //WHEN ALL IMAGES ARE LOADED
  if (imagesLoaded === totalImages) { 
    loader.hidden = true; //hide the loader
    readyBoolean = true; //se the ready boolean to TRUE
    disableScroll = false; //re-enable the "scroll" event listener
  }
};

//DISPLAY THE PHOTO ON THE PAGE
const displayPhotos = function (photos, randomizing = false) {
  //loop over the photos array and create element for every object in the array
  photos.forEach((element) => {
    const img = document.createElement("img"); //create image element
    img.setAttribute("src", element); //set the source
    imageContainer.appendChild(img); //insert in the page

    //event listener for load event for every image
    img.addEventListener("load", function () {
      loaded(randomizing);
    });
    
  });
  
};

//GET AND SLICE THE PHOTOS
const getSplicePhotos = function () {
    const afterSplice = tempPhotoArray.splice(0, count);
    imagesDisplayed.push(...afterSplice); //push to the global array
    totalImages += afterSplice.length; 
    displayPhotos(afterSplice);
};
getSplicePhotos(); //immediately call at run-time




//CLEAN THE PHOTOS IN THE IMAGE CONTAINER /remove childre/remove all the child/delete children
function removeAllChildNodes(parent) {
  disableScroll = true; //disable the scroll before updating the images
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//SCROLL EVENT LISTENER
window.addEventListener("scroll", function() {
  if (
    window.innerHeight + window.scrollY > document.body.offsetHeight -200 &&
    readyBoolean && (!disableScroll)
  ) {
    getSplicePhotos();
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
  if (!e.target.id) return;
  removeAllChildNodes(imageContainer);

  if (e.target.id === "randomize") {
    randomize(imagesDisplayed);
  }
  if (e.target.id === "sort") reverse();

  displayPhotos(imagesDisplayed, true);
});

