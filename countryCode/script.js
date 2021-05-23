fetch('https://restcountries.eu/rest/v2/alpha/in').then(data=>{
    return data.json();
}).then((val)=>{
    var code=document.getElementById("code");
    var border=document.getElementById("border");
    var name=document.getElementById("name");
    name.innerHTML=val.nativeName;
    code.innerHTML =val.callingCodes;
    border.innerHTML=val.borders;
})