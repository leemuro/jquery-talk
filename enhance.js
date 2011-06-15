$(function() {
  $('[data-confirm]').inlineConfirm();

  // for demo only, to show effect on button for 5 seconds
  $('form input[type=submit]:not([data-confirm])').click(function() {
    setTimeout(function() { window.location = window.location; }, 5000);
  });

  // $('form input[type=submit]').click(function() {
  //   $(this).val('Submitting...').attr('disabled', 'disabled');
  // });

  $('[data-submit]').click(function() {
    var message = $(this).attr('data-submit');
    $(this).val(message).attr('disabled', 'disabled');
  });


  if($.fn.blunder)
    $('form').blunder();

  if($.fn.deleteList)
    $('.listing.deletable').deleteList();

  if($.fn.columnize) {
    $('.categories div').addClass('dontsplit');
    $('.categories').columnize({columns: 3});
  }

  if($.fn.liveUpdate)
    $('.search').liveUpdate('.searchable ul');
});

