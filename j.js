var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var electrical = document.getElementById("e");
var mechanical = document.getElementById("m");
var software = document.getElementById("s");
var elec = document.getElementById("electrical");
var mec = document.getElementById("mechanical");
var sof = document.getElementById("software");

function elect() {
  electrical.classList.remove("active"); 
  mechanical.classList.remove("active");
  software.classList.remove("active");
  electrical.classList.add("active");
  elec.classList.remove("dshow");
  mec.classList.remove("dshow");
  sof.classList.remove("dshow");
  elec.classList.remove("show");
  mec.classList.remove("show");
  sof.classList.remove("show");
  elec.classList.add("show");
  mec.classList.add("dshow");
  sof.classList.add("dshow");
}


function mech() {
  electrical.classList.remove("active"); 
  mechanical.classList.remove("active");
  software.classList.remove("active");
  mechanical.classList.add("active");
  elec.classList.remove("dshow");
  mec.classList.remove("dshow");
  sof.classList.remove("dshow");
  elec.classList.remove("show");
  mec.classList.remove("show");
  sof.classList.remove("show");
  mec.classList.add("show");
  elec.classList.add("dshow");
  sof.classList.add("dshow");
}

function soft() {
  electrical.classList.remove("active"); 
  mechanical.classList.remove("active");
  software.classList.remove("active");
  software.classList.add("active");
  var soft = document.getElementById("software");
  elec.classList.remove("dshow");
  mec.classList.remove("dshow");
  sof.classList.remove("dshow");
  elec.classList.remove("show");
  mec.classList.remove("show");
  sof.classList.remove("show");
  sof.classList.add("show");
  elec.classList.add("dshow");
  mec.classList.add("dshow");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
