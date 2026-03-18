import { db } from "./authFirestore.js";
import { collection, addDoc } from "firebase/firestore";
export async function storeDataInFirestore(document, formData) {
  try {
    const docRef = await addDoc(collection(db, document), formData);
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}