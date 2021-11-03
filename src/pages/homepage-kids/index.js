import startup from "./capture-photo.js";
import getEmotions from "./callApi.js";
import generateEquation from "./gameApp.js";

let encodedImage = null;

let nbOfClick = 0;

const tryAgainAudio = document.getElementById("try_again_audio");

let answer = generateEquation();

const takePicture = () => {
  startup().then((res) => {
    encodedImage = res;
    getEmotions(encodedImage).then((emotions) => {
      console.log(emotions);
    });
  }); 
}

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", (event) => {
    if (nbOfClick === 0) {
      takePicture();
    }
    nbOfClick ++;

    if (event.target.textContent == answer) {
      answer = generateEquation();
    } else {
      tryAgainAudio.play();
    }
  });
});

const logoutButtonKid = document.getElementById('logout-kid');

logoutButtonKid.addEventListener('click', () => {
  console.log("try to logout...");
  firebase.auth().signOut();
  window.location.href = "/src/pages/login/login.html";
})