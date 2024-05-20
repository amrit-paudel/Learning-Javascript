function fact(num){                   // factorial calculating function 
    if(num==0){return 1}
    if(num==1){return num}
    else{
        return num*fact(num-1)
    }
}


function power(x,num){                     // exponenting function 
    return Math.pow(x,num);
}

var x=prompt("enter value of x ");
var num=prompt("enter the value of num");
var result=0;


ekopowerx(num,x);                             // calling the function 


 function ekopowerx(num,x){                    // making the function 
    for(let i=0;i<=num;i++){
        result+=power(x,i)/fact(i);
    }
    console.log('ekopower'+x+' is '+result);
 }
