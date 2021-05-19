let rainbow=["voilet","indigo","blue","green","yellow","orange","red"];
// print all elements
console.log(rainbow);
// print first element
console.log(rainbow[0]);
// print thord element
console.log(rainbow[2]);
//change the value of last color
rainbow[rainbow.length-1]="ultraviolet";
console.log(rainbow);
//add color to the last
rainbow.push("hot pink");
console.log(rainbow);
//removing the color from last
rainbow.pop();
console.log(rainbow);
console.table(rainbow);
//printing the length of color
console.log(rainbow.length);
for(let index=0;index<rainbow.length;index++)
{
    console.log(index+"------>"+rainbow[index]);
}
let last_color=rainbow[rainbow.length-1];
console.log(last_color);