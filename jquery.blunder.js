// jquery.blunder

(function($) {
  $.fn.blunder = function() {
    $this = $(this);
    $errors = $('.errors ul li', $this);
    $errors.each(function() {
      var $error = $(this);
      var $field = $('#' + $error.attr('data-errorkey')); 
      $field.addClass('error').after($('<span>' + $error.text() + '</span>'));
      $error.addClass('error-link').click(function() {
        $field.focus();
      });
    });
  };
})(jQuery);
