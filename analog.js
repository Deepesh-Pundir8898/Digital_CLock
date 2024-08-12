let analogHour = 0;
let analogSecond=0;
let analogMinute=0;
let date ="";
let month="";
let year="";

let analogDate=new Date();

date = analogDate.getDate();
month = analogDate.getMonth() + 1;
year=analogDate.getFullYear();

let dateContainer=document.querySelector(".date-wrapper")

dateContainer.innerHTML=`<div class="date-heading">Date<div>
    <div class="date-container">${date}:${month}:${year}<div>
`



setInterval(()=>{
    analogDate =new Date();
    analogSecond =analogDate.getSeconds()*6;
    analogMinute =analogDate.getMinutes()*6;
    analogHour =analogDate.getHours()*30;

    document.getElementById("seccond-hand").style.transform="rotate("+analogSecond+"deg)";

    document.getElementById("minute-hand").style.transform="rotate("+analogMinute+"deg)";

    document.getElementById("hour-hand").style.transform="rotate("+analogHour+"deg)";


},1000)
    
    
    