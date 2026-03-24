function calculatePixels(percentage){
return String((188-(percentage*2)) + "px")
}
export default function card5(dataObj){
    return `<div id="${dataObj.id}" class="sub-learning flex-1 flex flex-col min-w-[280px] max-w-[500px] bg-[${dataObj.cardColor}] mt-10 rounded-2xl transition-all ease duration-200 border-2 border-transparent hover:border-[${dataObj.subject.title.color}]">
  <img class="w-full h-[215px] object-cover object-center rounded-2xl" src="${dataObj.img}" alt="">
  <div class="flex flex-col gap-3 p-3">
  <div class="details flex justify-between gap-3 items-center">
    <div class="left flex flex-col gap-1">
      <strong class="text-[${dataObj.subject.title.color}] text-lg">${dataObj.subject.title.text}</strong>
      <small class="text-sm text-gray-500">${dataObj.subject.duration}</small>
    </div>

       ${dataObj.subject.btn ? `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6673 20.0007C36.6673 29.2053 29.2053 36.6673 20.0007 36.6673C10.7959 36.6673 3.33398 29.2053 3.33398 20.0007C3.33398 10.7959 10.7959 3.33398 20.0007 3.33398C29.2053 3.33398 36.6673 10.7959 36.6673 20.0007Z" stroke="${dataObj.subject.title.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8327 17.4994C25.8327 17.4994 21.5365 23.3327 19.9993 23.3327C18.4622 23.3327 14.166 17.4994 14.166 17.4994M19.9993 22.4994V11.666M14.166 28.3327H25.8327" stroke="${dataObj.subject.title.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`: `
  <svg width="80" height="80" viewBox="-10 -10 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg)">
    <circle r="30" cx="40" cy="40" fill="transparent" stroke="#ffffff" stroke-width="6"></circle>
    <circle r="30" cx="40" cy="40" stroke="${dataObj.subject.title.color}" stroke-width="7" stroke-linecap="round" stroke-dashoffset="${calculatePixels(dataObj.subject.completion.percentage)}" fill="transparent" stroke-dasharray="188.4px"></circle>
    <text x="26px" y="45px" fill="${dataObj.subject.title.color}" font-size="15px" font-weight="bold" style="transform:rotate(90deg) translate(0px, -76px)"> ${dataObj.subject.completion.percentage}%</text>
  </svg>`}
  </div>
 
  ${dataObj.subject.btn ? `<button class="w-full p-3 transition-all ease duration-200 rounded-full text-white bg-[${dataObj.subject.btn.color}] hover:brightness-90">${dataObj.subject.btn.text}</button>`:""}
</div>
 </div>`
}