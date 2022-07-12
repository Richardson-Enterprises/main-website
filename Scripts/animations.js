$(window).on("load", function() {
  $(window).scroll(function() {
    var windowTop = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectTop = $(this).offset().top + $(this).outerHeight() * 0.5;

      /* If the element is completely within bounds of the window, fade it in */
      if (objectTop < windowTop) { //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) { $(this).fadeTo(1500, 1); }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

$(document).ready(function() {
  $('div.toshow').fadeIn(3000);
});
