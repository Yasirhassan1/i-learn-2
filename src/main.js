
const navItems = [
  {
    icon: "/src/assets/assignments.svg",
    title: "Learning Hub",
    arrowIcon: "/src/assets/arrow1.svg",
    subLinksArr: ["link1", "link2", "link3", "link4", "link5"],
  },

  {
    icon: "/src/assets/library.svg",
    title: "Study Materials",
    arrowIcon: "/src/assets/arrow1.svg",
    subLinksArr: ["link4", "link5", "link6"],
  },

  {
    icon: "/src/assets/quiz-02.svg",
    title: "Gamification",
    arrowIcon: "/src/assets/arrow1.svg",
    subLinksArr: ["link5"],
  },

  {
    icon: "/src/assets/teaching.svg",
    title: "Live Tutoring",
    arrowIcon: "/src/assets/arrow1.svg",
    subLinksArr: ["link5", "link5", "link6"],
  },

  {
    icon: "/src/assets/student.svg",
    title: "Student Tools",
    arrowIcon: "/src/assets/arrow1.svg",
    subLinksArr: ["link5", "link5", "link6"],
  },

  {
    icon: "/src/assets/award-01.svg",
    title: "Leaderboard",
    arrowIcon: "/src/assets/arrow1.svg",
    subLinksArr: ["link5", "link5", "link6"],
  },

  {
    icon: "/src/assets/account-setting-01.svg",
    title: "Account & Billing",
    arrowIcon: "/src/assets/arrow1.svg",
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
             
           <div class="subLinks flex flex-col gap-2 w-full pl-5">
  ${element.subLinksArr.map((subLink) => `<a href="">${subLink}</a>`).join("")}
</div>

  `;
  }
}
initializeSidebar();

const redChatBtn = document.getElementById("red-chat-btn");
const yellowChatBtn = document.getElementById("yellow-chat-btn")
const redChatBox = document.getElementById("red-chat-box")
const yellowChatBox = document.getElementById("yellow-chat-box")
const main = document.getElementById('main')
const chatboxBtns = Array.from(document.getElementsByClassName("chatboxBtn"))
const chatBoxes = Array.from(document.getElementsByClassName("chatbox"))
const bgOverlay = document.getElementById("overlay")
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
