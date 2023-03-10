import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAmJvRfhku9u2yryGf1I_Y0Qr04EGxcXE",
  authDomain: "otton-app.firebaseapp.com",
  projectId: "otton-app",
  storageBucket: "otton-app.appspot.com",
  messagingSenderId: "880119325683",
  appId: "1:880119325683:web:db93b1c7d70a3328cfa886",
  measurementId: "G-BGMKMNHLPB",
  databaseURL: "https://otton-app-default-rtdb.firebaseio.com/",

};

export const app = initializeApp(firebaseConfig);
