
(function($) {
  $.fn.blunder = function() {
    $this = $(this);
    $errors = $('.errors ul li', $this);
    $errors.each(function() {
      $error = $(this);
      $field = $('#' + $error.attr('data-errorkey')); 
      $field.addClass('error').after($('<span>' + $error.text() + '</span>'));
      $error.addClass('error-link').attr('title', 'Go to error').click(function() {
        $field.focus();
      });
    });
  };
})(jQuery);

$(function() {
  $('form').blunder();
});
