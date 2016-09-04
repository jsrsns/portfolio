$(document).ready(function() {
  
  $('#left li').click(function() { // click an item in the list
    
    $('#content').empty(); // clear the content
    
  	var selected = $(this).attr('class'); // get the class of the item in the list
  	var images = [];
  	var x;
  	
  	images.length = 0;
  	
  	console.log(selected); // log the class of the selected item (for debug only)
  	
  	if (selected === 'sorting') { // for this selection
  	  $('.info').hide(); // hide the info
  	  $('.pagination').show(); // show the pagination
  	  for (x = 1; x < 17; x++) {
  	    images[x] = 'img/sorting-' + x + '.gif';
  	  }
  	  $('#content').append('<img src="'+images[index]+'"/>'); // add image to content
  	}
  	
  	else if (selected === 'isometric') {
  	  $('.info').hide();
  	  $('.pagination').show();
  	  
  	  var images = ["/portfolio/img/iso-1.png","/portfolio/img/iso-2.png","/portfolio/img/iso-3.png","/portfolio/img/iso-4.png"];
  	  index=0;
  	  
  	  $('#content').append('<img src="'+images[index]+'"/>'); // add image to content
  	}
  	
  	else if (selected === 'flag') {
  	  $('.info').show();
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
