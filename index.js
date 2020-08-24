// Write your code here!

//no longer has DOM node 'main#main'
document.getElementById("main").remove();

//has a 'newHeader' variable that points to node 'h1#victory'
let newHeader = document.createElement("h1");

//has a 'newHeader' variable that points to node 'h1#victory'
let att = document.createAttribute("id");
att.value = "victory"
newHeader.setAttributeNode(att);

//has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.textContent = "Taci is the champion";

console.log(newHeader);
