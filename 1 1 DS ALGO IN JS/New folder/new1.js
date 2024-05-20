// checking whether the string is a pallindrom or not
var string="racecar";
var rstring="";
var arr=[];

// now putting each words in the array
for(i=0;i<=string.length-1;i++){
    arr.push(string[i]);
}

// now lets put the letters in rstring variable in reversed order
for(i=0;i<=string.length-1;i++){
    rstring+=arr.pop();
}

// now lets check whether our reversed one tally with our original or not

if(rstring===string){
    console.log("given "+string+" is pallindrome");
}
else{
    console.log("diven "+string+" is not a pallindrome");
}