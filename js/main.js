$(document).ready(function(){

  // Add smooth scrolling to all links in navbar
  $(".nav-list-item a").not(".resume").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 40 // Extra offset of 40px is to account for navbar height
    }, 700, function(){
      window.location.hash = hash;
    });
  });
});