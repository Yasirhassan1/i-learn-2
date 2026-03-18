import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./config.js";
import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




