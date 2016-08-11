$(document).ready(function() {
  
  $('#left li').click(function() {
    
    $('#content').empty();
    
  	var selected = $(this).attr('class');
  	
  	console.log(selected);
  	
  	if (selected === 'sorting') {
  	  $('.info').hide();
  	  $('.pagination').show();
  	  $('#content').append('<img src="/img/Flag.svg"/>');
  	} else if (selected === 'architect') {
  	  $('.info').hide();
  	  $('.pagination').show();
  	  $('#content').append('<img src="/img/Corner.svg"/>');
  	} else if (selected === 'isometric') {
  	  $('.info').hide();
  	  $('.pagination').show();
  	  $('#content').append('<img src="/img/Stairs.svg"/>');
  	} else if (selected === 'flag') {
  	  $('.info').hide();
  	  $('.pagination').show();
  	  $('#content').append('<img src="/img/Beam.svg"/>');
  	}
  });
  
  $('.header').click(function() {
    $('.info').show();
    $('.pagination').hide();
    $('#content').empty();
  });
  
});
