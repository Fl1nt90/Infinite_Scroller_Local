Functionalities: Randomize and sort by name


--PROGRESSIVE LOADING/SCROLL LOADING--
The strategy is to render only part of the array --> Splice method, pushing the spliced items into a new array.



NEED A READY BOOLEAN TO MOMENTARY DISABLE "SCROLL" Event listener when randomizing or sorting; reason is that render of different images will cause automatic scroll.
-->set disableScroll it TRUE before removeChild() method and FALSE right after 


RANDOMIZE FUNCTION:
I need to pass a secund argument to the displayPhotos(), that will be later passed in the loaded() funciton call. The reason is that i want to tell that i am randomizing, and i don't want the count of the loaded images to increase -->   if (!randomizing) imagesLoaded++; 