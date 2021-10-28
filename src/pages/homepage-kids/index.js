import startup from './capture-photo.js';

let encodedImage = null;

startup().then(res => {
    encodedImage = res;
    console.log(res);
});
