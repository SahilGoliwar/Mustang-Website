import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwS-eoU_bTYKakO129s7I-IuXkAvFg20Q",
  authDomain: "mustang-project-1336e.firebaseapp.com",
  projectId: "mustang-project-1336e",
  storageBucket: "mustang-project-1336e.appspot.com",
  messagingSenderId: "1036913193222",
  appId: "1:1036913193222:web:73737e20ed4b756c85ee87",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
