// everything in the json is a valid java script code 
// so here it doesnot mater that there are double quotes in the keys also
var newjson=[
    {
        "schoolname":"Ekata Shishu Niketan",
        "Teachers":30,
        "students":800
    },
    {
        "collegename":"Orchid Science College",
        "Teachers":60,
        "students":2000
    }
]
console.log(newjson[0].schoolname) // now we are accessing the object 
// which is inside the array

// now lets make whole json code in to string which is
// the generl cse when data in nterchanged in between the clients and servers

var newjson1=`[
    {
        "schoolname":"Ekata Shishu Niketan",
        "Teachers":30,
        "students":800
    },
    {
        "collegename":"Orchid Science College",
        "Teachers":60,
        "students":2000
    }
]`
console.log(newjson1) // here whole string is printed 
// now lets convert that JSON data into the java script object which is the case
//  when we are interacting with the server
// using JSON.parse() method

var parsedjson=JSON.parse(newjson1);
console.log(parsedjson);
console.log(parsedjson[0]);
console.log(parsedjson[1]);
console.log(parsedjson[0].schoolname)