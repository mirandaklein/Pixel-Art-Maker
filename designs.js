const pixelCanvas = document.getElementById("pixelCanvas");


//Changes cell based on color chosen
function changeColor() {
  const color = document.getElementById("colorPicker").value;
  this.style.background = color;
}


//Makes initial grid on load, makes grid based on heigth x width, clears grid
function makeGrid() {
  const gridHeight = document.getElementById("inputHeight").value;
  const gridWidth = document.getElementById("inputWidth").value;
  pixelCanvas.innerText = ""; // empty table

  for (let h = 0; h < gridHeight; ++h) {
    const row = pixelCanvas.insertRow(-1); // insert new row at the last position
    for (let w = 0; w < gridWidth; ++w) {
      const cell = row.insertCell(-1); //insert new cell at the last position
      cell.onclick = changeColor;
      cell.onmouseover= changeColor;
  };
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
