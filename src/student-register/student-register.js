import { firebaseConfig } from "../config.js";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const consent1 = document.getElementById("consent11")
const consent2 = document.getElementById("consent22")
const consent3 = document.getElementById("consent33")
const accountName = document.getElementById("account-name")
const loader = document.getElementById("loader")



const accessibilityBtns = [
  { id: 1, title: "BSL", borderColor: "#F8201D", selected: false },
  { id: 2, title: "Braille", borderColor: "#FF9F01", selected: false },
  { id: 3, title: "Dyslexia Font", borderColor: "#A168BE", selected: false },
  { id: 4, title: "Autism Friendly", borderColor: "#287C74", selected: false },
];

const learningPreferenceBtns = [
  { id: 5, title: "Visual", borderColor: "#3685C7", selected: false },
  { id: 6, title: "Auditory", borderColor: "#FF9F01", selected: false },
  { id: 7, title: "Kinesthetic", borderColor: "#A168BE", selected: false },
];
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const profilePicInput = document.getElementById("profile-pic")
const idCardPicInput = document.getElementById("id-card")
const imgPreview = document.getElementById("imagePreview")
const idCardPreview = document.getElementById("id-card-img")

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

idCardPicInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    idCardPreview.src = URL.createObjectURL(file);
    idCardPreview.classList.remove("hidden")
    idCardPreview.onload = function () {
      URL.revokeObjectURL(idCardPreview.src)
    }
  }
})

let formData = {
  name: "",
  dob: "",
  keystage: "",
  gender: "",
  country: "",
  phoneNo: "",
  accessibilityNeeds: [],
  learningPreferences: [],
  otp: "123456",
  "profile-pic": null,
  "id-card": null,
  "card-no": "",
  card: "",
  "expire-date": "",
  cvv: "",
  consent1: false,
  consent2: false,
  consent3: false,
  email: "",
  accountName: "",
  password: "",
  "confirm-password": "",
};
function scrollY() {
  window.scroll({
    top: -1,
    behavior: "smooth",
  });
}

// const country = document.getElementById("country")
// country.addEventListener("input", (e)=>{
// formData.country = $("#country").countrySelect("getSelectedCountryData").name;
// alert(formData.country)
// })

// formData.country = $("#country").countrySelect("getSelectedCountryData").name;
// alert(formData)

const stepFields = {
  1: ["name", "dob", "keystage", "gender", "country", "phoneNo", "accessibility", "learning"],
  3: ["profile-pic", "id-card", "card-no", "card", "expire-date", "cvv", "consent1", "consent2", "consent3"],
  4: ["email", "accountName", "password", "confirm-password"],
};




consent1.addEventListener("click", () => {
  formData.consent1 = consent1.checked;
  validateField("consent1")
})

consent2.addEventListener("click", () => {
  formData.consent2 = consent2.checked;
  validateField("consent2")

})
consent3.addEventListener("click", () => {
  formData.consent3 = consent3.checked;
  validateField("consent3")

})


const eyeBtns = Array.from(document.getElementsByClassName("eye-btn"));
const closeEye = Array.from(document.getElementsByClassName("close-eye"));
const passwordInputs = Array.from(document.getElementsByClassName("password"));

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

