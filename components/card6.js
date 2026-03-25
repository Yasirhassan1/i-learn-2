export default function card6(dataObj){
    return `
    <div class="box flex flex-col gap-2 rounded-2xl min-w-[250px] flex-1 bg-[${dataObj.cardColor}]">
  <div class="top h-[188px] relative bg-[${dataObj.innerCardColor}] rounded-t-2xl">
  <img class="absolute object-contain object-center -top-5 w-full h-full" src="${dataObj.img}" alt="">
  </div>
  <div class="bottom flex flex-col p-3 gap-3">
  <strong class="text-[${dataObj.title.color}] text-xl">${dataObj.title.text}</strong>
  <button class="bg-[${dataObj.btn.color}] rounded-full p-3 text-white hover:brightness-90">${dataObj.btn.text}</button>
  </div>
</div>
    `}