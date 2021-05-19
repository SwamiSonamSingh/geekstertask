function rectangle(height,width){
    this.height=height;
    this.width=width;
    this.area=function(){
       return this.height*this.width;
   }
   this.perimeter=function(){
       return (this.height+this.width)*2;
   }
}
var a= new rectangle(3,4);
console.log(a.area());
console.log(a.perimeter());
function start(x1,y1){
    this.x1=x1;
    this.y1=y1;
    this.distance=function end(x2,y2){
        this.x2=x2;
        this.y2=y2;
        return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
    }
}
var d=new start(4,5);
console.log(d.distance(3,8));