const validationRules = {
  name: {
    validate(v) {
      if (!v || v.trim().length === 0) return "Full name is required.";
      if (v.trim().length < 2) return "Name must be at least 2 characters.";
      return null;
    },
  },
  dob: {
    validate(v) {
      let currentYear = new Date().getFullYear()
      const birth = new Date(v);
      let userBirthYear = birth.getFullYear();
      let age = Number(currentYear) - Number(userBirthYear)
      if (Number(userBirthYear) > Number(currentYear)) {
        return "Invalid Date of Birth"
      }
      if (age < 6) {
        return "Age must be greater than 6 years"
      }



      if (!v) return "Date of birth is required.";
      return null;

    },
  },
  keystage: {
    validate(v) {
      if (!v) return "Please select a key stage.";
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
  accessibility: {
    validate(v) {

      let atLeastOneSelected = false;
      accessibilityBtns.forEach((cur) => {
        if (cur.selected) {
          atLeastOneSelected = true;
        }
      })
      if (atLeastOneSelected) {
        return null;
      }
      else {
        return "Please select atleast one";
      }
    }
  },
  learning: {
    validate(v) {
      let atLeastOneSelected = false;
      learningPreferenceBtns.forEach((cur) => {
        if (cur.selected) {
          atLeastOneSelected = true;
        }
      })
      if (atLeastOneSelected) {
        return null;
      }
      else {
        return "Please select atleast one";
      }
    }
  },

  "profile-pic": {
    validate(v) {
      if (!v) return "Please upload a profile picture.";
      return null;
    },
  },
  "id-card": {
    validate(v) {
      if (!v) return "Please upload an ID / proof document.";
      return null;
    },
  },
  "card-no": {
    validate(v) {
      if (!v || v.trim().length === 0) return "Card number is required.";
      // const digits = v.replaceAll(/\s/g, "");
      // if (!/^\d{13,19}$/.test(digits)) return "Enter a valid card number.";
      return null;
    },
  },
  card: {
    validate(v) {
      if (!v || v.trim().length === 0) return "Name on card is required.";
      return null;
    },
  },
  "expire-date": {
    validate(v) {
      if (!v || v.trim().length === 0) return "Expiry date is required.";
      return null;
    },
  },
  cvv: {
    validate(v) {
      if (!v || v.trim().length === 0) return "CVV is required.";
      if (!/^\d{3,4}$/.test(v.trim())) return "CVV must be 3 or 4 digits.";
      return null;
    },
  },
  consent1: {
    validate(v) {
      // const v = getConset1Value()
      return formData.consent1 ? null : "Please check the box";
    }
  },

  consent2: {
    validate(v) {
      return formData.consent2 ? null : "Please check the box";
    }
  },
  consent3: {
    validate(v) {
      return formData.consent3 ? null : "Please check the box";
    }
  },
  email: {
    validate(v) {
      if (!v || v.trim().length === 0) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()))
        return "Enter a valid email address.";
      return null;
    },
  },
  accountName: {
    validate(v) {
      if (!v || v.trim().length === 0) return "Name is required.";
      return null;
    },
  },
  password: {
    validate(v) {
      if (!v || v.length === 0) return "Password is required.";
      if (v.length < 8) return "Password must be at least 8 characters.";
      return null;
    },
  },
  "confirm-password": {
    validate(v) {
      if (!v || v.length === 0) return "Please confirm your password.";
      if (v !== formData.password) return "Passwords do not match.";
      return null;
    },
  },
};



function getErrorEl(fieldName) {
  // Try by name attribute first
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
  const fields = stepFields[step];
  accountName.value = formData.name;
  formData.accountName = formData.name;
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
    input.addEventListener("change", handler);
  });

  const step3Inputs = document.querySelectorAll(".form-3-input");
  step3Inputs.forEach((input) => {
    if (input.type === "file") {
      input.addEventListener("change", () => {
        formData[input.name] = input.files[0].name || null;
        validateField(input.name);
      });
    } else {
      const handler = () => {
        formData[input.name] = input.value;
        validateField(input.name);
      };
      input.addEventListener("input", handler);
      input.addEventListener("change", handler);
    }
  });


  const step4Inputs = document.querySelectorAll(".form-4-input");
  step4Inputs.forEach((input) => {
    const fieldKey = input.name === "name" ? "accountName" : input.name;

    const handler = () => {
      formData[fieldKey] = input.value;
      validateField(fieldKey);
    };
    input.addEventListener("input", handler);
    input.addEventListener("change", handler);
  });
}

const bar = document.getElementById("acutal-bar");
const backBtn = document.getElementById("back-btn");
const formTitle = document.getElementById("form-title");
const expireContainer = document.getElementById("expire-container");
const time = document.getElementById("time");
function runTimmer() {
  let totalTime = 20;
  const id = setInterval(() => {
    time.innerText = totalTime;

    if (totalTime === 0) {
      clearInterval(id);

    }
    totalTime -= 1;
  }, 1000);
}
const form2Btn = document.getElementById("form-2-btn");

// OTP inputs
const inputsCollections = document.getElementsByClassName("input");
const inputsArr = Array.from(inputsCollections);



const accessBoxCollection = document.getElementsByClassName("access-box");
const learningBoxCollection = document.getElementsByClassName("learning-box");
const accessBoxes = Array.from(accessBoxCollection);
const learningBoxes = Array.from(learningBoxCollection);

