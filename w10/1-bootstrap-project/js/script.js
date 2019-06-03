
var viewportWidth = document.documentElement.clientWidth;

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
    scrollBackgroundNav();
};

window.onload = function(){
    changeColor();
}

window.onresize = function () {
    console.log("im resizing");
    changeColor();
};


function scrollBackgroundNav() {
    viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth > 768) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 50) {
            document.getElementById("mainNav").style.backgroundColor = "#FFD038";
        } else {
            document.getElementById("mainNav").style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
    } 
}

function changeColor() {
    viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth > 768) {
        document.getElementById("mainNav").style.backgroundColor = "rgba(255, 255, 255, 0)";
    } else {
        document.getElementById("mainNav").style.backgroundColor = "#FFD038";
    }
};