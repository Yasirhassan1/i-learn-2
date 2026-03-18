import {updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth.js";
import { storeDataInFirestore } from "../firestore.js";
const bar = document.getElementById("acutal-bar")
const submitBtn = document.getElementById("submitBtn")
const backBtn = document.getElementById("back-btn")
const loader = document.getElementById("loader")
const btnText = document.getElementById('btnText')

const form1 = document.getElementById("form1")
const form2 = document.getElementById("form2")
const form3 = document.getElementById("form3")
const form4 = document.getElementById("form4")
const form5 = document.getElementById("form5")
const form6 = document.getElementById("form6")

const namee = document.getElementById("name")
const email = document.getElementById("email")

const formLabels = Array.from(document.getElementsByClassName("form-label"))

const formTitle = document.getElementById("form-title")
const eyeBtns = Array.from(document.getElementsByClassName("eye-btn"));
const closeEye = Array.from(document.getElementsByClassName("close-eye"));
const passwordInputs = Array.from(document.getElementsByClassName("password"));
const imgPreview = document.getElementById("imagePreview")
const imgGovt= document.getElementById("imgGovtId")
const profilePicInput = document.getElementById("profile-pic")
const govtIdPicInput = document.getElementById("govtId")
profilePicInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    // Create a temporary URL for the file and set it as the image source
    imgPreview.src = URL.createObjectURL(file);
    imgPreview.classList.remove("hidden")

    imgPreview.onload = function () {
      URL.revokeObjectURL(imgPreview.src);
    }
  }
});

govtIdPicInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    // Create a temporary URL for the file and set it as the image source
    imgGovt.src = URL.createObjectURL(file);
    imgGovt.classList.remove("hidden")

    imgGovt.onload = function () {
      URL.revokeObjectURL(imgGovt.src);
    }
  }
});



eyeBtns.forEach((cur, ind) => {
  cur.addEventListener("click", () => {
    passwordInputs[ind].type = "password";
    cur.classList.remove("block");
    cur.classList.add("hidden");
    closeEye[ind].classList.remove("hidden");
    closeEye[ind].classList.add("block");
  });
});

closeEye.forEach((cur, ind) => {
  cur.addEventListener("click", () => {
    passwordInputs[ind].type = "text";
    cur.classList.remove("block");
    cur.classList.add("hidden");
    eyeBtns[ind].classList.remove("hidden");
    eyeBtns[ind].classList.add("block");
  });
});
let number = 0;
let labelNum = 0;

const forms = [
   {
    form:form1,
    formTitle: "Sign Up",
    statusBar: 10,
    btnTitle: "Next",
   },

    {
    form:form2,
    formTitle: "Sign Up",
    statusBar: 40,
    btnTitle: "Next",
   },

   {
    form:form3,
    formTitle: "Sign Up",
    statusBar: 60,
    btnTitle: "Next",
   },

     {
    form: form4,
    formTitle: "Sign Up",
    statusBar: 75,
    btnTitle: "Next",
   },
    {
    form: form5,
    formTitle: "Sign Up",
    statusBar: 75,
    btnTitle: "Next",
   },

    {
    form: form6,
    formTitle: "Sign Up",
    statusBar: 100,
    btnTitle: "Create Free Account",
   },

]

const formData = {
  uid: "",
  createdAt: "",
    fullName: "",
    email: "",
    dob: "",
    gender: "",
    phoneNo: "",
    address1: "",
    address2: "",
    city: "",
    postCode: null,
    country: "",
    teachingExperience: null,
    highestQualification: "",
    bio: "",
    certification: [],
    cv: "",
    subject: [],
    teachingCertificate: "",
    ageGroup: [],
    profilePic: "",
    govtId: "",
    bds: "",
    dbsIssueDate: "",
    certificateNo: "",
    bdsRequirement: "",
    consent1: false,
    consent2: false,
    consent3: false,

    hourlyRate: null,
    currency: "USD",
  
    password: "",
    confirmPassword: "",

}
let currentStepIndex = 0;
const stepFields = {
    1: ["fullName", "email", "dob", "gender", "phoneNo", "address1", "address2", "city", "postCode", "country"],
    2: ["teachingExperience", "highestQualification", "bio", "certification", "cv", "subject", "teachingCertificate", "ageGroup"],
    3: ["profilePic", "govtId", "bds", "dbsIssueDate", "certificateNo", "bdsRequirement", "consent1", "consent2", "consent3"],
    4: [],
    5: ["hourlyRate", "currency"],
    6: ["password", "confirmPassword"]
}

function scrollY(){
  window.scroll({
    top: -1,
     behavior: "smooth",
  });
}


