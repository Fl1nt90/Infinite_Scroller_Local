const state = {
  reversed: false,
  initial: [
    "img/images/103573552_939443276487246_5541652549148429467_n.jpg",
    "img/images/137621466_10161259427131840_625118455530440663_o.jpg",
    "img/images/agat.jpg",
    "img/images/glass.jpg",
    "img/images/Senza titolo-1.jpg",
    "img/images/Senza titolo-1sa.jpg",
    "img/images/Senza titolo-2.jpg",
    "img/images/Senza titolo-3.jpg",
    "img/images/Senza titolo-14.jpg",
  ],
};

export let tempPhotoArray = state.initial; //initial state

export const reverse = function () {
  //function to reverse the order of the photo
  if (!state.reversed) {
    tempPhotoArray = []; //empty the array
    for (let i = state.initial.length - 1; i >= 0; i--) {
      tempPhotoArray.push(state.initial[i]);
    }
    state.reversed = true; //set the boolean
  } else {
    tempPhotoArray = state.initial;
    state.reversed = false;
  }
};

// shuffle array/randomize array/random item in array
//Fisher-Yates (aka Knuth) Shuffle https://bost.ocks.org/mike/shuffle/
export const randomize = function (array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

//upload picture, create HTML and push the result into array
let html;
//create HTML and copy to cliboard
export const go = function () {
  const fileInput = document.getElementById("file");
  const results = [];
  for (const file of fileInput.files) {
    results.push(`'img/images/${file.name}'`);
  }
  //join the array
  html = results.join(", ");
  /* copy text to the clipboard / copy to the cliboard / copy button */
  navigator.clipboard.writeText(html);
  alert(`Text copied: ${html}`); /* Alert the copied text */
};
