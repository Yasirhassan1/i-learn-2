export default function card2(dataObj){

    return `<div id= ${dataObj.id} class="card transition-all ease duration-200 border-2 border-transparent hover:border-[${dataObj.title.color}] flex-1 min-w-[300px] rounded-3xl p-4 bg-[${dataObj.cardColor}] flex flex-col gap-3 items-center h-fit">
      <img src="${dataObj.img}" alt="light">
<span class="text-[${dataObj.title.color}]">${dataObj.title.text}</span>
<small>${dataObj.subTitle}</small>

          </div>`
}