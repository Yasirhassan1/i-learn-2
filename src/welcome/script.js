const cards = Array.from(document.getElementsByClassName("card"))
let prev = 1;
const cardsContent = [
    {
        borderColor: "#287C74",
        selected: false,
    },

    {
        borderColor: "#3685C7",
        selected: true,
    },

     {
        borderColor: "#A168BE",
        selected: false,
    },

    
]
cards.forEach((cur, ind)=>{
    cur.addEventListener("click", ()=>{
        
        cards[prev].classList.remove(`border-[${cardsContent[prev].borderColor}]`)
        cards[prev].classList.add(`border-transparent`)
        cards[prev].selected = false;
        cur.classList.add(`border-[${cardsContent[ind].borderColor}]`)
        cur.classList.remove("border-transparent")
        cardsContent[ind].selected = true;
        prev = ind;
    })
})