const formLabels = Array.from(document.getElementsByClassName("form-label"));

const otp = 123456;
inputsArr[0].focus();
const formSteps = Array.from(document.querySelectorAll(".form-step"));

let currentStepIndex = 0;
let labelNum = 0;

const statusBarWidths = ["30%", "50%", "75%", "100%"];

const formTitles = ["Sign Up", "Verify OTP", "Sign Up", "Sign Up"];

function updateBar(index) {
  bar.style.width = statusBarWidths[index] || "100%";
}

function nextLabel() {
  if (labelNum < formLabels.length - 1) {
    formLabels[labelNum].classList.remove("text-(--primaryColor)");
    labelNum += 1;
    formLabels[labelNum].classList.add("text-(--primaryColor)");
  }
}

function previousLabel() {
  if (labelNum > 0) {
    formLabels[labelNum].classList.remove("text-(--primaryColor)");
    labelNum -= 1;
    formLabels[labelNum].classList.add("text-(--primaryColor)");
  }
}

function getNextStepBtn() {
  const currentStep = formSteps[currentStepIndex];
  return currentStep ? currentStep.querySelector(".next-btn") : null;
}

function loadNextForm() {

  scrollY()
  const stepNum = currentStepIndex + 1;

  if (stepNum !== 2 && !validateStep(stepNum)) {

    return;
  }
  if (stepNum == 1) {
    runTimmer()

  }
  if (stepNum == 4) {
    createStudent(formData.email, formData.password)

  }

  if (currentStepIndex < formSteps.length - 1) {
    formSteps[currentStepIndex].classList.add("hidden");
    formSteps[currentStepIndex].classList.remove("flex");
    currentStepIndex += 1;
    formSteps[currentStepIndex].classList.remove("hidden");
    formSteps[currentStepIndex].classList.add("flex");


    formTitle.textContent = formTitles[currentStepIndex];
    updateBar(currentStepIndex);


    if (currentStepIndex !== 1) nextLabel();
  }
}

function loadPreviousForm() {
  if (currentStepIndex > 0) {
    formSteps[currentStepIndex].classList.add("hidden");
    formSteps[currentStepIndex].classList.remove("flex");
    currentStepIndex -= 1;
    formSteps[currentStepIndex].classList.remove("hidden");
    formSteps[currentStepIndex].classList.add("flex");
    formTitle.textContent = formTitles[currentStepIndex];
    updateBar(currentStepIndex);

    if (currentStepIndex !== 1) previousLabel();
  }
}

formSteps.forEach((step) => {
  const btn = step.querySelector(".next-btn");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      loadNextForm();
    });
  }
});

backBtn.addEventListener("click", () => {
  loadPreviousForm();
});

const span = document.createElement("span");
span.innerText = "The Code you entered is incorrect. Please Try again";
span.classList.add("text-red-400");

function validateOtp(inputs) {
  return Number(inputs.join("")) === otp;
}

function makeInvalidInputs() {
  for (const child of inputsArr) {
    child.classList.add("border-red-400");
    child.classList.remove("border-(--primaryColor)");
  }
  if (expireContainer && !expireContainer.previousSibling?.isSameNode?.(span)) {
    expireContainer.before(span);
  }
}

if (form2Btn) {
  form2Btn.addEventListener("click", (event) => {
    event.preventDefault();
    const form2 = formSteps[1];
    if (!form2) return;

    const vals = [
      "input1",
      "input2",
      "input3",
      "input4",
      "input5",
      "input6",
    ].map((name) => form2.querySelector(`[name="${name}"]`)?.value || "");

    if (validateOtp(vals)) {
      if (currentStepIndex < formSteps.length - 1) {
        formSteps[currentStepIndex].classList.add("hidden");
        formSteps[currentStepIndex].classList.remove("flex");
        currentStepIndex += 1;
        formSteps[currentStepIndex].classList.remove("hidden");
        formSteps[currentStepIndex].classList.add("flex");
        formTitle.textContent = formTitles[currentStepIndex];
        updateBar(currentStepIndex);
        nextLabel();
      }
    } else {
      makeInvalidInputs();
      inputsArr.forEach((inp) => {
        inp.value = "";
      });
      if (inputsArr[0]) inputsArr[0].focus();
    }
  });
}


