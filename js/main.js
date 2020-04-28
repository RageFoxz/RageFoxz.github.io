$(document).ready(function(){
    $("#burger-container").on('click', function(e){
        $(this).toggleClass("open");
        e.stopPropagation();
    });
    let navToggle = $("#burger-container");
    let nav = $(".main-menu__holder")


  navToggle.on("click", function(event){
    event.preventDefault();
    nav.toggleClass("active");
  });

  $('.closebtn').on('click', function(event){
    event.preventDefault();
    nav.removeClass('active');
    navToggle.removeClass('open');
  });

  $(window).click(function (event) {
    if (! $(".main-menu__holder").is(event.target) && $(".main-menu__holder").has(event.target).length === 0) {
      $(".main-menu__holder").removeClass('active');
      $("#burger-container").removeClass('open');
    }
  });
}); 
