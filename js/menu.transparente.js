
  $(window).scroll(function() {
    if($(this).scrollTop() > 680)
    {
        $('.navbar').addClass('opaque');
    } else {
        $('.navbar').removeClass('opaque');
    }
});