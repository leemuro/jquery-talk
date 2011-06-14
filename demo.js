$(function() {

  if($.fn.blunder)
    $('form').blunder();

  if($.fn.deleteList)
    $('.listing.deletable').deleteList();

  if($.fn.columnize) {
    $('.categories div').addClass('dontsplit');
    $('.categories').columnize({columns: 3});
  }

  if($.fn.liveUpdate)
    $('.search').liveUpdate('.categories ul');
});

