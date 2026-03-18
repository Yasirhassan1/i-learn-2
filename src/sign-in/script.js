import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth.js";

const loader = document.getElementById("loader")
function displayLoader() {
  loader.classList.add("block");
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add("hidden");
  loader.classList.remove('block');
}
const form = document.getElementById("form");
const eyeBtn = document.getElementById("eye-btn");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const closeEye = document.getElementById("close-eye");

eyeBtn.addEventListener("click", () => {
  passwordInput.type = "password";
  eyeBtn.classList.add("hidden");
  closeEye.classList.remove("hidden");
});

closeEye.addEventListener("click", () => {
  passwordInput.type = "text";
  closeEye.classList.add("hidden");
  eyeBtn.classList.remove("hidden");
});
let prev = false;
form.addEventListener("submit", async (event) => {
  event.preventDefault()
  submitBtn.disabled = true;
 if(!prev){
  displayLoader()
  
  const email = String(form.elements.email.value);
  const password = String(form.elements.password.value);
  
  if(await signIn(email, password)){
    hideLoader()
       submitBtn.disabled = false
     window.location = "/index.html";

}
   else {
    hideLoader()
     submitBtn.disabled = false
    alert("Invalid email or password");
    // event.preventDefault();
  }
}
  prev = submitBtn.disabled
});



async function signIn(email, password) {
  let signin = false;
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem("userName", user.displayName)
    signin = true;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    console.log(errorCode)


  });

  return signin;
}