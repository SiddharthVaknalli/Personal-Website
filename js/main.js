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

});