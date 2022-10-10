
const audio = document.querySelector("#music") ;
const one = document.querySelector(".one") ;
const two = document.querySelector(".two-i") ;
const three = document.querySelector(".three") ;
const four = document.querySelector(".four") ;
const text = document.querySelector("#text") ;



const play = () =>  {
  // one.style.animation = "one 10s linear infinite"
  // text.style.animation = "text 10s linear infinite"
  two.style.animation = "two-i 11s linear infinite"
  three.style.animation = "three 30s linear infinite"
  four.style.animation = "four 20s linear infinite" 
}

const stop = () =>  { 
  one.style.animation = ""
  two.style.animation = ""
  three.style.animation = ""
  four.style.animation = ""
}

audio.onplay = () => play()
audio.onplaying = () => play()

audio.onended = () => stop()
audio.onpause = () => stop()