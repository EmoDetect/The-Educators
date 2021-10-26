import firebase from "firebase/app";
import "firebase/auth";

firebase.auth().onAuthStateChanged(
  function (user) {
    if (user) {
      // User is signed in.
    } else {
      window.location.assign("/pages/auth/auth.html");
    }
  },
  function (error) {
    console.log(error);
  }
);
