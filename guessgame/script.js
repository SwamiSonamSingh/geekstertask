let input=document.getElementById("input");
let button=document.getElementById("btn");
let output=document.getElementById("output");
let number=91;
button.addEventListener("click",function(){
    if(input.value=="")
    {
        alert("please enter the value");
    }
    else if(input.value==number){
        output.innerHTML="But tez ho rhe ho..";
        output.style="color:green";
    }
    else if(input.value<number){
        output.innerHTML="Ruko zara sabar kro..";
        output.style="color:red";
    }
    else if(input.value>number){
        output.innerHTML="Ruko zara sabr kro..";
        output.style="color:red";
    }
    input.value="";
})