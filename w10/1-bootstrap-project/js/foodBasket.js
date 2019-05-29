var basket = document.getElementById("basket");
var apple = document.getElementById("apple");
var barley = document.getElementById("barley");
var cabbage = document.getElementById("cabbage");
var carrot = document.getElementById("carrot");
var corn = document.getElementById("corn");
var grapes = document.getElementById("grapes");
var potatoes = document.getElementById("potatoes");
var strawberry = document.getElementById("strawberry");
var grain = document.getElementById("grain");
var originalPositionLeft = "45%"
var originalPositionTop = "45%"
var active = false;

basket.onclick = function(){
    console.log("hi");
    if(!active){
        changePosition(apple, "260px", "10vw");
        changePosition(barley, "120px", "4vw");
        changePosition(cabbage, "40px", "22vw");
        changePosition(carrot, "40px", "45vw");
        changePosition(corn, "80px", "65vw");
        changePosition(grapes, "45%", "80%");
        changePosition(potatoes, "70%", "70%");
        changePosition(strawberry, "75%", "50%");
        changePosition(grain, "75%", "25%");
        active = true;
    } else {
        resetPosition(apple);
        resetPosition(barley);
        resetPosition(cabbage);
        resetPosition(carrot);
        resetPosition(corn);
        resetPosition(grapes);
        resetPosition(potatoes);
        resetPosition(strawberry);
        resetPosition(grain);
        active = false;
    }
}

var changePosition = function(item, varTop, varLeft){
    item.style.top= varTop;
    item.style.left = varLeft;
    item.style.zIndex = "10";
    item.style.opacity = "1";
}

var resetPosition = function(item){
    item.style.top = originalPositionTop;
    item.style.left = originalPositionLeft;
    item.style.zIndex = "4";
    item.style.opacity = "0";
}