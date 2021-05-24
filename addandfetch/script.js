let n=document.getElementById("name");
let hobbies=document.getElementById("hobbies");
let button=document.getElementById("submit");
let outputn=document.getElementById("outputname");
let outputh=document.getElementById("outputhobbies");
button.addEventListener("click",function(){
    let value1=n.value;
    outputn.innerHTML=value1;
    let value2=hobbies.value;
    outputh.innerHTML=value2;
    if(value1=="" || value2==""){
        alert("please enter the value");
    }
    n.value="";
    hobbies.value="";
})