
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { 
    scrollBackgroundNav();
    // if (viewportWidth > 640) {
    //     document.getElementById("header").style.height = "80vh";
    //     scrollFunction(); 
    // } else {
    //     document.getElementById("header").style.height = "40vh";
    //     console.log('Small viewport');
    // }
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "45vh";
    } else {
        document.getElementById("header").style.height = "80vh";
    }
}

function scrollBackgroundNav() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 50) {
        document.getElementById("mainNav").style.backgroundColor = "#FFD038";
    } else {
        document.getElementById("mainNav").style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
}