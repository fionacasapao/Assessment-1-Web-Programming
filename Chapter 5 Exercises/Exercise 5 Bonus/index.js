const samples = document.querySelectorAll(".sample"); /*selects the element with class .sample from the webpage*/

samples.forEach(sample => { /*it loops through each of the selected element*/

sample.addEventListener("click", () => { /*it adds a click event*/

let audioFile = sample.getAttribute("data-audio"); /*gets the audio file name from the HTML*/
let audio = new Audio(audioFile); /*creates new audio object*/
audio.play(); /*plays the audio sound whenever its clicked*/

});

let audioFile = sample.getAttribute("data-audio"); /*reads information about the audio file*/
let audio = new Audio(audioFile);

audio.addEventListener("loadedmetadata", () => { /*wait until the audio metadata is loaded*/

let duration = audio.duration.toFixed(2); /*gets the audio length and round it to 2 decimal places*/
sample.querySelector(".duration").textContent = duration; /*displays the audio duration*/

});

});