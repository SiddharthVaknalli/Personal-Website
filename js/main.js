$(document).ready(function(){

  // Add smooth scrolling to all links in navbar
  $(".nav-list-item a").not(".resume").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 700, function(){
      window.location.hash = hash;
    });
  });
});