var json={
    "key1":"value of key 1",
    "key2":"Value ofkey2",
    "key3":"Vlaue of key3"
}
console.log(json.key1) // this works since everycode od json is also a valid jaavs script 
// now lets convert everything in to the JSON data representation which is normally string
var json1=`{
    "key1":"value of key 1",
    "key2":"Value ofkey2",
    "key3":"Vlaue of key3"
}`
console.log(json1)// see it's the string, or pure json data
var parsedjson=JSON.parse(json1);
console.log(parsedjson);
console.log(parsedjson.key1)