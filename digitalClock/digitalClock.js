let hourHand = document.querySelector('.hour');
let minHand = document.querySelector('.minute');
let secHand = document.querySelector('.second');

let ticking =()=>{
    let currentDate = new Date();
    let getHours = currentDate.getHours();
    console.log(getHours)
    hourHand.textContent = getHours
    let getmin = currentDate.getMinutes();
    console.log(getmin)
    minHand.textContent= getmin
    let getSec = currentDate.getSeconds();
    console.log(getSec)
    secHand.textContent= getSec

}
setInterval(ticking,1000)