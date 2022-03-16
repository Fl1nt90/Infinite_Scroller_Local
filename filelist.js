export const imgHtmlArray = [
  '<img src="img/images/103573552_939443276487246_5541652549148429467_n.jpg"/>',
  '<img src="img/images/137621466_10161259427131840_625118455530440663_o.jpg"/>',
  '<img src="img/images/agat.jpg"/>',
  '<img src="img/images/glass.jpg"/>',
  '<img src="img/images/Senza titolo-1.jpg"/>',
  '<img src="img/images/Senza titolo-1sa.jpg"/>',
  '<img src="img/images/Senza titolo-2.jpg"/>',
  '<img src="img/images/Senza titolo-3.jpg"/>',
  '<img src="img/images/Senza titolo-14.jpg"/>',
];

let html;

//create HTML and copy to cliboard
export const go = function () {
  const fileInput = document.getElementById("file");
  const results = [];
  for (const file of fileInput.files) {
    results.push(`'<img src="img/images/${file.name}"/>'`);
  }
  //join the array
  html = results.join(", ");
  /* copy text to the clipboard / copy to the cliboard / copy button */
  navigator.clipboard.writeText(html);
  alert(`Text copied: ${html}`); /* Alert the copied text */
};
