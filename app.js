//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, Edge and Opera
}
// Theme
const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body")
const darkmode = localStorage.getItem("dark");
if(darkmode){
  body.classList.add("dark");
  themeToggle.checked = true;
}
themeToggle.addEventListener("change", function(){
  body.classList.toggle("dark");
  if(body.classList.contains('dark')){
    localStorage.setItem("dark", "active");
  } else {
    localStorage.removeItem("dark")
  }
});