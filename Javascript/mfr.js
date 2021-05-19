var sum=[2,4,13,45,21,90].reduce((total,initial)=>{
    return total+initial;
},0);
console.log(sum);
var element=[2,35,6,76,53,21].filter((ele)=>{
    return ele%2==0;
});
console.log(element);
var result=element.filter((ele)=>
{
    return ele%2==0;
});
console.log(result);
var date=["23-10","10-01","02-01"].map((ele)=>
{
    return ele.replace("-","/");
});
console.log(date);
let number=[34,67,31,90,88,87].filter((check)=>
{
    if(check%2==0)
    {
        console.log(`${check} is even`);
    }
    else{
        console.log(`${check} is odd`);
    }
});
console.log(number);
var number1=[4,3,21,56,78].reduce((total,initial)=>
{
    return total+initial;
},0);
console.log(number1);
let num=[-8,4,-90,56,43].filter((check)=>{
    if(check<0)
    {
        console.log(`${check} is negative`);
    }
    else{
        console.log(`${check} is positive`);
    }
});
let num=[1,2,3].map((ele)=>{
    return ele*ele;
}).reduce((final,initial)=>
{
    return final+initial;
},0)
console.log(num);
let num=[1,2,3].map(function(ele){
    return ele*3;
});
console.log(num);
let num=[1,2,3].map((ele)=>{
    return ele*3;
})
console.log(num);