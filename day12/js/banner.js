const bannerWrap = document.querySelector("#banner-wrap")

// 몇 초뒤에
setTimeout(()=> {
  bannerWrap.style.transform = "translate(-1280p, 0)"
}, 3000)

// 몇 초 마다 
let count = 0
let gap = 1280
let movePx = gap * count || 1

setInterval(() => {
  let movePx = gap * count || 1
  bannerWrap.style.transform = `translate(-${movePx}px, 0)`
  count++
  count = count % 5
  if(count === 1){
    bannerWrap.style.transition = "none"
    bannerWrap.style.transform = `translate(0, 0)`    
  } else {
     bannerWrap.style.transition = "all 0.5s ease-in-out"
  }
}, 3000)