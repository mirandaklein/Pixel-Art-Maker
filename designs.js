const pixelCanvas = document.getElementById("pixelCanvas");


//Changes cell based on color chosen
function changeColor() {
    
  const color = document.getElementById("colorPicker").value;
  this.style.background = color;
}
/*
function changeColor() {
  console.log(this.onmousedown)
  this.onmousedown = function() {
    const color = document.getElementById("colorPicker").value;
    this.style.background = color;
  }
}

*/

//Makes initial grid on load, makes grid based on height x width, clears grid
function makeGrid() {
  const gridRow = document.getElementById("inputHeight").value;
  const gridCells = document.getElementById("inputWidth").value;
  pixelCanvas.innerText = ""; // empty table

  for (let r = 0; r < gridRow; ++r) {
    const row = pixelCanvas.insertRow(-1); // insert new row at the last position
    for (let c = 0; c < gridCells; ++c) {
      const cell = row.insertCell(-1); //insert new cell at the last position
      
      cell.onclick = changeColor;
 }

}  
  
  event.preventDefault();
}



//Switch between light and dark mode
let isDark = false;
console.log("first time isDark:", isDark)
function clickStyleChange() {
  const pageStyle = document.getElementById("pagestyle");
  isDark = !isDark;
  console.log("clicked isDark:", isDark)
  if (isDark) {
    pageStyle.setAttribute("href", "stylesDark.css");
    return;
  }
  pageStyle.setAttribute("href", "styles.css");
}

// example
//  isDark ? pageStyle.setAttribute("href", "stylesDark.css"): pageStyle.setAttribute("href", "styles.css");  
