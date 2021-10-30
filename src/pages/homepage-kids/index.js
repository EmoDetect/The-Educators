import startup from "./capture-photo.js";
import getEmotions from "./callApi.js";

let encodedImage = null;

startup().then((res) => {
  encodedImage = res;
  getEmotions(encodedImage).then((emotions) => {
    console.log(emotions);
  });
}); 

export default encodedImage;
