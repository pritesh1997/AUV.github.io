window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}

var navDisp = document.getElementById("navDisp");
var applied = document.getElementById("applied");
function myFunction(x) {
	if (navDisp.className === 'dispNone') {
	  navDisp.className = 'disp';
	  applied.classList.remove("nodis");
	  applied.classList.add("dis");
	  x.classList.add("change");
	}
	else {
	  navDisp.className = 'dispNone';
	  applied.classList.remove("dis");
	  applied.classList.add("nodis");
	  x.classList.remove("change");
	}
}