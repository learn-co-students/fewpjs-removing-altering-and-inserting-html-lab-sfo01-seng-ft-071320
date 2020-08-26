// Write your code here!

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Chonk is the champion"
document.body.appendChild(newHeader)

function removeMain() {
   const noMain =  document.getElementById('main');
    noMain.remove()
}
removeMain()