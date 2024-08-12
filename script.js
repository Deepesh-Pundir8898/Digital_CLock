const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const meridiem=document.querySelector(".meridiem")
const analogClock=document.querySelector(".analog-clock")
const digitalClock=document.querySelector(".digital-clock")

const futuristicClock=document.querySelector(".futuristic-clock")

const btns = document.querySelectorAll("button");
const clocks = [digitalClock, analogClock, futuristicClock];


function showClock(index) {
    if(index ==0){
        btns[0].style.backgroundColor="#cf8a4e";
        btns[0].style.color="#572c0f";
    }else{
        btns[0].style.backgroundColor="";
        btns[0].style.color="";
    }
    
    clocks.forEach((clock, idx) => {
        clock.style.display = idx === index ? "block" : "none";
    });
}

btns.forEach((button, index) => {
   
    button.addEventListener("click", function (e) {
        btns.forEach((item)=>{
            item.style.backgroundColor="";
            item.style.color="";
        })
       button.style.backgroundColor="#cf8a4e";
       button.style.color="#572c0f";
        showClock(index);
    });
    

});

showClock(0);

// digital clock js start

function updateClockUI(){
    let date =new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    if(h>=12){
        h = h > 12 ? h - 12 : h;
        meridiem.textContent="PM";    
    }else{
        meridiem.textContent="AM";
    }
    hours.innerHTML=String(h).padStart(2, '0');
    minutes.innerHTML=String(m).padStart(2, '0');
    seconds.innerHTML=String(s).padStart(2, '0');
}

let clock = setInterval(()=>{
   
    updateClockUI();
},1000)


// digital clock js end

// futuristic-clock js start

const fHour =document.getElementById("f-hour")
const fMinute =document.getElementById("f-minute")
const fSecond =document.getElementById("f-second")

const day =document.getElementById("day")

var monthName=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


const weekday =document.querySelectorAll('.day');

const fClock =setInterval(function time(){
    let today = new Date();
    let d= today.getDate();
    let m=today.getMonth();
    let y=today.getFullYear();
    let h= today.getHours();
    let min= today.getMinutes();
    let sec =today.getSeconds();
   
    let week =today.getDay();

    weekday.forEach(day => {
        day.style.backgroundColor = ""; 
        day.style.color = "";  
    });

    weekday[week].style.backgroundColor="#cf8a4e";
    weekday[week].style.color="#703a16";
    
    day.innerHTML=`${d} ${monthName[m]} ${y}`

    fHour.innerText = String(h).padStart(2, '0');
    fMinute.innerText = String(min).padStart(2, '0');
    fSecond.innerText = String(sec).padStart(2, '0');
},1000)

// futuristic-clock js start

