var basket = document.getElementById("basket");
var apple = document.getElementById("apple");
var barley = document.getElementById("barley");
var originalPositionLeft = "35vw"
var originalPositionTop = "220px"
var active = false;

basket.onclick = function(){
    console.log("hi");
    if(!active){
        apple.style.top = "260px";
        apple.style.left = "10vw";

        barley.style.top = "90px";
        barley.style.left = "5vw";

        active = true;
    } else {
        resetPosition(apple);
        resetPosition(barley);
        active = false;
    }
}

var resetPosition = function(item){
    item.style.top = originalPositionTop;
    item.style.left = originalPositionLeft;
}