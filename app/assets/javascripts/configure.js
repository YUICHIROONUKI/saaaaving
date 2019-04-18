$(document).on('turbolinks:load', function(){
  $('.header__edit__user').on('click', function(){
    $(".header__edit__user__list").toggle();
  });
});

$(document).on('turbolinks:load', function(){
  $('.header__edit__goal').on('click', function(){
    $(".header__edit__goal__edit").toggle();
  });
});
$(document).on('turbolinks:load', function(){
  $('.header__edit__goal').on('click', function(){
    $(".header__edit__goal__destroy").toggle();
  });
});