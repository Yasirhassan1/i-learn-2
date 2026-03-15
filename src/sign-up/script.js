const btns = document.getElementsByClassName("btn");
const nextBtn = document.getElementById("nextBtn");
const form = document.getElementById("form")
const btnsArr = Array.from(btns);
const btnsContent = [
  {
    id: 1,
    borderColor: "#F1393A",
    selected: false,
  },

  {
    id: 2,
    borderColor: "#FF9F01",
    selected: false,
  },

  {
    id: 3,
    borderColor: "#A168BE",
    selected: false,
  },
];
let prev = null;
let currentChoice  = null;
function selectOption(btn, index) {
  if (prev != null) {
    btnsArr[prev].style.outline = "0px";
     btnsContent[prev].selected = false;
  }
  btn.style.outline = `2px solid ${btnsContent[index].borderColor}`;
  btnsContent[index].selected = true;
  currentChoice = index;
  nextBtn.removeAttribute("disabled");
  nextBtn.classList.add("bg-(--primaryColor)", "cursor-pointer");
  nextBtn.classList.remove("bg-gray-300");
  prev = index;
}

btnsArr.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if(btnsContent[index].selected){
        return;
    }
    selectOption(btn, index);
  });
});

nextBtn.addEventListener('click', ()=>{
if(currentChoice === 0){
alert("parent")
}
else if(currentChoice === 1){
    form.action = "/tutor-register.html"

}
else{
    form.action = "/student-register.html"
}
})