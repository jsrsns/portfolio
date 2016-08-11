$(document).ready(function() {
  
  $('#left li').click(function() {
    
    $('#content').empty();
    
  	var selected = $(this).attr('class');
  	
  	console.log(selected);
  	
  	if (selected === 'sorting') {
  	  $('.pagination').show();
  	  $('#content').append('<img src="/img/Flag.svg"/>');
  	} else if (selected === 'architect') {
  	  $('.pagination').show();
  	  $('#content').append('<img src="/img/Corner.svg"/>');
  	} else if (selected === 'isometric') {
  	  $('.pagination').show();
  	  $('#content').append('<img src="/img/Stairs.svg"/>');
  	} else if (selected === 'flag') {
  	  $('.pagination').show();
  	  $('#content').append('<img src="/img/Beam.svg"/>');
  	}
  });
  
  $('.header').click(function() {
    $('.pagination').hide();
    $('#content').empty();
  });
  
});
