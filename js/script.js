$(document).ready(function() {
  
  $('#header li').click(function() {
  	var selected = $(this).attr('class');
  	console.log(selected);
  	
  	if (selected === 'sorting') {
  	  $('#content').append('<img src="/img/Flag.svg"/>');
  	} else if (selected === 'architect') {
  	  $('#content').append('<img src="/img/Corner.svg"/>');
  	} else if (selected === 'isometric') {
  	  $('#content').append('<img src="/img/Stairs.svg"/>');
  	} else if (selected === 'flag') {
  	  $('#content').append('<img src="/img/Beam.svg"/>');
  	}
  });
  
});
