let input = document.getElementById("input");
let show = document.getElementById("additems");
let btn =document.getElementById("add");
let submit = document.getElementById("save");
add.addEventListener("click",function(){
    let para= document.createElement("div");
    para.setAttribute("id","para");
    let parent = document.createElement("div");
    parent.setAttribute("id","parent");
    let textAtPara= document.createElement("div");
    textAtPara.setAttribute("id","textAtPara");
    parent.appendChild(textAtPara);
    textAtPara.textContent=input.value;
    para.appendChild(parent);
    let cross = document.createElement("button");
    cross.innerHTML="Delete";
    cross.setAttribute("id","delete");
    let editDelete = document.createElement("div");
    editDelete.setAttribute("id","editDelete");
    editDelete.appendChild(cross);
    para.appendChild(editDelete);     
    if(input.value!=""){
        show.appendChild(para);
    }
    else{
        alert('required field');
    }
    input.value="";
    cross.addEventListener('click',()=>show.removeChild(para));
})