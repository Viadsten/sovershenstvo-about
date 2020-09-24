var nav_toggle = document.querySelector(".article__nav-toggle");
var toggle_img = document.getElementById("toggle-img");
var nav_list = document.getElementById("nav-list");

if(document.documentElement.clientWidth > 940) {
    var i = 3;
    }
    else{
        var i = 0;
    }



nav_toggle.addEventListener('click', function(){
    if (i == 0){
        toggle_img.style.transform = `rotate(0deg)`;
        $("#nav-list").slideDown('200');
        i = i + 1;
    }
    else if(i == 1){
        toggle_img.style.transform = `rotate(-90deg)`;
        i = i - 1;
        $("#nav-list").slideUp('100');
    }
});

var cachedWidth = $(window).width();
$(window).resize(function(){
    var newWidth = $(window).width(); 
    if(newWidth !== cachedWidth){
      $(window).resize(function() {
        if(document.documentElement.clientWidth > 940) {
            nav_list.style.display = "block";
            i = 3;
        }
      });

      $(window).resize(function() {
        if(document.documentElement.clientWidth < 940) {
          nav_list.style.display = "none";
          i = 0;
        }
      });
        cachedWidth = newWidth;
    }
});


const input = document.getElementsByClassName('article__radio-btn');
const article = document.getElementsByClassName('article__text');

for (let j = 0; j < input.length; j++) {
  input[j].addEventListener('change', function() {
    for (let j = 0; j < input.length; j++) {
        article[j].classList.add('article__text--disabled')
    }
        article[j].classList.remove('article__text--disabled')
  });
  if(document.documentElement.clientWidth < 940) {
    input[j].addEventListener('click', function(){
        $("#nav-list").slideUp('100');
        toggle_img.style.transform = `rotate(-90deg)`;
        i = i - 1;
    });
  };
};

