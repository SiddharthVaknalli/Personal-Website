$(document).ready(function(){
  $(".role").typed({
    strings: ["full stack developer.", "web designer."],
    contentType: 'text',
    backDelay: 1000,
    callback: typingCallback
  });
});

function typingCallback() {
  setTimeout(function() {
    $(".description").hide().text("Full Stack Developer | Web Designer").fadeIn("slow", function() {
      $(".intro-content").slideDown("slow");
    });
  }, 1000)
}