$(document).ready(function() {
  
  $('#header li').click(function() {
  	var selected = $(this).attr('class');
  	console.log(selected);
  	
  	if (selected === 'sorting') {
  	  $('#content').append('<img src="/img/Flag.svg"/>');
  }
  });
  
});
