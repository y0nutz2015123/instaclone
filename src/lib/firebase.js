import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

export const firebase = Firebase.initializeApp(config);
export const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase); // We needed this to run ONLY once to create a dynamic database
