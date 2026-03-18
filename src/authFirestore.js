import { getFirestore} from "firebase/firestore";
import { firebaseConfig } from "./config.js";
import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);