$(document).ready(function() {

  var images = []
  var x;

  var list = function () {
    $('#content').empty();
    $('.prev').removeClass('active');
    $('.next').addClass('active');

    var selected = $(this).attr('class');

    images.length = 0;

    if (selected === 'isometric') {
      $('.pagination').show();
      $('.info').hide();
      images = ['', '/portfolio/img/iso-01.jpg', '/portfolio/img/iso-02.jpg', '/portfolio/img/iso-03.jpg', '/portfolio/img/iso-04.jpg', '/portfolio/img/iso-05.jpg'];
      $('#content').append('<img src="' + images[1] + '"/>');
      console.log(images);
    }
    else if (selected === 'sorting') {
      $('.pagination').show();
      $('.info').hide();
      images = ['', '/portfolio/img/sorting-01.png', '/portfolio/img/sorting-02.gif', '/portfolio/img/sorting-03.gif', '/portfolio/img/sorting-04.gif'];
      $('#content').append('<img src="' + images[1] + '"/>');
      console.log(images);
    }
    else if (selected === 'flag') {
      $('.pagination').hide();
      $('.info').hide();
      $('#content').empty();
    }

    x = 1

  }
  $('#left li').on('click', list);
  $('.next').click(function() {
    var a = images.length - 2;
    var b = images.length - 3;
    if (x > a) {
      console.log('end', x, images);
    }
    else if ( x > b) {
      x++;
      $('#content').empty();
      $('#content').append('<img src="' + images[x] + '"/>');
      $('.next').removeClass('active');
      $('.prev').addClass('active');
      console.log('continue', x);
    }
    else {
      x++;
      $('#content').empty();
      $('#content').append('<img src="' + images[x] + '"/>');
      $('.prev').addClass('active');
      console.log('next', x, a, b);
    }
  });
  $('.prev').click(function() {
    if (x < 2) {
      console.log('start', x);
    }
    else if (x < 3) {
      x--;
      $('#content').empty();
      $('#content').append('<img src="' + images[x] + '"/>');
      $('.prev').removeClass('active');
      $('.next').addClass('active');
      console.log('back', x);
    }
    else {
      x--;
      $('#content').empty();
      $('#content').append('<img src="' + images[x] + '"/>');
      $('.next').addClass('active');
      console.log('prev', x);
    }
  });
  $('.header').click(function() {
    $('#content').empty();
    $('.pagination').hide();
  });
});
