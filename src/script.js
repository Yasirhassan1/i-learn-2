import {onAuthStateChanged } from "firebase/auth";
import { auth } from "./auth.js";

onAuthStateChanged(auth, (user)=>{
  if(!user){
    window.location = "/sign-in.html"
  }
  else{
    document.body.classList.add("block")
    document.body.classList.remove("hidden")
  }
})

import {signOut} from "firebase/auth";

import arrowIcon from "./assets/arrow1.svg";
import assignmentIcon from "./assets/assignments.svg"
import libraryIcon from "./assets/library.svg"
import quizIcon from "./assets/quiz-02.svg"
import teachingIcon from "./assets/teaching.svg"
import studentIcon from "./assets/student.svg"
import awardIcon from "./assets/award-01.svg"
import settingIcon from "./assets/account-setting-01.svg"
import defaultProfilePic from "./assets/user-circle.svg"




const menuBtn = document.getElementById("menuBtn")
const closeMenuBtn = document.getElementById("closeMenuBtn")
const user = Array.from(document.getElementsByClassName("userName"))
const logOutBtn = document.getElementById("logOutBtn")
const profilePictures = Array.from(document.getElementsByClassName("profile-picture"))

logOutBtn.addEventListener("click", async ()=>{
await signOut(auth).then(() => {
  localStorage.removeItem("userName")
  localStorage.removeItem("profilePic")
  alert("Logout Successfull")
}).catch((error) => {
 console.log(error)
});
})



const userName = localStorage.getItem("userName") || "Anonymous"
const url = localStorage.getItem("profilePic") || defaultProfilePic;

user.forEach((cur)=>{
  cur.innerText = userName;
})

profilePictures.forEach((cur)=>{
  cur.src = url;
})

menuBtn.addEventListener("click", ()=>{
  openMenu()
})
closeMenuBtn.addEventListener("click", ()=>{
  openMenu()
})


const navItems = [
  {
    icon: assignmentIcon,
    title: "Learning Hub",
    arrowIcon: arrowIcon,
    subLinksArr: ["Assignment Help", "Superpower", "Interactive lessons"],

  },

  {
    icon: libraryIcon,
    title: "Study Materials",
    arrowIcon: arrowIcon,
    subLinksArr: ["Little Learners", "Worksheets", "Visual Learning", "Language Worksheets", "Practice Exercises", "Study Materials"],
  },

  {
    icon: quizIcon,
    title: "Gamification",
    arrowIcon: arrowIcon,
    subLinksArr: ["Games"],
  },

  {
    icon: teachingIcon,
    title: "Live Tutoring",
    arrowIcon: arrowIcon,
    subLinksArr: ["link5", "link5", "link6"],
  },

  {
    icon: studentIcon,
    title: "Student Tools",
    arrowIcon: arrowIcon,
    subLinksArr: ["link5", "link5", "link6"],
  },

  {
    icon: awardIcon,
    title: "Leaderboard",
    arrowIcon: arrowIcon,
    subLinksArr: ["link5", "link5", "link6"],
  },

  {
    icon: settingIcon,
    title: "Account & Billing",
    arrowIcon: arrowIcon,
    subLinksArr: ["link5", "link5", "link6"],
  },
];


const navContainer = document.getElementById("nav-container");
function initializeSidebar() {
  for (const element of navItems) {
    navContainer.innerHTML += `
              <div  
              class="flex flex-col anim min-h-[43px] max-h-[43px] overflow-hidden cursor-pointer gap-3 p-2 items-center nav-item"
              href="#"
            >
              <div
                class="box flex gap-3 w-full items-center md:justify-between"
              >
                <img class="w-6" src="${element.icon}" alt="" />
                <p>${element.title}</p>
                <img
                  class="w-7 nav-arrow rotate-[270deg] ml-auto transition-transform duration-200 ease-in-out cursor-pointer"
                  src="${element.arrowIcon}"
                  alt=""
                />
              </div>
              
             
             <div class="flex gap-2 w-full ml-2">
             <div class="h-[${element.height}] w-[2px] bg-gradient-to-b from-[#D9E8E7] via-[#80B2AD] to-[#D9E8E7] rounded-full"></div>
           <div class="subLinks flex flex-col gap-2 w-full pl-5 text-[#525252]">
  ${element.subLinksArr.map((subLink) => `<a href="">${subLink}</a>`).join("")}
</div>
</div>

  `;
  }
}
initializeSidebar();

