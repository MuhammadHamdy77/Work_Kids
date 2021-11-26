$(function(){
    'use strict';

    $('.navbar  #search').click(function(){

       $('.navbar .search-form').slideToggle(100);
    });

    $('.navbar .list-navbar ul li a').click(function(e){
      e.preventDefault();

        $('.navbar .list-navbar ul li a').removeClass('active')
       $(this).addClass('active');
       
    });

   


// Next Slider Div Testimonials

$('.testimonials .content-testi .chevron-icons #next').on('click' ,function(){

  var allDiv  = $('.testimonials .content-testi');
  var currentDiv  = $('.testimonials .active');
  var nextDiv     = currentDiv.next();

  if(nextDiv.length){

    currentDiv.removeClass('active').css('z-index' , -10);
    nextDiv.addClass('active').css('z-index' , 10);
  }
if(nextDiv.length === 2){
  allDiv[0].addClass('active')
}

});
// Prev Slider Div Testimonials

$('.testimonials .content-testi .chevron-icons #prev').on('click' ,function(){

  var currentDiv  = $('.testimonials .active');
  var prevDiv     = currentDiv.prev();

  if(prevDiv.length){

    currentDiv.removeClass('active').css('z-index' , -10);
    prevDiv.addClass('active').css('z-index' , 10);
  }
});

// Start Top Page

$(window).scroll(function() {
			
  if($(window).scrollTop() > 100){

    $('.icon-search').css('display', 'none');
    $('.list-navbar').addClass('scroll');
    $('.navbar').addClass('fixed');
    $('.logo-brand img').css('width' , '100px');
    $('.icon-search li i').css('color' , '#fff');
    $('.navbar .list-navbar .toggle-icons i').css('color' , '#fff');
    $('.top-page').addClass("active");

  } else{
    $('.icon-search').css('display', 'block');
    $('.list-navbar').removeClass('scroll');
    $('.navbar').removeClass('fixed');
    $('.logo-brand img').css('width' , '180px');
    $('.icon-search li i').css('color' , '#333');
    $('.navbar .list-navbar .toggle-icons i').css('color' , '#333');
    $('.top-page').removeClass("active");
  }
});
$('.top-page').on('click' , function(){

  $('html , body').animate({scrollTop:0}, 1000)
});



// Slide Sub Menu
$('.navbar ul li.dropdown').click(function(e){

  $('.navbar ul li.dropdown ul').fadeOut(100);
  $(this).children().fadeIn(600);
  
});


$('.toggle-icons i').click(function(){

  $('.navbar .list-navbar .lists').slideToggle(600)
});
});
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();


// Start Slick Slider

$('.events-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
});
