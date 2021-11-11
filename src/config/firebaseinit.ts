import firebase from "firebase/app";
import "firebase/messaging";
// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyBaM_YoQA2DbRh7L7xTnNQIbV95KPYr-Nw",
  authDomain: "omniworks-india.firebaseapp.com",
  databaseURL: "https://omniworks-india-default-rtdb.firebaseio.com",
  projectId: "omniworks-india",
  storageBucket: "omniworks-india.appspot.com",
  messagingSenderId: "123223840666",
  appId: "1:123223840666:web:6f18760be4fc4f05a2cc23",
  measurementId: "G-FWH9W8XKWR",
};
export const app = firebase.initializeApp(firebaseConfig);