const redChatBtn = document.getElementById("red-chat-btn");
const yellowChatBtn = document.getElementById("yellow-chat-btn")
const redChatboxCloseBtn = document.getElementById("redChatboxCloseBtn")
const yellowChatboxCloseBtn = document.getElementById("yellowChatboxCloseBtn")
const purpleChatboxCloseBtn = document.getElementById("purpleChatboxCloseBtn")
const redChatBox = document.getElementById("red-chat-box")
const yellowChatBox = document.getElementById("yellow-chat-box")
const main = document.getElementById('main')
const chatboxBtns = Array.from(document.getElementsByClassName("chatboxBtn"))
const chatBoxes = Array.from(document.getElementsByClassName("chatbox"))
const bgOverlay = document.getElementById("overlay")

bgOverlay.addEventListener("click", ()=>{
  closeMenu()
})

redChatboxCloseBtn.addEventListener("click", ()=>{
  closeChatBox(0)

})

yellowChatboxCloseBtn.addEventListener("click", ()=>{
  closeChatBox(1)

})

purpleChatboxCloseBtn.addEventListener("click", ()=>{
  closeChatBox(2)

})
const isChatboxesOpen = [false, false];

chatboxBtns.forEach((cur, ind)=>{
  cur.addEventListener("click", ()=>{
    if(isChatboxesOpen[ind]){
      chatBoxes[ind].classList.remove("bottom-3")
      chatBoxes[ind].classList.add("-bottom-[493px]")
      isChatboxesOpen[ind] = false
      if(!isChatboxesOpen[0] && !isChatboxesOpen[1] && !isChatboxesOpen[2]){
       offOverlay()
       }
    }
    else{
       chatBoxes[ind].classList.remove("-bottom-[493px]")
       chatBoxes[ind].classList.add("flex", "bottom-3")
       onOverlay()
       isChatboxesOpen[ind] = true;

    }
  })
})
function onOverlay(){
   bgOverlay.classList.remove("opacity-0", "invisible");
    bgOverlay.classList.add("visible", "opacity-35");
}
function offOverlay(){
    bgOverlay.classList.remove("visible", "opacity-35");
    bgOverlay.classList.add("invisible", "opacity-0");
}
function closeChatBox(boxValue){
  chatBoxes[boxValue].classList.remove("bottom-3")
  chatBoxes[boxValue].classList.add("-bottom-[493px]")

  isChatboxesOpen[boxValue] = false
   if(!isChatboxesOpen[0] && !isChatboxesOpen[1] && !isChatboxesOpen[2]){
       offOverlay()
       }

}

const menuBar = document.getElementById("menu-bar");




const htmlCollection1 = document.getElementsByClassName("nav-item");
const htmlCollection2 = document.getElementsByClassName("nav-arrow");
const navCollection = Array.from(htmlCollection1);
const navArrows = Array.from(htmlCollection2);
const htmlCollection3 = document.getElementsByClassName("subLinks");
const subLinks = Array.from(htmlCollection3);

let navArrowOpen = [false, false, false, false, false, false, false];

let menuOpen = false;
function closeMenu(){

    menuBar.classList.add("-translate-x-full");
    menuBar.classList.remove("translate-x-0");
    if(menuOpen){
    offOverlay()
    }
    menuOpen = false;
}


function openMenu() {
  if (menuOpen) {
    menuBar.classList.add("-translate-x-full");
    menuBar.classList.remove("translate-x-0");
    offOverlay()
    menuOpen = false;
  } else {
    // menuBar.style.backgroundColor = "white";
    menuBar.classList.add("translate-x-0");
    menuBar.classList.remove("-translate-x-full");
    onOverlay()
    menuOpen = true;
  }
}
function flipArrow(i) {
  navArrowOpen[i] = !navArrowOpen[i];
  if (navArrowOpen[i]) {
    navArrows[i].classList.remove("rotate-[270deg]");
    navArrows[i].classList.add("rotate-[360deg]");
    return true;
  } else {
    navArrows[i].classList.remove("rotate-[360deg]");
    navArrows[i].classList.add("rotate-[270deg]");
    return false;
  }
}

for (let i = 0; i < navCollection.length; i++) {
  navCollection[i].addEventListener("click", () => {
    let num = subLinks[i].childElementCount === 1 ? 45 : 36;
    const height = String(
      subLinks[i].childElementCount * num +
        navCollection[i].firstElementChild.offsetHeight,
    );
    if (flipArrow(i)) {
      navCollection[i].classList.add(`min-h-[${height}px]`);
      navCollection[i].classList.remove("min-h-[43px]", "overflow-y-hidden");
    } else {
      navCollection[i].classList.remove(`min-h-[${height}px]`);
      navCollection[i].classList.add("min-h-[43px]", "overflow-y-hidden");
    }
  });
}
