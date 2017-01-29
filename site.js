$(document).ready(function(){

  $('.project-presentation > img').css('display', 'block')

  var index = 0;
  var buttons = $('.project-button')
  var timer = setInterval(function(){ setProject(); }, 5000)

  $('.project-button').click(function(){
    $('.selected').removeClass('selected', 400, 'swing');
    $(this).addClass('selected', 400, 'swing');
    clearInterval(timer);
    index = jQuery.inArray(this, buttons)
    nextImage()
    timer = setInterval(function(){ setProject(); }, 5000)
  })

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  function setProject() {
    $(buttons[index]).removeClass('selected', 400, 'swing');
    index = index < 3 ? index + 1 : 0
    $(buttons[index]).addClass('selected', 400, 'swing');
    nextImage()
  }

  function nextImage() {
    $('.project-presentation > img').fadeOut(200, function() {
      $('.project-presentation > img').attr('src', "media/projects/" + index + ".png")
    })

    $('.project-presentation > img').fadeIn(200)
  }

})
