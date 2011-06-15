(function($) {
  $.fn.deleteList = function() {
    var $list = $(this);

    $('.delete-button', $list).hide();

    $list.find('li').each(function() {
      $deleteToggle = $('<button class="delete-toggle"></button>').hide();
      $deleteToggle.click(function() {
        $deleteButton = $(this).parent().find('.delete-form .delete-button');

        $('.delete-toggle', $list).rotate({animateTo: 0, duration: 200});
        $('.delete-button', $list).not($deleteButton).slideOut();

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

    $editButton = $('<button class="button">Edit</button>');
    $editButton.click(function() {
      if($editButton.text() == 'Edit') {
        $editButton.text('Done');
        $('.delete-toggle', $list).slideIn();
      }
      else {
        $editButton.text('Edit');
        $('.delete-toggle', $list).slideOut().rotate({animateTo: 0, duration: 200});
        $('.delete-button', $list).slideOut();
      }
    });
    $list.prepend($editButton);

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
