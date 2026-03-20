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
const email = document.getElementById("email")
const password = document.getElementById("password")


const formData = {
  email: "",
  password: ""
}

const validationRules = {
  "email": {
    validation(v){
      if(!v){
        return "Email is required"
      }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()))
        return "Enter a valid email address";
      return null
    }
  },
  "password":{
    validation(v){
      if(!v){
        return "Password is required"
      }
      if(v.length <8){
        return "Password must be at least 8 characters"
      }
      return null
    }
  }
}

function isAllInputFieldsValid(){
 let isAllValid = true;
  for(const field of Object.keys(formData)){
    if(!validateField(field)){
       isAllValid = false
    }
  }

  return isAllValid;
}

function waitFor(ms){
setTimeout(()=>{
 hideLoader()
 submitBtn.disabled = false;
submitBtn.style.backgroundColor = "#287C74"
  }, ms)
}
form.addEventListener("submit", async (event) => {
  event.preventDefault()
  submitBtn.disabled = true;

  const isAllValid = isAllInputFieldsValid()
 if(!isAllValid){
  return 
 }
  submitBtn.style.backgroundColor = "#72a8a3"
  displayLoader()
  const email = String(form.elements.email.value);
  const password = String(form.elements.password.value);

  if(await signIn(email, password)){ 
    window.location = "/index.html";

}
   else {
   
    alert("Invalid email or password");
  }

 waitFor(2000)

});



function getErrorEl(fieldName) {
  // Try by name attribute first
  const input = document.querySelector(
    `[name="${fieldName}"], #${CSS.escape(fieldName)}`,
  );
  if (!input) return null;
  let container = input.closest(
    ".form-1-input-container, .left, .right, label",
  );
  if (!container) container = input.parentElement;
  return container ? container.querySelector("small.error") : null;
}

function validateField(name){
const v = validationRules[name].validation(formData[name])
 const e =  getErrorEl(name)
if(v){
  e.innerText = v;
  return false;
}
else{
  e.innerText = ""
  return true
  
}
 
}


email.addEventListener("input", (e)=>{
formData.email = String(e.target.value);
validateField(email.name)
})
password.addEventListener("input", (e)=>{
formData.password = String(e.target.value);
validateField(password.name)
})


async function signIn(email, password){
    let signin = false;
    try{
       const userCredentail =  await signInWithEmailAndPassword(auth, email, password)
       const user = userCredentail.user;
       localStorage.setItem("userName", user.displayName)
      signin = true;
    }
    catch(err){
     const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorMessage)
    console.log(errorCode)
    }

      return signin;
 
}