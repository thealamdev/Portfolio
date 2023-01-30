$(function(){
// humburger js code:
var ham = document.querySelector('.navbar_hamburger');
var nav_menu = document.querySelector('#nav_menu');
var nav_close_btn = document.querySelector('.nav_close_btn');
var nav_menu_list = document.querySelectorAll('.nav_menu_list ul li a');


ham.addEventListener("click",function(){
    nav_menu.style.visibility ="visible";
    nav_menu.style.opacity = "1";
    nav_menu.style.left = "0";
});


nav_close_btn.addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.style.opacity = "0";
    nav_menu.style.left = "100%";
});

nav_menu_list[1].addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.style.opacity = "0";
    nav_menu.style.left = "100%";
});

nav_menu_list[2].addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.style.opacity = "0";
    nav_menu.style.left = "100%";
});

nav_menu_list[3].addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.style.opacity = "0";
    nav_menu.style.left = "100%";
});

nav_menu_list[4].addEventListener("click", function(){
    nav_menu.style.visibility ="hidden";
    nav_menu.styl.opacity = "0";
    nav_menu.style.left = "100%";
});


//mixitup js code

var containerEl = document.querySelector('.mix_main');
var mixer = mixitup(containerEl);


// venubox js code

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// Testimonial slider js code

$('.test_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    nextArrow:'.slider_right',
    prevArrow:'.slider_left',
    responsive: [
        {
          breakpoint: 577,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 993,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
});

// AOS START==
AOS.init({
    delay: 500,
});

// You can also pass an optional settings object
// below listed default settings
// AOS.init({
//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: true, // whether animation should happen only once - while scrolling down
//   mirror: true, // whether elements should animate out while scrolling past them
// //   anchorPlacement: 'top-bottom', 
// });

// AOS END
// back to top start ===================
//==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
// back to top end==================

});