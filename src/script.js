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
const nav = document.getElementById("nav-container")
const profilePictures = Array.from(document.getElementsByClassName("profile-picture"))

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


// const navItems = [
//   {
//     icon: assignmentIcon,
//     title: "Learning Hub",
//     arrowIcon: arrowIcon,
//     subLinksArr: ["Assignment Help", "Superpower", "Interactive Lessons"],
   

//   },

//     {
//     icon: assignmentIcon,
//     title: "Learning Hub",
//     arrowIcon: arrowIcon,
//     subLinksArr: ["Assignment Help", "Superpower", "Interactive Lessons"],
   

//   },

//   {
//     icon: libraryIcon,
//     title: "Study Materials",
//     arrowIcon: arrowIcon,
//     subLinksArr: ["Little Learners", "Worksheets", "Visual Learning", "Language Worksheets", "Practice Exercises", "Study Materials"],
//   },

//   {
//     icon: quizIcon,
//     title: "Gamification",
//     arrowIcon: arrowIcon,
//     subLinksArr: ["Games"],
//   },

//   {
//     icon: teachingIcon,
//     title: "Live Tutoring",
//     arrowIcon: arrowIcon,
//     subLinksArr: ["link5", "link5", "link6"],
//   },

//   {
//     icon: studentIcon,
//     title: "Student Tools",
//     arrowIcon: arrowIcon,
//     subLinksArr: ["link5", "link5", "link6"],
//   },

//   {
//     icon: awardIcon,
//     title: "Leaderboard",
//     arrowIcon: arrowIcon,
//     subLinksArr: ["link5", "link5", "link6"],
//   },

//   {
//     icon: settingIcon,
//     title: "Account & Billing",
//     arrowIcon: arrowIcon,
//     subLinksArr: ["link5", "link5", "link6"],
//   },
// ];

const navItems = [
  {
    icon: assignmentIcon,
    title: "Learning Hub",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "Assignment Help", 
        href: "/assignment-help"
      },
         {
        title: "Superpower", 
        href: "/superpower"
      },

      {
        title: "Interactive Lessons", 
        href: "/interactive-lessons"
      },


    ],
   

  },

  {
    icon: libraryIcon,
    title: "Study Materials",
    arrowIcon: arrowIcon,
    subLinksArr:[
      {
        title:  "Little Learners",
        href: "/little-learners"
      },

      {
        title:  "Worksheets",
        href: "/worksheets"
      },

       {
        title:  "Visual Learning",
        href: "/visual-learning"
      },

      {
        title:  "Language Worksheets",
        href: "/language-worksheets"
      },

      {
        title:  "Practice Exercises",
        href: "/practice-exercises"
      },

        {
        title:  "Study Materials",
        href: "/study-materials"
      },


       {
        title:  "Reading",
        href: "/reading"
      },


    ],
  },

  {
    icon: quizIcon,
    title: "Gamification",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "Games",
        href: "/games"
      }
    ],
  },

  {
    icon: teachingIcon,
    title: "Live Tutoring",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "link4",
        href: "/link4"
      },

      {
        title: "link5",
        href: "/link5"
      },
      {
        title: "link6",
        href: "/link6"
      },
    ],
  },

  {
    icon: studentIcon,
    title: "Student Tools",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "link4",
        href: "/link4"
      },

      {
        title: "link5",
        href: "/link5"
      },
      {
        title: "link6",
        href: "/link6"
      },
    ],
  },

  {
    icon: awardIcon,
    title: "Leaderboard",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "link4",
        href: "/link4"
      },

      {
        title: "link5",
        href: "/link5"
      },
      {
        title: "link6",
        href: "/link6"
      },
    ],
  },

  {
    icon: settingIcon,
    title: "Account & Billing",
    arrowIcon: arrowIcon,
    subLinksArr: [
      {
        title: "link4",
        href: "/link4"
      },

      {
        title: "link5",
        href: "/link5"
      },
      {
        title: "link6",
        href: "/link6"
      },
    ],
  },
];

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
// import { subjectList } from "../subjectList.js";
// const subjectsContainer= document.getElementById("subjects-container")

// function renderCards(cardList){
// cardList.map((cur, ind)=>{
//   return subjectsContainer.innerHTML += `<div class="card flex-1 min-w-[300px] rounded-3xl p-4 bg-[${cur.cardColor}] flex flex-col gap-3 items-center h-fit">
//       <img src="${cur.img}" alt="light">
// <span class="text-[${cur.title.textColor}]">${cur.title.text}</span>
// <small>Due: ${cur.date}</small>
// <div class="buttons flex gap-2 flex-wrap">
//   <button class="flex gap-2 p-3 rounded-full bg-[#FF9F01] text-white items-center">
//     <img src="${cur.btns[0].btnLogo}" alt="">
//   AI Hint</button>

//    <button class="flex gap-2 p-3 rounded-full bg-(--primaryColor) text-white items-center">
//   <img src="${cur.btns[1].btnLogo}" alt="upload">

//   Upload</button>
// </div>
//           </div>`
// })
// }

function showThisPage(id, title){
// renderCards(subjectList)
   
  const page = document.getElementById(id)
  if(page && page.id !=prev.id){
    headerTitile.innerText =  title;
  prev.classList.replace("flex", "hidden")
  page.classList.replace("hidden", "flex")
  prev = page;
  
}





}


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








// for (let i = 0; i < navCollection.length; i++) {
//   navCollection[i].firstElementChild.addEventListener("click", () => {
//       // let num = subLinks[i].childElementCount === 1 ? 45 : 36;
//     if(i<4){
//       scrollTop()
//     }
//     else{
//       scrollBottom()
//     }
    
 
//     // const height = String(
//     //   subLinks[i].childElementCount * num +
//     //     navCollection[i].firstElementChild.offsetHeight,
//     // );
//     if (flipArrow(i)) {
//       navCollection[i].classList.add(`min-h-fit`);
//       navCollection[i].classList.remove("min-h-[43px]", "overflow-y-hidden");
      
    
//     } else {
//       navCollection[i].classList.remove(`min-h-fit`);
//       navCollection[i].classList.add("min-h-[43px]", "overflow-y-hidden");
//     }

//     if(firstClick && prevNavItemIndex !== i && navArrowOpen[prevNavItemIndex]){
//   flipArrow(prevNavItemIndex)
//       // navCollection[prevNavItemIndex].classList.remove(`min-h-[${prevNavItemHeight}px]`);
//       navCollection[prevNavItemIndex].classList.remove(`min-h-fit`);
//       navCollection[prevNavItemIndex].classList.add("min-h-[43px]", "overflow-y-hidden");
// }
//  prevNavItemIndex = i;
// //  prevNavItemHeight = height;
// firstClick = true;
      
//   });
// }
