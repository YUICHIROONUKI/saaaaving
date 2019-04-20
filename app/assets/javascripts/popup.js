$(document).ready(function() {
  $('#demo-button').bind('click', function(e) {
    e.preventDefault();
    $('#demo-popup').bPopup({
      follow: [false, false],
      position: [200, 0],
    });
  });
});
