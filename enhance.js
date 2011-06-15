$(function() {

  $('[data-submit]').click(function() {
    var message = $(this).attr('data-submit');
    $(this).val(message).attr('disabled', 'disabled');
  });

  if($.fn.inlineConfirm)
    $('[data-confirm]').inlineConfirm();

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

