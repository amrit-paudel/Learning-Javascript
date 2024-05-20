// program to calculate the prime numbers from 1 to given number 
var num=prompt("Enter a number up to which to calcuoate the primes ");
prime(num);
function prime(num){
    var count=0;
 
    for(let i=2;i<=num;i++){
           
        for(var j=2;j<=i;j++){
            if(i%j==0){break;}
        }
        if(j==i){count++;
        console.log(i);
        }


    }
    console.log('number of primes is '+count)

}