import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAXf4OifNJDmp6ZgoQ7Dxu5nM9lXlNKbMs",
  authDomain: "instaclone-abd5b.firebaseapp.com",
  projectId: "instaclone-abd5b",
  storageBucket: "instaclone-abd5b.appspot.com",
  messagingSenderId: "275501253765",
  appId: "1:275501253765:web:e15b7b25e5e13e790d15ec"
};

export const firebase = Firebase.initializeApp(config);
export const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase); // We needed this to run ONLY once to create a dynamic database
