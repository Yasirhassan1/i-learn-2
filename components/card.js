export default function card(dataObj){

    return `<div id= ${dataObj.id} class="card transition-all ease duration-200 border-2 border-transparent hover:border-[${dataObj.title.color}] flex-1 min-w-[300px] rounded-3xl p-4 bg-[${dataObj.cardColor}] flex flex-col gap-3 items-center h-fit">
      <img src="${dataObj.img}" alt="light">
<span class="text-[${dataObj.title.color}]">${dataObj.title.text}</span>
<small>Due: ${dataObj.date}</small>
<div class="buttons flex gap-2 flex-wrap">
  <button class="flex gap-2 p-3 rounded-full bg-[#FF9F01] text-white items-center">
    <img src="${dataObj.btns[0]?.logo}" alt="">
    ${dataObj.btns[0]?.text}
 </button>
   <button class="flex gap-2 p-3 rounded-full bg-(--primaryColor) text-white items-center">
  <img src="${dataObj.btns[1]?.logo}" alt="upload">
  ${dataObj.btns[1]?.text}
</button>
</div>
          </div>`
}