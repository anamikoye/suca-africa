// navigation slide-in
$(window).load(function() {
  $('.nav_slide_button').click(function() {
    $('.pull').slideToggle();
  });
});

$(document).ready(function() {
  $('.thumbnail').click(function(){
        $('.modal-body').empty();
      var title = $(this).parent('a').attr("title");
      $('.modal-title').html(title);
      $($(this).parents('div').html()).appendTo('.modal-body');
      $('#myModal').modal({show:true});
  });
  });

// $(document).ready(function () {
//     resetForms();
// });
