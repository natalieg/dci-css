var viewportWidth = document.documentElement.clientWidth;


window.onload = function(){
    changeHeight();
    changeColor();
}

window.onresize = function () {
    changeHeight();
    changeColor();
};


function changeHeight () {
    viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth > 768) {
        document.getElementById("header").style.height = "80vh";
    } else {
        document.getElementById("header").style.height = "40vh";
    }
};

function changeColor() {
    viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth > 768) {
        document.getElementById("mainNav").style.backgroundColor = "rgba(255, 255, 255, 0)";
    } else {
        document.getElementById("mainNav").style.backgroundColor = "#FFD038";
    }
};