
export default function renderCards(container, card, cardsData){
cardsData.map((cur, ind)=>{
  return container.innerHTML += card(cur)
})

}