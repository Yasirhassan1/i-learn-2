export default function card(dataObj){

    return `<div id={${dataObj.id}} class="card transition-all ease duration-200 border-2 border-transparent hover:border-[${dataObj.title.color}] flex justify-between items-center min-w-[400px] gap-3 p-3.5 rounded-3xl flex-1 bg-[${dataObj.cardColor}]">
            <div class="left flex flex-col gap-3 h-fit">
              <strong class="text-[${dataObj.title.color}]">${dataObj.title.text}</strong>
              <small>${dataObj.subtitle}</small>
              <button class="bg-[${dataObj.btn.color}] rounded-full p-3 text-white">${dataObj.btn.text}</button>
            </div>
            <img src="${dataObj.img}" alt="pic">
          </div>`
}