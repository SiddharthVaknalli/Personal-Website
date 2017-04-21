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

  var messageTimer = null;

  // Submit contact form through an AJAX post request
  $('#contact-form').submit(function(event) {
    event.preventDefault();

    var form = $(this);
    var contactData = form.serialize();

    var submitMessage = $('.submit-message');

    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: contactData
    })
    .done(function(response) {
      submitMessage.show();
      submitMessage.html(response);
      submitMessage.removeClass('red');
      submitMessage.addClass('green');
      clearTimeout(messageTimer);
      messageTimer = setTimeout(function() {
        submitMessage.fadeOut("slow");
      }, 3000);
      form[0].reset();
    })
    .fail(function(data) {
      submitMessage.show();
      submitMessage.html(data.responseText);
      submitMessage.removeClass('green');
      submitMessage.addClass('red');
      clearTimeout(messageTimer);
      messageTimer = setTimeout(function() {
        submitMessage.fadeOut("slow");
      }, 3000);
    });
  });

  setTimeout(function() {
    $('.intro-section').fadeIn("slow", function() {
      $('.nav-container').slideDown();
    });
  }, 1000);

  var waypoint = $('#about').waypoint({
    handler: function(direction) {
      console.log("You have scrolled to the about section");
      $(this.element.children[0]).animate({
        opacity: 'toggle',
        'padding-top': 100
      }, 800);
      this.destroy();
    },
    offset: '70%'
  });

  adjustDimensions();
});

$(window).resize(function() {
  adjustDimensions();
});

function adjustDimensions() {
  $('#about').height($('#about').children(':first').height() + 200);
}

