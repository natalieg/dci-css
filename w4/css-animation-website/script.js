
let breakFreeButton = document.getElementById('breakFreeBtn');
let birdPartDiv1 = document.getElementById("bird-part1");
let birdPartDiv2 = document.getElementById("bird-part2");
let birdPartDiv3 = document.getElementById("bird-part3");
let birdPartDiv4 = document.getElementById("bird-part4");
let birdPartDiv5 = document.getElementById("bird-part5");
let birdPartDiv6 = document.getElementById("bird-part6");
let birdPartDiv7 = document.getElementById("bird-part7");

let divArray = [
    birdPartDiv1,
    birdPartDiv2,
    birdPartDiv3,
    birdPartDiv4,
    birdPartDiv5,
    birdPartDiv6,
    birdPartDiv7
];

breakFreeButton.addEventListener('click', function(){

    divArray.forEach(element => {
            element.style.animationPlayState = "running";
        });

        // breakFreeButton.style.display = "none";
        // breakFreeButton.innerText = "Discover More";
});