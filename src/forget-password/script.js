// import { users } from "../users.js";
const form = document.getElementById("form");
function searchEmail(email) {
  const e = users.find((cur, ind) => cur.email === email);
  return e;
}
form.addEventListener("submit", (event) => {
  const email = String(form.elements.email.value);
  const isEmail = searchEmail(email);

  if (isEmail) {
    form.action = "/otp.html";
  } else {
    alert("Email not Exist");
    event.preventDefault();
  }
});
