function calculatePixels(percentage){
return String((188-(percentage*2)) + "px")
}
export default function card5(dataObj){
    return `<div id="${dataObj.id}" class="sub-learning flex-1 flex flex-col min-w-[280px] max-w-[500px] bg-[${dataObj.cardColor}] mt-10 rounded-2xl transition-all ease duration-200 border-2 border-transparent hover:border-[${dataObj.subject.title.color}]">
  <img class="w-full h-[215px] object-cover object-center rounded-2xl" src="${dataObj.img}" alt="">
  <div class="details flex justify-between gap-3 items-center p-3">
    <div class="left flex flex-col gap-1">
      <strong class="text-[${dataObj.subject.title.color}] text-lg">${dataObj.subject.title.text}</strong>
      <small class="text-sm">${dataObj.subject.duration}</small>
    </div>
                <svg width="80" height="80" viewBox="-10 -10 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg)">
    <circle r="30" cx="40" cy="40" fill="transparent" stroke="#ffffff" stroke-width="6"></circle>
    <circle r="30" cx="40" cy="40" stroke="${dataObj.subject.title.color}" stroke-width="7" stroke-linecap="round" stroke-dashoffset="${calculatePixels(dataObj.subject.completion.percentage)}" fill="transparent" stroke-dasharray="188.4px"></circle>
    <text x="26px" y="45px" fill="${dataObj.subject.title.color}" font-size="15px" font-weight="bold" style="transform:rotate(90deg) translate(0px, -76px)"> ${dataObj.subject.completion.percentage}%</text>
  </svg>
  </div>
</div>`
}