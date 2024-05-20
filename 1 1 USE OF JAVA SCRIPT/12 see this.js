var bdy=document.body;
var head=document.createElement("h1");
head.innerText="Head tag created inside the java script";
bdy.appendChild(head);
head.style.color="blue";

// here we create an attribute 
var clas=document.createAttribute("class");
clas.value="headclass"; // here we set it's value 
head.setAttributeNode(clas); // this is the new method of setting the attributes
// but here we are setting an complete attribute node , not name and values pairs 

console.log(head)
head.focus(); // don't know w.t.f this method do till now 
// contains() method// this method returns boolean value whether our desired child 
// is contained inside the parent object or not 
console.log(bdy.contains(head));

console.log(head.hasAttribute("id")); // boolean values based on whether head has 
//  id attribute or not 

console.log(head.hasAttributes());// boolean values if has any one attributes
// returns false only if has no any attributes 

