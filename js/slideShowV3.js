let count = 1;
const src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
let url;
let mainElement = document.querySelector("div.main > img");
let thumbnailsElement = document.querySelector("div.thumbnails");
const MIN = 1;
const MAX = 19;
let nowPlaying = false;
let timer;

function left() {
  count--;
  if (count < MIN) {
    count = MAX;
    thumbnailsElement.children[MIN-1].classList.remove("selected");
  } else {
    thumbnailsElement.children[count].classList.remove("selected");
  }
  if (count < 10) {
    url = src + "0" + count + ".jpg";
  } else {
    url = src + count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add("selected");
}
function right() {
  count++;
  if (count > MAX) {
    count = MIN;
    thumbnailsElement.children[MAX-1].classList.remove("selected");
  } else {
    thumbnailsElement.children[count-2].classList.remove("selected");
  }
  if (count < 10) {
    url = src + "0" + count + ".jpg";
  } else {
    url = src + count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add("selected");
}

function play() {
  if (!nowPlaying) {
    nowPlaying = true;
    autoPlay();
  }
}
function autoPlay() {
  right();
  timer = setTimeout(function () {
    autoPlay();
  }, 1000);
}
function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}
function reset() {
  stop();
  thumbnailsElement.children[count-1].classList.remove("selected");
  count = MIN;
  url = src + "0" + count + ".jpg";
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add("selected");
}
