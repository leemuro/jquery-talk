(function($) {
  $.fn.inlineConfirm = function() {
    $this = $(this);

    $this.click(function(e) {
      if(!$this.data('confirmState')) {
        var warningText = $this.attr('data-warning');
        var confirmText = $this.attr('data-confirm');
        var $warning = $('<p class="warning">' + warningText + '</p>');
        $this.before($warning)
          .growToText(confirmText)
          .data('confirmState', true);
        return false;
      }
    });

    return $this;
  };

  $.fn.growToText = function(text) {
    var $this = $(this);
    var initialWidth = $this.outerWidth();
    $this.hide().val(text);
    var newWidth = $this.outerWidth();
    $this.width(initialWidth).show().animate({width: newWidth}, 250);
    return $this;
  };

})(jQuery);
