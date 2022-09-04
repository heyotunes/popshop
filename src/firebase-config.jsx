import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const Config = {
    apiKey: "AIzaSyAggw3HVHotKj86Tm68D0kyaexyf904f90",
    authDomain: "popshop-66904.firebaseapp.com",
    projectId: "popshop-66904",
    storageBucket: "popshop-66904.appspot.com",
    messagingSenderId: "380665297172",
    appId: "1:380665297172:web:27181c35e78c5cba252a01"
  };
  const app = initializeApp(Config);

export const db = getFirestore(app);

