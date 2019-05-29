var viewportWidth = document.documentElement.clientWidth;


window.onload = function(){
    console.log("hy");
    changeHeightAndColor();
}

window.onresize = function () {
    console.log("hy2");
    changeHeightAndColor();
};

window.onscroll = function () {
    if (viewportWidth > 768) {
        scrollBackgroundNav();
    } 
};

function scrollBackgroundNav() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 50) {
        document.getElementById("mainNav").style.backgroundColor = "#FFD038";
    } else {
        document.getElementById("mainNav").style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
}


function changeHeightAndColor () {
    viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth > 768) {
        document.getElementById("header").style.height = "80vh";
        document.getElementById("mainNav").style.backgroundColor = "rgba(255, 255, 255, 0)";
    } else {
        document.getElementById("header").style.height = "40vh";
        document.getElementById("mainNav").style.backgroundColor = "#FFD038";
    }
};