const validationRules = {
   fullName: {
    validate(v){
        if(!v || v.trim().length == 0){
            return "Full name is required"
        }
        return null
    }
   },
   email: {
    validate(v) {
      if (!v || v.trim().length === 0) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()))
        return "Enter a valid email address.";
      return null;
    }
   },
   dob: {
    validate(v) {
      let currentYear = new Date().getFullYear()
        const birth = new Date(v);
        let userBirthYear = birth.getFullYear();
        let age = Number(currentYear) - Number(userBirthYear)
         if(Number(userBirthYear)>Number(currentYear)){
        return "Invalid Date of Birth"
      }
        if(age<6){
          return "Age must be greater than 6 years"
        }

      if (!v) return "Date of birth is required.";
      return null;
      
    },
   },
   gender: {
    validate(v) {
      if (!v) return "Please select a gender.";
      return null;
    },
   },
   phoneNo: {
    validate(v) {
      if (!v || v.trim().length === 0) return "Phone number is required.";
      return null;
    },
   },

   address1: {
    validate(v){
        if(!v){
            return "Address is required"
        }
        return null
    }
   },

     address2: {
    validate(v){
        if(!v){
            return "Address is required"
        }
        return null
    }
   },

     city: {
    validate(v){
        if(!v){
            return "City is required"
        }
        return null
    }
    

   },

     postCode: {
    validate(v){
        if(!v){
            return "Postcode is required"
        }
        return null
    }
    

   },

     country: {
    validate(v){
        if(!v){
            return "Country is required"
        }
        return null
    }
    
   },

     teachingExperience: {
    validate(v){
        if(!v){
            return "Experience is required"
        }
        return null
    }
    

   },


   highestQualification: {
    validate(v){
        if(!v){
            return "Qualification is required"
        }
        return null
    }
   },

   bio: {
     validate(v){
        if(!v){
            return "Bio is required"
        }
        return null
    }
    
   },

   certification:{
     validate(v){
        if(v.length === 0){
            return "Select atleast one"
        }
        return null
    }
   },

   cv: {
     validate(v){
        if(!v){
            return "cv is required"
        }
        return null
    }
   },
   subject:{
    validate(v){
        if(v.length == 0){
            return "Please select atleast one"
        }
        return null
    }
   },
   teachingCertificate:{
     validate(v){
        if(!v){
            return null;
        }
        
    }
   },
   ageGroup:{
    validate(v){
        if(v.length == 0){
            return "Please select atleast one"
        }
        return null
    }
   },

   profilePic:{
    validate(v){
        if(!v){
            return "Profile picture is required"
        }
        return null
    }
   },
   govtId:{
    validate(v){
        if(!v){
            return "Id is required"
        }
        return null
    }
   },
   bds:{
    validate(v){
        if(!v){
            return "Bds is required"
        }
        return null
    }
   },

dbsIssueDate:{
    validate(v){
        if(!v){
            return "Issue date is required"
        }
        return null
    }
},

certificateNo:{
     validate(v){
        if(!v){
            return "Certificate number is required"
        }
        return null
    }
},

bdsRequirement:{
     validate(v){
        if(!v){
            return "BDS is required"
        }
        return null
    }
},

consent1:{
     validate(v){
        if(!v){
            return "Please check the box"
        }
        return null
    }
},

consent2:{
     validate(v){
        if(!v){
            return "Please check the box"
        }
        return null
    }
},

consent3:{
     validate(v){
        if(!v){
            return "Please check the box"
        }
        return null
    }
},

hourlyRate:{
     validate(v){
        if(!v){
            return "Hourly rate is required"
        }
        return null
    }
},

currency:{
     validate(v){
        if(!v){
            return "Currency is required"
        }
        return null
    }
},

password:{
     validate(v){
        if(!v){
            return "Password is required"
        }
        return null
    }
},

confirmPassword:{
     validate(v){
        if(!v){
            return "confirm password is required"
        }
        if(v !== formData.password){
            return "Password do not match"
        }
        return null
    }
}

}

function getErrorEl(fieldName) {
  
  const input = document.querySelector(
    `[name="${fieldName}"], #${CSS.escape(fieldName)}`,
  );
  if (!input) return null;
  let container = input.closest(
    ".form-1-input-container, .form-3-input-container, .form-4-input-container, .left, .right, label",
  );
  if (!container) container = input.parentElement;
  return container ? container.querySelector("small.error") : null;
}

function showError(fieldName, message) {
  const el = getErrorEl(fieldName);
  if (el) {
    el.textContent = message;
    el.style.color = "red";
  }
}
function clearError(fieldName) {
  const el = getErrorEl(fieldName);
  if (el) {
    el.textContent = "";
  }
}

function validateField(fieldName) {
 if(fieldName == 'country'){
  let countryData = $("#country").countrySelect("getSelectedCountryData");
formData.country = countryData.name;
 }
  const rule = validationRules[fieldName];
  if (!rule) return true; // no rule → always passes

  const error = rule.validate(formData[fieldName]);
  if (error) {
    showError(fieldName, error);
    return false;
  }
  clearError(fieldName);
  return true;
}

function validateStep(step) {
    // console.log(formData)
  const fields = stepFields[step];
  
//  accountName.value = formData.name;
//  formData.fullName = formData.fullName;
namee.value = formData.fullName;
email.value = formData.email;


if(step === 6){

    createTutor(formData.email, formData.password)
}
  if (!fields) return true; 
  let allValid = true;
  for (const field of fields) {
    const valid = validateField(field);
    if (!valid) allValid = false;
  }
  return allValid;
}


