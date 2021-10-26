// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import "initApp";
import uiConfig from "./authConfig";

const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui-auth-container", uiConfig);
