$(document).ready(function() {
  
  var selected = $(this).attr('class');
  
  $('#header li').click(function() {
    console.log(selected)
  });
  
});
