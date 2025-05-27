const frHour = document.querySelector("[frHour]");
const frMinute = document.querySelector("[frMinute]");
const ntBox = document.querySelector("[ntBox]");
const ntText = document.querySelector("[ntText]");
const ntBtn = document.querySelector("[ntBtn]");

let frHours = 1;
let frMinutes = 0;
let frTimer = setInterval(() => {
  frMinutes--;
  if (frMinutes < 0) {
    frHours--;
    frMinutes = 59;
  } else if (frMinutes === 30) {
    console.log("bruh");
    ntBox.style.transform = "translate(-50%, 0px)";
  } else if (frHours <= 0 && frMinutes <= 0) {
    clearInterval(frTimer);
    frHours = 0;
    frMinutes = 0;
    ntText.textContent = "Час вийшов! Спробуйте в інший раз";
    ntBtn.disabled = true;
    ntBtn.style.backgroundColor = "#7574794d";
    ntBtn.style.border = "none";
    ntBtn.style.cursor = "default";
  }
  frHour.textContent = frHours < 10 ? "0" + frHours : frHours;
  frMinute.textContent = frMinutes < 10 ? "0" + frMinutes : frMinutes;
}, 60000);

const bmSec = document.querySelector("[bmSec]");
const bmMillisec = document.querySelector("[bmMillisec]");
const bmStart = document.querySelector("[bmStart]");
const bmStop = document.querySelector("[bmStop]");
const bmBox = document.querySelector("[bmBox]");


let bmTimer;
bmStart.addEventListener("click", () => {
  let bmSeconds = 30;
  let bmMilliseconds = 0;
  bmStart.disabled = true;
  bmStop.disabled = true;
  bmStop.style.backgroundColor = "#7574794d";
  bmStop.style.border = "none";
  bmStop.style.cursor = "default";
  bmTimer = setInterval(() => {
    bmMilliseconds--;
    if (bmMilliseconds < 0) {
      bmSeconds--;
      bmMilliseconds = 99;
    } else if (bmSeconds === 10) {
      bmBox.classList.add("shake");
      bmStop.disabled = false;
      bmStop.style.backgroundColor = "cornsilk";
      bmStop.style.border = "1px solid #212121";
      bmStop.style.cursor = "pointer";
    } else if (bmSeconds <= 0 && bmMilliseconds <= 0) {
      clearInterval(bmTimer);
      bmSeconds = 0;
      bmMilliseconds = 0;
      bmStart.disabled = false;
      bmBox.classList.remove("shake");
    }
    bmSec.textContent = bmSeconds < 10 ? "0" + bmSeconds : bmSeconds;
    bmMillisec.textContent = bmMilliseconds < 10 ? "0" + bmMilliseconds : bmMilliseconds;
  }, 10);
});

bmStop.addEventListener("click", () => {
  clearInterval(bmTimer);
  let bmSeconds = 30;
  let bmMilliseconds = 0;
  bmBox.classList.remove("shake");
  bmSec.textContent = bmSeconds < 10 ? "0" + bmSeconds : bmSeconds;
  bmMillisec.textContent = bmMilliseconds < 10 ? "0" + bmMilliseconds : bmMilliseconds;
});
