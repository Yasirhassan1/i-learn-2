import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../auth.js";
const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault()
 
  const email = String(form.elements.email.value);
   console.log(auth)
  console.log(email)
   await sendPasswordResetEmail(auth, email)
  .then(() => {
   alert("Email Sent successfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });



});
