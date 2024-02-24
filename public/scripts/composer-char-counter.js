$(document).ready(() => {

  const charCounter = function() {
    const maxLength = 140;
    const length = $(this).val().trim().length;
    const remainingChar = maxLength - length;

    $('.counter').text(remainingChar);

    $('.counter').css('color', remainingChar < 0 ? 'red' : '#312e2ebf');
  };

  $('#tweet-text').on('input', charCounter);

  $(window).on('scroll',function() {
    
    if ($(this).scrollTop()) {
      $("nav").css("opacity", "0");
      return $(".btn-holder").css("display", "inline")
    }

    if (!$(this).scrollTop()) {
      $("nav").css("opacity", "1");
      return $(".btn-holder").css("display", "none")
    }
  })

  $(".btn-holder").on("click", () => {
    $('html').animate({
      scrollTop: 0
    }, "slow")

    $(".new-tweet").fadeIn("slow");
  })
});