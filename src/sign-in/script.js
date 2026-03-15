// import { users } from "../users.js";

const form = document.getElementById("form");
const eyeBtn = document.getElementById("eye-btn");
const passwordInput = document.getElementById("password");
const closeEye = document.getElementById("close-eye");

// function searchUser(email, password) {
//   const u = users.find(
//     (cur) => cur.email === email && cur.password === password,
//   );
//   return u;
// }

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

form.addEventListener("submit", (event) => {
  const email = String(form.elements.email.value);
  const password = String(form.elements.password.value);
  const user = searchUser(email, password);

  if (user) {
    form.action = "/index.html";
  } else {
    alert("Invalid email or password");
    event.preventDefault();
  }
});
