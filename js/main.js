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

  var aboutWaypoint = $('#about').waypoint({
    handler: function(direction) {
      var aboutSection = $(this.element.children[0]);
      aboutSection.css('visibility', 'visible');
      aboutSection.addClass("animated fadeInUp");
      this.destroy();
    },
    offset: '70%'
  });

  var projectsWaypoint = $('#projects').waypoint({
    handler: function(direction) {
      var projectTitle = $('#projects .section-title');
      projectTitle.css('visibility', 'visible');
      projectTitle.addClass("animated fadeInLeft");
      this.destroy();
    },
    offset: '80%'
  });

  var projectTitleWaypoints = $('.project-title').waypoint({
    handler: function(direction) {
      var el = $(this.element);
      el.css('visibility', 'visible');
      el.addClass("animated fadeIn");
      this.destroy();
    },
    offset: '90%'
  })

  var contactWaypoint = $('#contact').waypoint({
    handler: function(direction) {
      var contactSection = $(this.element.children[0]);
      contactSection.css('visibility', 'visible');
      contactSection.addClass("animated slideInUp");
      contactSection.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#contact .section-title').addClass("animated bounce");
      });
      this.destroy();
    },
    offset: '70%'
  });
});