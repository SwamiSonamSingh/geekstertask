var count=0;
var minute=0;
var second=0;
var millis=0;
var flag=true;
var pausepos=0;
var starttimer=()=>{
    count++;
    minute=Math.floor((count/100)/60);
    second=Math.floor((count/100)-(minute*60));
    millis=Math.floor((count)-(second*100)-(minute*6000));
    document.getElementById("millisecond").innerHTML=convert(millis);
    document.getElementById("minute").innerHTML=convert(minute);
    document.getElementById("second").innerHTML=convert(second);
}
var start=document.getElementById("start");
start.addEventListener("click",function(){
    if(flag)
    {
        pausepos=setInterval(() => {
            starttimer(); 
        },10);
        flag=false;
    }
})
var pause=document.getElementById("pause");
pause.addEventListener("click",function(){
    clearInterval(pausepos);
})
var restart=document.getElementById("restart");
restart.addEventListener("click",function(){
    clearInterval(pausepos);
    count=0;
    minute=0;
    second=0;
    millis=0;
    flag=true;
    pausepos=0;
    document.getElementById("millisecond").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("second").innerHTML="00";
})
var convert=(zero)=>{
    if(zero<10){
        return "0"+zero;
    }
    else{
        return zero;
    }
}