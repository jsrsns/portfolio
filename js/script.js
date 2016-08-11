$(document).ready(function() {
  
  $('#header li').click(function() {
  	var selected = $(this).attr('class');
  	console.log(selected);
  });
  
});
