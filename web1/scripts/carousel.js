/* SPECIAL THANKS: W3SCHOOLS */
var slideIndex = 0;
function initCarousel() {
	showSlides();
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  //n==null => automatic
  if (n==null)
  	slideIndex++;
  console.debug ("slideIndex: " + slideIndex);
  var i;
  var slides = document.getElementsByClassName("carouselDiv");
  var dots = document.getElementsByClassName("carouselDot");
  console.debug ("slides size: " + slides.length);
  if (slideIndex > slides.length) {slideIndex = 1} 
  if (slideIndex < 1) {slideIndex = slides.length}
  	console.debug ("-> new slideIndex: " + slideIndex);
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" carouselActive", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " carouselActive";

  if (n==null)
  	setTimeout(showSlides, 4000);
}