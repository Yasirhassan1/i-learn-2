// import {onAuthStateChanged } from "firebase/auth";
// import { auth } from "./auth.js";

// onAuthStateChanged(auth, (user)=>{
//   if(!user){
//     window.location = "/sign-in.html"
//   }
//   else{
//     document.body.classList.replace("hidden", "block");
//   }
// })
 document.body.classList.replace("hidden", "block");

import card from "../components/card.js";
import card2 from "../components/card2.js";
import card3 from "../components/card3.js"
import card4 from "../components/card4.js";
import card5 from "../components/card5.js"
import card6  from "../components/card6.js";


import renderCards from "../components/cardList.js"
import { data as data2 } from "./dashboard/interactive-lessons.js";
import {data as data3}  from "./dashboard/little-learners.js"
import {data as data4} from "./dashboard/worksheet.js"
import {data as data5} from "./dashboard/visual-learning.js"
import {data as data6} from "./dashboard/language-worksheets.js"
import {data as data7} from "./dashboard/reading.js"
import {data as data8} from "./dashboard/practice-exercise.js"



import {signOut} from "firebase/auth";


const menuBtn = document.getElementById("menuBtn")
const closeMenuBtn = document.getElementById("closeMenuBtn")
const user = Array.from(document.getElementsByClassName("userName"))
const logOutBtn = document.getElementById("logOutBtn")
const nav = document.getElementById("nav-container")
const profilePictures = Array.from(document.getElementsByClassName("profile-picture"))
const redChatBtn = document.getElementById("red-chat-btn");
const yellowChatBtn = document.getElementById("yellow-chat-btn")
const redChatboxCloseBtn = document.getElementById("redChatboxCloseBtn")
const yellowChatboxCloseBtn = document.getElementById("yellowChatboxCloseBtn")
const purpleChatboxCloseBtn = document.getElementById("purpleChatboxCloseBtn")
const redChatBox = document.getElementById("red-chat-box")
const yellowChatBox = document.getElementById("yellow-chat-box")

const chatboxBtns = Array.from(document.getElementsByClassName("chatboxBtn"))
const chatBoxes = Array.from(document.getElementsByClassName("chatbox"))
const bgOverlay = document.getElementById("overlay")
const menuBar = document.getElementById("menu-bar");
const htmlCollection1 = document.getElementsByClassName("nav-item");
const htmlCollection2 = document.getElementsByClassName("nav-arrow");

