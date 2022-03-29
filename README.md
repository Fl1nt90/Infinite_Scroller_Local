Functionalities: Randomize and sort by name


--PROGRESSIVE LOADING/SCROLL LOADING--
The strategy is to render only part of the array --> Splice method, pushing the spliced items into a new array.



NEED A READY BOOLEAN TO MOMENTARY DISABLE "SCROLL" Event listener when randomizing or sorting; reason is that render of different images will cause automatic scroll.
-->set disableScroll it TRUE before removeChild() method and FALSE right after 


RANDOMIZE FUNCTION:
I need to pass a secund argument to the displayPhotos(), that will be later passed in the loaded() funciton call. The reason is that i want to tell that i am randomizing, and i don't want the count of the loaded images to increase -->   if (!randomizing) imagesLoaded++; 



GET EXIF
I used the external library. 
NOTE that the is an asynchronous function, so i need to await it
```javascript
  //LOOP over the input file array
  for (const file of fileInput.files) {
    //get EXIF
      if (file && file.name) {
//need to promisify the function to get exif!!! otherwise will return "undefined"
    let date = await new Promise(resolve =>
	      EXIF.getData(file, function() {
		      resolve(EXIF.getTag(this, "DateTimeOriginal")); 
	    }
  ));
```

-Transform the date into a single number, so that will be easy to sort
Then is easy, i will create an object with all the properties.
-the sortPhotos() function receives the array and sort it, checking also the direction of sorting trough the "sorted" variable

```javascript
export const sortPhotos = function(array, sorted) {
  array.sort(function (a, b) {
    if (sorted) { //check if already sorted, so will change the order from ascending to descending
      return b.processedDate - a.processedDate;
    } else return a.processedDate - b.processedDate; 
  });
};
```


//ERROR HANDLINGS IN CASE OF MISSING IMAGES/BROKEN LINK
-in case an image disappear/is cancelled, the gallery will stop work. The problem is probably with the counter functionalities..so i have to listen for the error, and in case remove the image and call loaded() function anyway

```javascript
  //handle error in case of missing image/broken image
    img.onerror = function() {
      img.removeAttribute("src"); 
      loaded(randomizing); //need to call to increase the counter and don't broke scroll functionality
    }
```