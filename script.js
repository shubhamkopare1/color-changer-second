
const buttonName= document.querySelector(".box")
const button1= document.querySelector("#but")
const button2= document.querySelector("#buts")
let timeOutId;
const addText= ()=>{
    const randomColor=generateColor()
   buttonName.style.background=randomColor;
   console.log("he buddy");
   console.log('hhh');
}

button1.addEventListener("click",()=>{
    timeOutId= setTimeouts();
    sounds();
})

button2.addEventListener('click',()=>{
clearInterval(timeOutId)
console.log('stoped');
sounds()
})

const setTimeouts=()=>{
 return setInterval(addText,1000)
}

const generateColor=()=>{
    const background="0123456789ABCDEF";
    let color="#";
    for (let i = 0; i < 6; i++) {
        color+=background[Math.floor( Math.random()*16)]
    }
    return color;
}
const sounds=()=>{
    const sound=new Audio("click-button-140881.mp3")
    const sounds=sound.play();
    onclick(sounds)
  }