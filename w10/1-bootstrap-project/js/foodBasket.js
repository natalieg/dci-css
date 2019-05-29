var basket = document.getElementById("basket");
var apple = document.getElementById("apple");
var active = false;

basket.onclick = function(){
    console.log("hi");
    if(!active){
        apple.style.transform = "translate(-220px, -20px)";
        active = true;
    } else {
        apple.style.transform = "translate(0)";
        active = false;
    }
}