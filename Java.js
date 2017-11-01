var navbar1 = document.getElementById("navbar1");
var sticky = navbar1.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar1.classList.add("sticky")
  } else {
    navbar1.classList.remove("sticky");
  }
}
