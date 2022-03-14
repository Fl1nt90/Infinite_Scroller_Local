//Unsplash API
const ACC_KEY = "hf2rB167TuKJqjyqhQXdrlm4S-QarljFWbYv2StjXMs";
// BACKUP KEY: D4reuy0cjFZGln67Ii4FUadiflVxw6niV0XmfcpwxR0
const count = 2; //the count of the photo to be loaded
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${ACC_KEY}&count=${count}`;

const imageContainer = document.querySelector(".image-container");
const loader = document.getElementById("loader");

let results = []; //global variable to store fetch result

let readyBoolean = false; //variable to check if all images are loaded
let imagesLoaded = 0;
let totalImages = 0; //to keep track of the total images


//FUNCTION FIRED AFTER EVERY IMAGE IS LOADED
const loaded = function () {
  imagesLoaded ++; //every loaded image, increase the counter by 1

  if (imagesLoaded === totalImages) {
    readyBoolean = true; //se the ready boolean to TRUE
    loader.hidden = true; //hide the loader
  }
};



//CREATE HTML FOR IMAGES
const displayPhotos = function () { 
  //set the totalImages variable
  totalImages += results.length;
  //loop over the photos array and create element for every object in the array
  results.forEach((photo) => {  
    const item = document.createElement("a"); //create an <a> element
    item.setAttribute("href", photo.links.html); //set attributes to the created element
    item.setAttribute("target", "_blank"); //open in new tab
  //create the <img>
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

  //add event listener for load event on every image
    img.addEventListener("load", loaded);
    
  //put the <img> inside the <a> and both inside the imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};



//AJAX API CALL
const getPhotos = async function () { 
  try {
    const response = await fetch(apiUrl); //to make a GET request, just pass the url
    if (!response.ok) throw new Error(response.status); //throw error
    results = await response.json(); //convert to JSON and pass to the global variable
    displayPhotos(results); //call the function to display photos
  } catch (err) {
    console.log(err);
  }
};
getPhotos(); //immediately call at run-time


//SCROLL EVENT LISTENER
window.addEventListener("scroll", function () {
  if ((window.innerHeight + window.scrollY > document.body.offsetHeight) && readyBoolean) {
    getPhotos();
    readyBoolean = false; //reset the readyBoolean variable after loading new images
    loader.hidden = false; //show the loader
  }
});
