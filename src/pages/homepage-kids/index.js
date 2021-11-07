import startup from './capture-photo.js';
import getEmotions from './callApi.js';
import generateEquation from './gameApp.js';

let encodedImage = null;

let nbOfClick = 0;

const tryAgainAudio = document.getElementById('try_again_audio');

let answer = generateEquation();

const takePicture = () => {
    startup().then((res) => {
        encodedImage = res;
        getEmotions(encodedImage).then((emo) => {
            saveEmotionDb(emo);
        });
    });
};

document.querySelectorAll('.option').forEach((option) => {
    option.addEventListener('click', (event) => {
        if (nbOfClick === 0) {
            takePicture();
        }
        nbOfClick++;

        if (event.target.textContent == answer) {
            answer = generateEquation();
        } else {
            tryAgainAudio.play();
        }
    });
});

const logoutButtonKid = document.getElementById('logout-kid');

logoutButtonKid.addEventListener('click', (e) => {
    firebase.auth().signOut();

    window.location.href = '/src/pages/login/login.html';
});

const localStorageApiKey =
    'firebase:authUser:AIzaSyBt8tU1vFP5Y68gkLd5_ODlIybTtE7Iqnc:[DEFAULT]';

const localStorageValue = JSON.parse(localStorage.getItem(localStorageApiKey));
const userID = localStorageValue.uid;

function saveEmotionDb(emotions) {
    console.log('wokring');
    db.collection('kidEmotions').doc(userID).set({
        emotion: emotions
    });
}
