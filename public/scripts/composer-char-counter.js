$(document).ready(() => {

  // count the remaining character available for the user
  const charCounter = function() {
    const maxLength = 140;
    const length = $(this).val().trim().length;
    const remainingChar = maxLength - length;

    $('.counter').text(remainingChar);

    $('.counter').css('color', remainingChar < 0 ? 'red' : '#312e2ebf');
  };

  $('#tweet-text').on('input', charCounter);

  // event handler for scroll on the webpage
  const windowScroll = () => {
    if ($(this).scrollTop()) {
      $("nav").css("backgroundColor", "transparent");
      $(".write-tweet").css("opacity", "0");
      $(".logo").css("position", "sticky");
      return $(".btn-holder").fadeIn("fast");
    }

    if (!$(this).scrollTop()) {
      $("nav").fadeIn("fast");
      $(".write-tweet").css("opacity", "1");
      $("nav").css("backgroundColor", "#4056a1");
      return $(".btn-holder").fadeOut("fast");
    }
  };
  
  $(window).on('scroll', windowScroll);

  // event handler for clicking the button
  $(".btn-holder").on("click", () => {
    $('html').animate({
      scrollTop: 0
    }, "fast");

    $(".new-tweet").fadeIn("fast");
    $("textarea").trigger("focus");
  });
});