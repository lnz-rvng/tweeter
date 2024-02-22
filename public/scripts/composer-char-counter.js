$(document).ready(() => {

  const charCounter = function() {
    const maxLength = 140;
    const length = $(this).val().trim().length;
    const remainingChar = maxLength - length;

    $('.counter').text(remainingChar);

    $('.counter').css('color', remainingChar < 0 ? 'red' : '#312e2ebf');
  };

  $('#tweet-text').on('input', charCounter);
});