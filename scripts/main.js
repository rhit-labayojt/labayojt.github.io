
//Scroll to Top Button
scrollbutton = document.getElementById("scrollBtn");


// When scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When click on the button, smooth scroll to the top
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

//hamburger home button
function toggleMenu() {
  var nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}