logOutBtn.addEventListener("click", async ()=>{

  try{
  await signOut(auth)
    localStorage.removeItem("userName")
  localStorage.removeItem("profilePic")
    alert("Logout Successfull")
  
  }
  catch(error){
     console.log(error)
  }

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

import defaultProfilePic from "./assets/user-circle.svg"
import { navItems } from "./dashboard/navbar.js";

const navContainer = document.getElementById("nav-container");
function initializeSidebar() {
  for (const element of navItems) {
    navContainer.innerHTML += `
              <div  
              class="flex flex-col transition-all ease-in-out duration-500 overflow-hidden max-h-[43px] cursor-pointer gap-3 p-2 items-center nav-item"
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
              
             
             <div class="flex gap-1 w-full ml-2">
             <div class="w-[2px] bg-gradient-to-b from-[#D9E8E7] via-[#80B2AD] to-[#D9E8E7] rounded-full"></div>
           <div class="subLinks flex flex-col gap-2 w-full text-[#525252]">
  ${element.subLinksArr.map((subLink) => `<a  href={${subLink.href}} class="subLink flex items-center rounded-full p-2">${subLink.title}</a>`).join("")}
</div>
</div>

  `;
  }
}

initializeSidebar();

const navCollection = Array.from(htmlCollection1);
const navArrows = Array.from(htmlCollection2);
const htmlCollection3 = document.getElementsByClassName("subLinks");
const subLinks = Array.from(htmlCollection3);



const subLinkss = Array.from(document.getElementsByClassName("subLink"))
console.log(subLinkss)
let prevFocusAnchor = subLinkss[0]
let prevFocusAnchorIndex = 0
 const paths = document.querySelectorAll("#dashboardIcon path");
 const headerTitile = document.getElementById("header-title")
 
subLinkss.forEach((cur, ind)=>{
  cur.addEventListener("click", (event)=>{
    event.preventDefault();
    closeMenu()
      if(prevFocusAnchorIndex != ind){
     prevFocusAnchor.classList.remove("text-white", "bg-(--primaryColor)")

paths.forEach(path => {
  path.setAttribute("stroke", (cur.innerText == "Dashboard")? "white": "black");
});

  cur.classList.add("text-white", "bg-(--primaryColor)")
      const id = cur.innerText.toString().toLocaleLowerCase()?.replace(" ", "-")
     
      showThisPage(id, cur.innerText)
      

      prevFocusAnchor = cur;
      prevFocusAnchorIndex = ind;
      

      
   }
  
   
  })
})
const dashboard = document.getElementById('dashboard')
let prev = dashboard;
import { data } from "./dashboard/assignment-help.js";
// const subjectsContainer= document.getElementById("subjects-container")
// const interactiveContainer = document.getElementById("interactive-container")
// const littleContainer = document.getElementById("little-learners-container")
// const worksheetsContainer = document.getElementById("worksheets-container")
// const visualLearningContainer = document.getElementById("visual-learning-container")
// const languageWorksheetContainer = document.getElementById("language-worksheets-container")
const pagesCardsContainer = Array.from(document.getElementsByClassName("page-cards-container"))


const pagesContainers = [
  {
    id: "assignment-help",
    cardsContainer: pagesCardsContainer[0],
    data: data,
    card: card,
    firstRender: false
  },
  {
    id: "interactive-lessons",
    cardsContainer: pagesCardsContainer[1],
    data: data2,
    card: card2,
    firstRender: false
  },

   {
    id: "little-learners",
    cardsContainer: pagesCardsContainer[2],
    data: data3,
    card: card3,
    firstRender: false
  },

   {
    id: "worksheets",
    cardsContainer: pagesCardsContainer[3],
    data: data4,
    card: card4,
    firstRender: false
  },

    {
    id: "visual-learning",
    cardsContainer: pagesCardsContainer[4],
    data: data5,
    card: card5,
    firstRender: false
  },

   {
    id: "language-worksheets",
    cardsContainer: pagesCardsContainer[5],
    data: data6,
    card: card,
    firstRender: false
  },

     {
    id: "practice-exercises",
   cardsContainer: pagesCardsContainer[6],
    data: data8,
    card: card6,
    firstRender: false
  },




    {
    id: "study-materials",
   cardsContainer: pagesCardsContainer[7],
    data: data3,
    card: card3,
    firstRender: false
  },



     {
    id: "reading",
   cardsContainer: pagesCardsContainer[8],
    data: data7,
    card: card5,
    firstRender: false
  },
]

function isThisPageHasCards(id){
const current = pagesContainers.find((cur)=>(
  cur.id == id
))
return current;
}
function showThisPage(id, title){
  const current = isThisPageHasCards(id)
if(current && !current.firstRender){
renderCards(current.cardsContainer, current.card, current.data)
current.firstRender = true;

}

   
  const page = document.getElementById(id)
  if(page && page.id !=prev.id){
    headerTitile.innerText =  title;
  prev.classList.replace("flex", "hidden")
  page.classList.replace("hidden", "flex")
  prev = page;
  
}





}




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
function scrollTop() {
  nav.scroll({
    top: -1,
    behavior: "smooth",
  });
}

function scrollBottom() {
  nav.scroll({
    top: 150,
    behavior: "smooth",
  });
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
let prevNavItemIndex = 0
let prevNavItem = null
// let prevNavItemHeight = 0

navCollection.forEach((cur, ind)=>{
  cur.firstElementChild.addEventListener("click", ()=>{
  if(ind<4){
    scrollTop()
  }
  else{
    scrollBottom()
  }

   if (flipArrow(ind)) {
      // cur.classList.add(`min-h-fit`);
      cur.classList.add(`max-h-[370px]`);
      cur.classList.remove("overflow-hidden", "max-h-[43px]");
      
    
    } else {
      cur.classList.remove(`max-h-[370px]`);
      cur.classList.add("max-h-[43px]", "overflow-hidden");
    }

        if(prevNavItem && prevNavItemIndex !== ind && navArrowOpen[prevNavItemIndex]){
      flipArrow(prevNavItemIndex)
      prevNavItem.classList.remove(`max-h-[370px]`);
      prevNavItem.classList.add("max-h-[43px]", "overflow-hidden");
}
 prevNavItem = cur;
 prevNavItemIndex = ind;

  })

})



