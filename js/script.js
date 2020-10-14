// Declare Variables
const heights = window.innerHeight;
const content = document.querySelector(".wrapper")

// Declare function
function resizeHandler() {
  content.style.height = heights + "px";
}

// Add event listener that fires on window resize
window.addEventListener('resize', resizeHandler());


// Another method
// Call/invoke function
// resize();

// This fires when the document window resizes
// window.onresize = function() {
//    resize();
//  };


