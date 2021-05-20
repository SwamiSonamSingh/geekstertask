function fn(){
    var p=new Date();
    var second=p.getSeconds();
    var minute=p.getMinutes();
    var hour=p.getHours();
    document.getElementById("show").innerHTML=clock(hour,minute,second);
    setTimeout(fn,1000);
}
fn();
function clock(hour,minute,second){
    var result=" ";
    if(hour==0){
        result=result+"12: ";
    }
    else if(hour>0 && hour<=12){
        if(hour>0 && hour<=9){
            result=result+"0"+hour+":";
        }
        else{
            result=result+hour+":";
        }
    }
    else{
        var count=hour-12;
        if(count>0 && count<=9){
            result=result+"0"+count+":";
        }
        else{
            result=result+count+":";
        }
    }
    if(minute<=9){
        result=result+"0"+minute+":";
    }
    else{
        result=result+minute+":";
    }
    if(second<=9){
        result=result+"0"+second+" ";
    }
    else{
        result=result+second+" ";
    }
    if(hour<=11){
        result=result+"AM"
    }
    else{
        result=result+"PM";
    }
    return result;
}
