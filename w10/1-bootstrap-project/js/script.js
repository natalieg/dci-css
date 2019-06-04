
var viewportWidth = document.documentElement.clientWidth;
var docTopPosition = true;
var navBarColor = document.getElementById("mainNav").style.backgroundColor;
var navBarColorInvisible = "rgba(255, 255, 255, 0)";
var navBarColorVisible = "#FFD038";

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
    scrollBackgroundNav();
};

window.onload = function(){
    changeColor();
}

window.onresize = function () {
    changeColor();
};


function scrollBackgroundNav() {
    viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth > 768) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 50) {
            document.getElementById("mainNav").style.backgroundColor = "#FFD038";
            docTopPosition = false; 
        } else {
            document.getElementById("mainNav").style.backgroundColor = "rgba(255, 255, 255, 0)";
            docTopPosition = true; 
        }
    } 
}

function changeColor() {
    viewportWidth = document.documentElement.clientWidth;
    if (docTopPosition && (viewportWidth > 768)){
        document.getElementById("mainNav").style.backgroundColor = "rgba(255, 255, 255, 0)";
        console.log("Im at the top and Im big");
    } else {
        document.getElementById("mainNav").style.backgroundColor = "#FFD038";

        console.log("Im at the top and Im small");
    }
};