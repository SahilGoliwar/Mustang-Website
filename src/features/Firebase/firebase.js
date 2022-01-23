import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzpFCME7ImNbMV3w2Tsu7w56_RtsaOwi8",
  authDomain: "mustang-project-34bd3.firebaseapp.com",
  projectId: "mustang-project-34bd3",
  storageBucket: "mustang-project-34bd3.appspot.com",
  messagingSenderId: "695618480735",
  appId: "1:695618480735:web:8d9952845ab5abdc6a49ea",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
