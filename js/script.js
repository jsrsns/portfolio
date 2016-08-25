$(document).ready(function() {
  
  $('#left li').click(function() { // click an item in the list
    
    $('#content').empty(); // clear the content
    
  	var selected = $(this).attr('class'); // get the class of the item in the list
  	
  	console.log(selected); // log the class of the selected item (for debug only)
  	
  	if (selected === 'sorting') { // for this selection
  	  $('.info').hide(); // hide the info
  	  
  	  $('.pagination').show(); // show the pagination
  	  
  	  var sortingimages = ["/img/Flag.svg","/img/Corner.svg","/img/Ladder.svg"];
  	  
  	  index=0;
  	  
  	  $('#content').append('<img src="'+sortingimages[index]+'"/>'); // add image to content
  	  
  	  $('.next').click(function(){
  	    index = (index==sortingimages.length-1)?0:(index+1);
  	    
  	  $('#content img').attr('src',sortingimages[index]);   
  	  });
  	  
  	  $('.prev').click(function(){
  	    index = (index==0)?(sortingimages.length-1):(index-1);
  	    
  	  $('#content').attr('src',sortingimages[index]);
  	  });
  	}
  	
  	else if (selected === 'architect') {
  	  $('.info').hide();
  	  $('#content').append('<img src="/img/Corner.svg"/>');
  	  $('.pagination').show();
  	}
  	
  	else if (selected === 'isometric') {
  	  $('.info').hide();
  	  $('#content').append('<img src="/img/Stairs.svg"/>');
  	  $('.pagination').show();
  	}
  	
  	else if (selected === 'flag') {
  	  $('.info').hide();
  	  $('#content').append('<img src="/img/Beam.svg"/>');
  	  $('.pagination').show();
  	}
  });
  
  $('.header').click(function() {
    $('.info').show(); // show the info
    $('#content').empty(); // hide the content
    $('.pagination').hide(); // hide the pagination
  });
  
});
