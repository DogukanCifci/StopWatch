//start-stop resimlerin tiklandiginda degismesi
const image = document.querySelector("img.start-stop");
const imageReset = document.querySelector("img.reset");
const milisecondsDisplay = document.querySelector("span.miliseconds");
const secondDisplay = document.querySelector("span.seconds");
const minuteDisplay = document.querySelector("span.minutes");
let milisecondsSayac = null;
let secondSayac = null;
let miliseconds = 0;
let second = 0;
let minutes = 0;

image.addEventListener("click", () => {
  if (image.src == "../images/start1.png") {
    image.src = "../images/pause.png";
    milisecondsSayac = setInterval(() => {
      miliseconds++;
      pressDisplay(milisecondsSayac);
    }, 10);
    secondSayac = setInterval(() => {
      second++;
      pressDisplay(secondSayac);
    }, 1000);
  } else {
    image.src = "../images/start1.png";
    clearInterval(milisecondsSayac);
    clearInterval(secondSayac);
  }
});

function pressDisplay() {
  if (miliseconds == 100) {
    milisecondsDisplay.textContent = "00";
    miliseconds = 00;
  }
  if (miliseconds < 10) milisecondsDisplay.textContent = "0" + miliseconds;
  else milisecondsDisplay.textContent = miliseconds;
  if (second < 10) secondDisplay.textContent = "0" + second;
  else secondDisplay.textContent = second;
  if (second == 60) {
    secondDisplay.textContent = "00";
    second = 0;
    minutes++;

    if (minutes < 10) minuteDisplay.textContent = "0" + minutes;
    else minuteDisplay.textContent = minutes;
  }
}

imageReset.onclick = () => {
  reset();
};
function reset() {
  clearInterval(milisecondsSayac);
  clearInterval(secondSayac);
  miliseconds = 0;
  second = 0;
  minutes = 0;

  image.src = "../images/start1.png";

  pressDisplay();
}
