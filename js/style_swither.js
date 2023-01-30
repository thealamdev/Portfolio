// open hide switcher js

const style_toggoler = document.querySelector('.style_toggoler');
var style_switcher = document.querySelector('.style_switcher');

style_toggoler.addEventListener("click",function(){
 style_switcher.classList.toggle('open');
});


// Hide switcher on scroll

window.addEventListener("scroll", function(){
    if(style_switcher.classList.contains('open')){
        style_switcher.classList.remove('open');
    }
});

// theme color js
const alternate_style = document.querySelectorAll('.alternate-style');
function setActiveStyle (color){
    alternate_style.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
};

// day night theme

const day_night = document.querySelector('.day_night');
window.addEventListener("load",function(){
    if(this.document.body.classList.contains('dark')){
        day_night.querySelector('i').classList.add('fa-sun');
    }
    else{
        day_night.querySelector('i').classList.add('fa-moon');
    }
});


day_night.addEventListener("click",function(){
    day_night.querySelector('i').classList.toggle('fa-sun');
    document.body.classList.toggle('dark');
})

 
 






















