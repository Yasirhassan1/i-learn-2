export default function card4(dataObj){
    return `<div id="${dataObj.id}" class="box bg-[${dataObj.card.color}] transition-all ease duration-200 border-2 border-transparent hover:border-[${dataObj.title.color}] hover:scale-105 hover:shadow-lg w-[280px] rounded-3xl  relative h-[280px] mt-10 flex flex-col justify-end p-4">
  <div class="innerbox w-[200px] h-[200px] shadow-lg rounded-3xl bg-[${dataObj.card.innerCard.color}] absolute -top-6 left-1/2 -translate-x-1/2 rotate-3"></div>
  <img class="pic absolute object-cover z-40 object-center  -top-4 left-32 -translate-x-1/2 w-[190px] h-[190px] bg-white rounded-3xl" src="${dataObj.mainImg}" alt="pic">

  <div class="title flex flex-col gap-2 self-center text-center">
    <strong class="text-[${dataObj.title.color}] text-xl">${dataObj.title.text}</strong>
    <small class="text-[#828282] text-sm">Age 5-7</small>
  </div>
  <div class="round w-[20px] h-[20px] absolute rounded-full bg-[${dataObj.round1Color}] right-3.5 bottom-6"></div>
  <div class="round w-[50px] h-[50px] absolute rounded-full bg-[${dataObj.round2Color}] left-3 bottom-20"></div>
  <div class="valueBox bg-white absolute right-8 top-1/2 z-50 w-[51px] h-[51px] border-b-3 border-b-[${dataObj.valueBox.bottomColor}]  flex items-center justify-center rounded-2xl mt-1.5 text-gray-500">${dataObj.valueBox.text}</div>
  <img class="w-[35px] absolute right-15 top-1/2 -translate-y-1/2 mt-2 z-50" src="${dataObj.starImg}" alt="">

  
</div>`
}