$(document).ready(function() {
  
  $('#left li').click(function() { // click an item in the list
    
    $('#content').empty(); // clear the content
    
  	var selected = $(this).attr('class'); // get the class of the item in the list
  	var images = [];
  	
  	console.log(selected); // log the class of the selected item (for debug only)
  	
  	if (selected === 'sorting') { // for this selection
  	  $('.info').hide(); // hide the info
  	  $('.pagination').show(); // show the pagination
  	  
  	  var images = ["/img/Flag.svg","/img/Corner.svg","/img/Ladder.svg"];
  	  index=0;
  	  
  	  $('#content').append('<img src="'+images[index]+'"/>'); // add image to content
  	}
  	
  	else if (selected === 'architect') {
  	  $('.info').hide();
  	  $('.pagination').hide();
  	}
  	
  	else if (selected === 'isometric') {
  	  $('.info').hide();
  	  $('.pagination').show();
  	  
  	  var images = ["/img/Stairs.svg","/img/Beam.svg","/img/Floor.svg"];
  	  index=0;
  	  
  	  $('#content').append('<img src="'+images[index]+'"/>'); // add image to content
  	}
  	
  	else if (selected === 'flag') {
  	  $('.info').hide();
  	  $('.pagination').hide();
  	}
  	
  	$('.next').click(function(){
  	  index = (index==images.length-1)?0:(index+1);
    $('#content img').attr('src',images[index]);   
  	});
  	$('.prev').click(function(){
  	  index = (index==0)?(images.length-1):(index-1);
    $('#content img').attr('src',images[index]);
    });
  });
  
  $('.header').click(function() {
    $('.info').show(); // show the info
    $('#content').empty(); // hide the content
    $('.pagination').hide(); // hide the pagination
  });
  
});
