// Declare Variables
const heights = window.innerHeight;
const content = document.querySelector(".wrapper")

// Declare function
function resize() {
  content.style.height = heights + "px";
}

// Call/invoke function
resize();

// This fires when the document window resizes
window.onresize = function() {
   resize();
 };