inputsArr.forEach((input, ind) => {
  input.addEventListener("input", (event) => {

    if (!/^[0-9]$/.test(event.target.value)) {
      input.value = "";
    } else if (input.value.length === 1 && ind < inputsArr.length - 1) {
      inputsArr[ind + 1].focus();
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      const form2 = formSteps[1];
      if (!form2) return;

      const vals = [
        "input1",
        "input2",
        "input3",
        "input4",
        "input5",
        "input6",
      ].map((name) => form2.querySelector(`[name="${name}"]`)?.value || "");

      if (validateOtp(vals)) {
        if (currentStepIndex < formSteps.length - 1) {
          formSteps[currentStepIndex].classList.add("hidden");
          formSteps[currentStepIndex].classList.remove("flex");
          currentStepIndex += 1;
          formSteps[currentStepIndex].classList.remove("hidden");
          formSteps[currentStepIndex].classList.add("flex");
          formTitle.textContent = formTitles[currentStepIndex];
          updateBar(currentStepIndex);
          nextLabel();
        }
      } else {
        makeInvalidInputs();
        inputsArr.forEach((inp) => {
          inp.value = "";
        });
        if (inputsArr[0]) inputsArr[0].focus();
      }
    }
    if (event.key === "Backspace") {
      input.value = "";
      if (ind > 0) inputsArr[ind - 1].focus();
    } else if (event.key === "ArrowRight" && ind < inputsArr.length - 1) {
      inputsArr[ind + 1].focus();
    } else if (event.key === "ArrowLeft" && ind > 0) {
      inputsArr[ind - 1].focus();
    }

  });
});



accessBoxes.forEach((box, ind) => {
  box.addEventListener("click", () => {
    if (accessibilityBtns[ind].selected) {
      box.style.outline = "none";
      accessibilityBtns[ind].selected = false;
      formData.accessibilityNeeds = formData.accessibilityNeeds.filter(
        (title) => title !== accessibilityBtns[ind].title,
      );
      validateField("accessibility")
    } else {
      box.style.outline = `2px solid ${accessibilityBtns[ind].borderColor}`;
      accessibilityBtns[ind].selected = true;
      formData.accessibilityNeeds.push(accessibilityBtns[ind].title);
      validateField("accessibility")
    }
  });
});

learningBoxes.forEach((box, ind) => {
  box.addEventListener("click", () => {
    if (learningPreferenceBtns[ind].selected) {
      box.style.outline = "none";
      learningPreferenceBtns[ind].selected = false;
      formData.learningPreferences = formData.learningPreferences.filter(
        (title) => title !== learningPreferenceBtns[ind].title,
      );
      validateField("learning")
    } else {
      box.style.outline = `2px solid ${learningPreferenceBtns[ind].borderColor}`;
      learningPreferenceBtns[ind].selected = true;
      formData.learningPreferences.push(learningPreferenceBtns[ind].title);
      console.log(formData.learningPreferences)
      validateField("learning")
    }
  });
});

async function storeStudentDataInFirestore() {
  try {
    const docRef = await addDoc(collection(db, "students"), formData);
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}
function displayLoader() {
  loader.classList.add("block");
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add("hidden");
  loader.classList.remove('block');
}
function createStudent(email, password) {
  displayLoader();
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const keys = Object.keys(formData);
      const lastKey = keys[keys.length - 1];
      delete formData[lastKey];
      console.log(formData)
      if (await storeStudentDataInFirestore()) {
        alert("Student data stored successfully")
        window.location = "/index.html"
        hideLoader();
      }
      else {
        alert("something went wrong")
      }


    })
    .catch((error) => {
      hideLoader();
      const errorMessage = error.message;
      console.log(errorMessage)
    });
}

syncInputs();



// $("#country").countrySelect();
// let countryData = $("#country").countrySelect("getSelectedCountryData");
// formData.country = countryData.name;

document.addEventListener("DOMContentLoaded", () => {
  $("#country").countrySelect();
});

import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const phoneInput = document.querySelector("#phone");

if (phoneInput) {
  intlTelInput(phoneInput, {
    loadUtils: () =>
      import("intl-tel-input/build/js/utils.js"),
  });
}
