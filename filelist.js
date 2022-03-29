const state = {
  reversed: false,
  initial: [{src: 'img/images/IMG_20211107_033612.jpg', date: '2021:11:07 03:36:15', processedDate: 20211107033615}, {src: 'img/images/IMG_20211107_063351.jpg', date: '2021:11:07 06:33:52', processedDate: 20211107063352}, {src: 'img/images/IMG_20211107_063405.jpg', date: '2021:11:07 06:34:06', processedDate: 20211107063406}, {src: 'img/images/IMG_20211107_063415.jpg', date: '2021:11:07 06:34:16', processedDate: 20211107063416}, {src: 'img/images/IMG_20211107_105748.jpg', date: '2021:11:07 10:57:50', processedDate: 20211107105750}, {src: 'img/images/IMG_20211107_125232.jpg', date: '2021:11:07 12:52:34', processedDate: 20211107125234}, {src: 'img/images/IMG_20211107_125241.jpg', date: '2021:11:07 12:52:43', processedDate: 20211107125243}, {src: 'img/images/IMG_20211107_130030.jpg', date: '2021:11:07 13:00:31', processedDate: 20211107130031}, {src: 'img/images/IMG_20211107_130133.jpg', date: '2021:11:07 13:01:34', processedDate: 20211107130134}, {src: 'img/images/IMG_20211107_130205.jpg', date: '2021:11:07 13:02:06', processedDate: 20211107130206}, {src: 'img/images/IMG_20211107_130257.jpg', date: '2021:11:07 13:02:58', processedDate: 20211107130258}, {src: 'img/images/IMG_20211107_130516.jpg', date: '2021:11:07 13:05:17', processedDate: 20211107130517}, {src: 'img/images/IMG_20211107_131020.jpg', date: '2021:11:07 13:10:20', processedDate: 20211107131020}, {src: 'img/images/IMG_20211107_140413.jpg', date: '2021:11:07 14:04:15', processedDate: 20211107140415}, {src: 'img/images/IMG_20211107_141345.jpg', date: '2021:11:07 14:13:46', processedDate: 20211107141346}, {src: 'img/images/IMG_20211107_171240.jpg', date: '2021:11:07 17:12:42', processedDate: 20211107171242}, {src: 'img/images/IMG_20211107_171257.jpg', date: '2021:11:07 17:12:59', processedDate: 20211107171259}, {src: 'img/images/IMG_20211107_215529.jpg', date: '2021:11:07 21:55:29', processedDate: 20211107215529}, {src: 'img/images/IMG_20211108_112435.jpg', date: '2021:11:08 11:24:37', processedDate: 20211108112437}, {src: 'img/images/IMG_20211108_122951.jpg', date: '2021:11:08 12:29:52', processedDate: 20211108122952}, {src: 'img/images/IMG_20211108_123000.jpg', date: '2021:11:08 12:30:01', processedDate: 20211108123001}, {src: 'img/images/IMG_20211108_123113.jpg', date: '2021:11:08 12:31:15', processedDate: 20211108123115}, {src: 'img/images/IMG_20211108_123128.jpg', date: '2021:11:08 12:31:30', processedDate: 20211108123130}, {src: 'img/images/IMG_20211108_124649.jpg', date: '2021:11:08 12:46:51', processedDate: 20211108124651}, {src: 'img/images/IMG_20211108_124753.jpg', date: '2021:11:08 12:47:54', processedDate: 20211108124754}, {src: 'img/images/IMG_20211108_125243.jpg', date: '2021:11:08 12:52:45', processedDate: 20211108125245}, {src: 'img/images/IMG_20211108_133231.jpg', date: '2021:11:08 13:32:32', processedDate: 20211108133232}, {src: 'img/images/IMG_20211108_142717.jpg', date: '2021:11:08 14:27:18', processedDate: 20211108142718}, {src: 'img/images/IMG_20211108_143246.jpg', date: '2021:11:08 14:32:48', processedDate: 20211108143248}, {src: 'img/images/IMG_20211108_143341.jpg', date: '2021:11:08 14:33:42', processedDate: 20211108143342}, {src: 'img/images/IMG_20211108_143419.jpg', date: '2021:11:08 14:34:20', processedDate: 20211108143420}, {src: 'img/images/IMG_20211108_143509.jpg', date: '2021:11:08 14:35:10', processedDate: 20211108143510}, {src: 'img/images/IMG_20211108_152346.jpg', date: '2021:11:08 15:23:47', processedDate: 20211108152347}, {src: 'img/images/IMG_20211108_153014.jpg', date: '2021:11:08 15:30:16', processedDate: 20211108153016}, {src: 'img/images/IMG_20211108_153136.jpg', date: '2021:11:08 15:31:37', processedDate: 20211108153137}, {src: 'img/images/IMG_20211108_153234.jpg', date: '2021:11:08 15:32:35', processedDate: 20211108153235}, {src: 'img/images/IMG_20211108_153247.jpg', date: '2021:11:08 15:32:48', processedDate: 20211108153248}, {src: 'img/images/IMG_20211108_155049.jpg', date: '2021:11:08 15:50:50', processedDate: 20211108155050}, {src: 'img/images/IMG_20211108_155057.jpg', date: '2021:11:08 15:50:58', processedDate: 20211108155058}, {src: 'img/images/IMG_20211108_155309.jpg', date: '2021:11:08 15:53:11', processedDate: 20211108155311}, {src: 'img/images/IMG_20211108_155442.jpg', date: '2021:11:08 15:54:44', processedDate: 20211108155444}, {src: 'img/images/IMG_20211108_155457.jpg', date: '2021:11:08 15:54:58', processedDate: 20211108155458}, {src: 'img/images/IMG_20211108_155524.jpg', date: '2021:11:08 15:55:24', processedDate: 20211108155524}, {src: 'img/images/IMG_20211108_155526.jpg', date: '2021:11:08 15:55:27', processedDate: 20211108155527}, {src: 'img/images/IMG_20211108_155539.jpg', date: '2021:11:08 15:55:40', processedDate: 20211108155540}, {src: 'img/images/IMG_20211108_155546.jpg', date: '2021:11:08 15:55:49', processedDate: 20211108155549}, {src: 'img/images/IMG_20211108_155549.jpg', date: '2021:11:08 15:55:51', processedDate: 20211108155551}, {src: 'img/images/IMG_20211109_135725.jpg', date: '2021:11:09 13:57:26', processedDate: 20211109135726}, {src: 'img/images/IMG_20211109_135732.jpg', date: '2021:11:09 13:57:33', processedDate: 20211109135733}, {src: 'img/images/IMG_20211109_140639.jpg', date: '2021:11:09 14:06:40', processedDate: 20211109140640}, {src: 'img/images/IMG_20211109_141121.jpg', date: '2021:11:09 14:11:23', processedDate: 20211109141123}, {src: 'img/images/IMG_20211109_153524.jpg', date: '2021:11:09 15:35:26', processedDate: 20211109153526}, {src: 'img/images/IMG_20211109_153538.jpg', date: '2021:11:09 15:35:39', processedDate: 20211109153539}, {src: 'img/images/IMG_20211109_160653.jpg', date: '2021:11:09 16:06:56', processedDate: 20211109160656}, {src: 'img/images/IMG_20211109_160825.jpg', date: '2021:11:09 16:08:26', processedDate: 20211109160826}, {src: 'img/images/IMG_20211109_165143.jpg', date: '2021:11:09 16:51:43', processedDate: 20211109165143}, {src: 'img/images/IMG_20211109_165356.jpg', date: '2021:11:09 16:53:57', processedDate: 20211109165357}, {src: 'img/images/IMG_20211109_174059.jpg', date: '2021:11:09 17:41:02', processedDate: 20211109174102}, {src: 'img/images/IMG_20211109_174111.jpg', date: '2021:11:09 17:41:13', processedDate: 20211109174113}, {src: 'img/images/IMG_20211109_174316.jpg', date: '2021:11:09 17:43:17', processedDate: 20211109174317}, {src: 'img/images/IMG_20211109_174357.jpg', date: '2021:11:09 17:43:58', processedDate: 20211109174358}, {src: 'img/images/IMG_20211109_174503.jpg', date: '2021:11:09 17:45:03', processedDate: 20211109174503}, {src: 'img/images/IMG_20211109_174515.jpg', date: '2021:11:09 17:45:17', processedDate: 20211109174517}, {src: 'img/images/IMG_20211109_174523.jpg', date: '2021:11:09 17:45:25', processedDate: 20211109174525}, {src: 'img/images/IMG_20211109_174559.jpg', date: '2021:11:09 17:45:59', processedDate: 20211109174559}, {src: 'img/images/IMG_20211109_175739.jpg', date: '2021:11:09 17:57:40', processedDate: 20211109175740}, {src: 'img/images/IMG_20211109_204648.jpg', date: '2021:11:09 20:46:48', processedDate: 20211109204648}, {src: 'img/images/IMG_20211109_204813.jpg', date: '2021:11:09 20:48:16', processedDate: 20211109204816}, {src: 'img/images/IMG_20211109_204818.jpg', date: '2021:11:09 20:48:20', processedDate: 20211109204820}, {src: 'img/images/IMG_20211110_104542.jpg', date: '2021:11:10 10:45:43', processedDate: 20211110104543}, {src: 'img/images/IMG_20211110_132440.jpg', date: '2021:11:10 13:24:42', processedDate: 20211110132442}, {src: 'img/images/IMG_20211110_132448.jpg', date: '2021:11:10 13:24:50', processedDate: 20211110132450}, {src: 'img/images/IMG_20211110_132653.jpg', date: '2021:11:10 13:26:55', processedDate: 20211110132655}, {src: 'img/images/IMG_20211110_132721.jpg', date: '2021:11:10 13:27:23', processedDate: 20211110132723}, {src: 'img/images/IMG_20211110_133305.jpg', date: '2021:11:10 13:33:07', processedDate: 20211110133307}, {src: 'img/images/IMG_20211110_141339.jpg', date: '2021:11:10 14:13:40', processedDate: 20211110141340}, {src: 'img/images/IMG_20211110_143320.jpg', date: '2021:11:10 14:33:20', processedDate: 20211110143320}, {src: 'img/images/IMG_20211110_145940.jpg', date: '2021:11:10 14:59:42', processedDate: 20211110145942}, {src: 'img/images/IMG_20211110_151030.jpg', date: '2021:11:10 15:10:32', processedDate: 20211110151032}, {src: 'img/images/IMG_20211110_154344.jpg', date: '2021:11:10 15:43:46', processedDate: 20211110154346}, {src: 'img/images/IMG_20211110_160045.jpg', date: '2021:11:10 16:00:47', processedDate: 20211110160047}, {src: 'img/images/IMG_20211110_160052.jpg', date: '2021:11:10 16:00:53', processedDate: 20211110160053}, {src: 'img/images/IMG_20211110_203406.jpg', date: '2021:11:10 20:34:06', processedDate: 20211110203406}, {src: 'img/images/IMG_20211111_160950.jpg', date: '2021:11:11 16:09:51', processedDate: 20211111160951}]
};


    