function syncInputs() {
  const step1Inputs = document.querySelectorAll(".form-1-input");
  step1Inputs.forEach((input) => {
    const handler = () => {
      formData[input.name] = input.value;
      validateField(input.name);
    };
    input.addEventListener("input", handler);
    input.addEventListener("change", handler); // catches <select>
  });

   const step2Inputs = document.querySelectorAll(".form-2-input");
  step2Inputs.forEach((input) => {
    const handler = () => {
      formData[input.name] = input.value;
      validateField(input.name);
    };
    input.addEventListener("input", handler);
    input.addEventListener("change", handler); // catches <select>
  });

     const step3Inputs = document.querySelectorAll(".form-3-input");
  step3Inputs.forEach((input) => {
    const handler = () => {
      formData[input.name] = input.value;
      validateField(input.name);
    };
    input.addEventListener("input", handler);
    input.addEventListener("change", handler); // catches <select>
  });

   const step5Inputs = document.querySelectorAll(".form-5-input");
  step5Inputs.forEach((input) => {
    const handler = () => {
      formData[input.name] = input.value;
      validateField(input.name);
    };
    input.addEventListener("input", handler);
    input.addEventListener("change", handler); // catches <select>
  });


     const step6Inputs = document.querySelectorAll(".form-6-input");
  step6Inputs.forEach((input) => {
    const handler = () => {
      formData[input.name] = input.value;
      validateField(input.name);
    };
    input.addEventListener("input", handler);
    input.addEventListener("change", handler); // catches <select>
  });

}

syncInputs()

function increaseBar(){
    bar.classList.remove(`w-[${forms[currentStepIndex-1].statusBar}%]`)
    bar.classList.add(`w-[${forms[currentStepIndex].statusBar}%]`)
}
function decreaseBar(){
    bar.classList.remove(`w-[${forms[currentStepIndex+1].statusBar}%]`)
    bar.classList.add(`w-[${forms[currentStepIndex].statusBar}%]`)
}
function nextLable(){
    if(labelNum<formLabels.length-1){
        labelNum+=1
        formLabels[labelNum].classList.add("text-(--primaryColor)")
        formLabels[labelNum-1].classList.remove("text-(--primaryColor)")
    }
}


function previousLable(){
    if(labelNum>0){
        labelNum-=1
        formLabels[labelNum].classList.add("text-(--primaryColor)")
        formLabels[labelNum+1].classList.remove("text-(--primaryColor)")
    }
}


function loadNextForm(){
  scrollY()
     const stepNum = currentStepIndex + 1;
     if(!validateStep(stepNum)){
        return;
     }
     
  if(currentStepIndex<forms.length-1){
  currentStepIndex += 1;
  forms[currentStepIndex].form.classList.add("flex")
  forms[currentStepIndex].form.classList.remove("hidden")
  btnText.innerText = forms[currentStepIndex].btnTitle;
  formTitle.innerText = forms[currentStepIndex].formTitle
  forms[currentStepIndex-1].form.classList.add("hidden")
  forms[currentStepIndex-1].form.classList.remove("flex")
  if(currentStepIndex !== 4){
  nextLable()
  }
  increaseBar()
  }
}

function loadPreviousForm(){
 if(currentStepIndex>0){
  currentStepIndex -= 1;
  forms[currentStepIndex].form.classList.add("flex")
  forms[currentStepIndex].form.classList.remove("hidden")
  submitBtn.innerText = forms[currentStepIndex].btnTitle;
  formTitle.innerText = forms[currentStepIndex].formTitle
  forms[currentStepIndex+1].form.classList.add("hidden")
  forms[currentStepIndex+1].form.classList.remove("flex")
  if(currentStepIndex !== 3){
  previousLable()
  }
  decreaseBar()

  }
}


submitBtn.addEventListener("click", ()=>{
  
  loadNextForm();

})

backBtn.addEventListener('click', ()=>{
    loadPreviousForm()
})

function displayLoader(){
loader.classList.add("block");
loader.classList.remove('hidden');
}
function hideLoader(){
  loader.classList.add("hidden");
  loader.classList.remove('block');
}


function createTutor(email, password){
    displayLoader();
  createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    const user = userCredential.user;
     formData.uid = user.uid;
      formData.createdAt = new Date();
      await updateProfile(user, {
                  displayName: formData.name,
                });
    
          if(user){
             localStorage.setItem("userName", user.displayName)
          }
    console.log(formData)
    if(await storeDataInFirestore("tutors", formData)){
      alert("Tutor data stored successfully")
      window.location = "/index.html"
      hideLoader();
    }
    else{
      alert("something went wrong")
    }
    

  })
  .catch((error) => {
    hideLoader();
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}


document.addEventListener("DOMContentLoaded", () => {
  $("#country").countrySelect();
});

document.getElementById("country").addEventListener("input", ()=>{
let countryData = $("#country").countrySelect("getSelectedCountryData");
formData.country = countryData.name;
})

import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const phoneInput = document.querySelector("#phonee");

if (phoneInput) {
  intlTelInput(phoneInput, {
    loadUtils: () =>
      import("intl-tel-input/build/js/utils.js"),
  });
}






