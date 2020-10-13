// Declare Variables
const heights = window.innerHeight;
const browserWindow = document.querySelector("html")

// Declare function
function resize() {
  browserWindow.style.height = heights + "px";
}

// Call/invoke function
resize();

// This fires when the document window resizes
window.onresize = function() {
   resize();
 };
