//start-stop resimlerin tiklandiginda degismesi
const image = document.querySelector("img.start-stop");
const milisecondsDisplay = document.querySelector("span.miliseconds");
const secondDisplay = document.querySelector("span.seconds");
const minuteDisplay = document.querySelector("span.minutes");

console.log(milisecondsDisplay);
let miliseconds = 0;
let second = 0;
let minutes = 0;

image.addEventListener("click", () => {
  if (image.src == "http://127.0.0.1:5500/images/start1.png") {
    image.src = "../images/pause.png";
    const milisecondsSayac = setInterval(() => {
      miliseconds++;
      if (miliseconds == 100) miliseconds = 00;
      milisecondsDisplay.textContent = miliseconds;
    }, 10);
    const secondSayac = setInterval(() => {
      second++;
      if (second < 10) secondDisplay.textContent = "0" + second;
      else secondDisplay.textContent = second;
      if (second == 60) {
        secondDisplay.textContent = "00";
        second = 0;
        minutes++;
        if (minutes < 10) minuteDisplay.textContent = "0" + minutes;
        else minuteDisplay.textContent = minutes;
      }
    }, 1000);
  } else {
    image.src = "http://127.0.0.1:5500/images/start1.png";
  }
});
