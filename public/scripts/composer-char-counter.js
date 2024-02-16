$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    var maxLength = 140;
    var length = $(this).val().length;
    var remainingChar = maxLength - length;

    $('.counter').html(remainingChar);

    if (remainingChar < 0) {
     $('.counter').css('color', 'red')
    }

  });
});