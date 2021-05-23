var button=document.getElementById("btn");
button.addEventListener("click",function(){
    var name=document.getElementById("name");
    var age=document.getElementById("age");
    var phone=document.getElementById("ph");
    var mail=document.getElementById("mail");
    fetch('https://randomuser.me/api/').then(fun=>{
        return fun.json();
    }).then((data)=>{
        var user=data.results[0];
        name.innerHTML=user.name.title+" "+user.name.first+" "+user.name.last;
        age.innerHTML=user.dob.age;
        phone.innerHTML=user.phone;
        mail.innerHTML=user.email;
    })
})
// setInterval(()=>{
//     var name=document.getElementById("name");
//     var age=document.getElementById("age");
//     var phone=document.getElementById("ph");
//     var mail=document.getElementById("mail");
//     fetch('https://randomuser.me/api/').then(fun=>{
//         return fun.json();
//     }).then((data)=>{
//         var user=data.results[0];
//         name.innerHTML=user.name.title+" "+user.name.first+" "+user.name.last;
//         age.innerHTML=user.dob.age;
//         phone.innerHTML=user.email;
//         mail.innerHTML=user.phone;
//     })
// },7000)