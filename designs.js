// Select color input
function changeColor() {
    const color = document.getElementById("colorPicker").value;
    this.style.background = color;
}
// Select size input


// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const gridHeight = document.getElementById("inputHeight").value;
    const gridWidth = document.getElementById("inputWidth").value;
    const pixelCanvas = document.getElementById("pixelCanvas"); 
    pixelCanvas.innerText=""; // empty table   
    
    for (let h=0; h<gridHeight; ++h) {
        const row = pixelCanvas.insertRow(-1); // insert new row at the last position
        for (let w=0; w<gridWidth; ++w) {
            const cell = row.insertCell(-1); //insert new cell at the last position
            cell.onclick = changeColor;
            
        }
    }
    event.preventDefault();
}

function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}