export let tempPhotoArray = state.initial; //initial state

//sorting objects/sort array element/sort properties/order objects
//this funcion receive the displayed images array, and return it sorted by date
export const sortPhotos = function(array, sorted) {
  array.sort(function (a, b) {
    if (sorted) { //check if already sorted, so will change the order from ascending to descending
      return b.processedDate - a.processedDate;
    } else return a.processedDate - b.processedDate; 
  });
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



///////////////////////////////////////////////////////////////////////

//upload picture, create HTML and push the result into array
//create HTML and copy to cliboard
export const createImagesObject = async function () {
  let html;
  let results = [];
  const fileInput = document.getElementById("file-input");

  //LOOP over the input file array
  for (const file of fileInput.files) {
      if (file && file.name) {     //get EXIF
//need to promisify the function to get exif!!! otherwise will return "undefined"
    let date = await new Promise(resolve =>
	      EXIF.getData(file, function() {
		      resolve(EXIF.getTag(this, "DateTimeOriginal")); 
	    }
  ));
  //process the date to get a single string
  const processed = date.replaceAll(" ", "").replaceAll(":", "");
  //create the array
  results.push(`{src: 'img/images/${file.name}', date: '${date}', processedDate: ${processed}}`);
  };
};

  //join the array
  html = results.join(", ");
 
  /* copy text to the clipboard / copy to the cliboard / copy button */
  navigator.clipboard.writeText(html);
  alert(`Text copied: ${html}`); /* Alert the copied text */
};
