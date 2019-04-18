$(document).on('turbolinks:load',function(){
  setInterval('countUp()', 1000);
  expenditure();
});
function countUp() {
  var currentSaveMoney = $('.save__current').attr('currentsave_id');
  var incomeMonth = $('.save__current').attr('id');
  var incomeYear = incomeMonth * 12;
  var incomeDay = incomeYear / 365;
  var incomeHour = incomeDay / 24;
  var incomeSec = incomeHour / 3600;
  var startDate = $('.save__current').attr('create_id');
  var startDateTime = new Date(startDate);
  var currentDateTime = new Date();
  var spendDate = currentDateTime - startDateTime;
  var currentSave = incomeSec * spendDate / 1000;
  console.log(currentSave);
  var realTimeSave = currentSave + currentSaveMoney * 1;
  var href = window.location.href;
  $.ajax({
    type: 'GET',
    url: href,
    dataType: 'json'
  })
  .always (function(data){
    $('.save__current').text(realTimeSave + data.total + "円");
  });
};

function expenditure(){
  $('.form__pay__money__submit').on('submit', function(e){
    e.preventDefault();
    var data = $('.form__pay__money__field');
    $.ajax({
      type: 'post',
      data: data,
      url: '/expenditures',
      dataType: 'json'
    })
    .always (function(data){
      $('.form__pay')[0].reset();
    });
  });
};

function income(){
  $('.form__get__money__submit').on('submit', function(e){
    e.preventDefault();
    var data = $('.form__get__money__field');
    $.ajax({
      type: 'post',
      data: data,
      url: '/incomes',
      dataType: 'json'
    })
    .always (function(data){
      $('.form__get')[0].reset();
    });
  });
};

