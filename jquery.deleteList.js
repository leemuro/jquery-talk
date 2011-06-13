(function($) {
  $.fn.deleteList = function() {
    var $this = $(this);

    $('.delete-button', $this).hide();

    $this.find('li').each(function() {
      $deleteToggle = $('<button class="delete-toggle"></button>').hide();
      $deleteToggle.click(function() {
        $deleteButton = $(this).parent().find('.delete-form .delete-button');

        $('.delete-toggle', $this).rotate({animateTo: 0, duration: 200});
        $('.delete-button', $this).not($deleteButton).slideOut();

        if($deleteButton.is(':visible')) {
          $(this).rotate({animateTo: 0, duration: 200});
          $deleteButton.slideOut();
        }
        else {
          $(this).rotate({animateTo: 90, duration: 200});
          $deleteButton.slideIn();
        }
      });

      $(this).prepend($deleteToggle);
    });

    $editButton = $('<button class="edit-button">Edit</button>');
    $editButton.click(function() {
      if($editButton.text() == 'Done') {
        $editButton.text('Edit');
        $('.delete-toggle', $this).slideOut().rotate({animateTo: 0, duration: 200});
        $('.delete-button', $this).slideOut();
      }
      else {
        $editButton.text('Done');
        $('.delete-toggle', $this).slideIn();
      }
    });
    $this.prepend($editButton);

    return $(this);
  };

  $.fn.slideIn = function() {
    width = $(this).outerWidth();
    $(this).width(0).show().animate({width: width}, 100);
    return $(this);
  };

  $.fn.slideOut = function() {
    var width = $(this).outerWidth();
    $(this).animate({width: 0}, 100, function() {
      $(this).hide().width(width);
    });
    return $(this);
  };
})(jQuery);
