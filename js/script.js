var nav_toggle = document.querySelector(".article__nav-toggle");
var toggle_img = document.getElementById("toggle-img");
var nav_list = document.getElementById("nav-list");

i = 0;

nav_toggle.addEventListener('click', function(){
    if (i == 0){
        toggle_img.style.transform = `rotate(0deg)`;
        $("#nav-list").slideDown('200');
        i =+ i + 1;
    }
    else{
        toggle_img.style.transform = `rotate(-90deg)`;
        i = i - 1;
        $("#nav-list").slideUp('100');
    }
});