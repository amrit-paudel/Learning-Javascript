// program to print the fibonachi series 
var num=prompt("enter the number up to where we print the fibonachi series ")
var t1=0;
var t2=1;
console.log(t1);
console.log(t2);

for(let j=0;j<=num;j++){
   
    tn=t1+t2;
    
    t1=t2;
    t2=tn
    console.log(tn)
}