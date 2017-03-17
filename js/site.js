
$(document).ready(function(){

  // $('.project-presentation > img').css('display', 'block')
  var index = 0;
  var buttons = $('.project-button')
  var images = $('.project-presentation > img')
  var timer = setInterval(function(){ setProject(); $('#heroButton').animateCss('tada'); }, 5000)

  var descriptions = [
    'A Raspberry Pi based touch screen radio. User can log into their Pandora account to listen to their radio stations and rate songs.',
    'A 2 month project to create a simple iPhone social networking app, which emphasizes family relationships.',
    'A Raspberry Pi device that has different plugins to display a clock, weather, news, stocks and downloads.',
    'Like golf, except instead of aiming for a hole you must aim for all of the objects on each course.'
  ]





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

  $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
  });

  $('.project-button').click(function(){
    $('.selected').removeClass('selected', 400, 'swing');
    $(this).addClass('selected', 400, 'swing');
    clearInterval(timer);
    index = jQuery.inArray(this, buttons)
    nextImage()
    timer = setInterval(function(){
      setProject();
      $('#heroButton').animateCss('tada')
    }, 5000)
  })

  function setProject() {
    $(buttons[index]).removeClass('selected', 400, 'swing');
    index = index < 3 ? index + 1 : 0
    $(buttons[index]).addClass('selected', 400, 'swing');

    nextImage()
  }

  function nextImage() {
    $('.overlay > p').text(descriptions[index])
    var curr = $(images[index])
    $('.active').removeClass('active')
    curr.addClass("active")
  }
})