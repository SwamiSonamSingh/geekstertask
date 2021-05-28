let time=document.getElementById("time");
let active=document.getElementById("active");
let confirm=document.getElementById("confirm");
let death=document.getElementById("death");
let recovered=document.getElementById("recovered");
fetch("https://api.covid19india.org/data.json").then(data=>{
    return data.json();
}).then(output=>{
        let value=output.statewise[0];
        active.innerHTML=value.active;
        time.innerHTML=value.lastupdatedtime;
        confirm.innerHTML=value.confirmed;
        death.innerHTML=value.deaths;
        recovered.innerHTML=value.recovered;
})