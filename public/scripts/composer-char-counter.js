$(document).ready(() => {

  const charCounter = function () {
    const maxLength = 140;
    const length = $(this).val().length;
    const remainingChar = maxLength - length;

    $('.counter').html(remainingChar);

    if (remainingChar < 0) {
     $('.counter').css('color', 'red')
    }

    if (remainingChar > 0) {
      $('.counter').css('color', '#312e2ebf')
    }
  }

  $('#tweet-text').on('input', charCounter);
});