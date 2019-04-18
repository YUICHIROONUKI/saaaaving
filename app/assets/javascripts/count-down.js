$(document).on('turbolinks:load', function(){
  countDown();
});
function countDown() {
  var startDateTime = new Date();
  console.log(startDateTime);
  var endDate = $('.count-down__time').attr("id");
  var jpn = 9 * 60 * 60 * 1000;
  var endDateTime = new Date(endDate);
  console.log(endDateTime);
  var left = endDateTime - startDateTime - jpn;
  console.log(left);
  var a_day = 24 * 60 * 60 * 1000;
  var d = Math.floor(left / a_day) 
  var h = Math.floor((left % a_day) / (60 * 60 * 1000)) 
  var m = Math.floor((left % a_day) / (60 * 1000)) % 60 
  var s = Math.floor((left % a_day) / 1000) % 60 % 60 

  $(".count-down__time").text(d + '日' + h + '時間' + m + '分' + s + '秒');
    setTimeout('countDown()', 1000);
  if (d === 0 && h === 0 && m === 0 && s === 0) {
  };
}
