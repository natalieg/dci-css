
let breakFreeButton = document.getElementById('breakFreeBtn');
let birdPartDiv1 = document.getElementById("bird-part1");
let birdPartDiv2 = document.getElementById("bird-part2");
let birdPartDiv3 = document.getElementById("bird-part3");
let birdPartDiv4 = document.getElementById("bird-part4");
let birdPartDiv5 = document.getElementById("bird-part5");
let birdPartDiv6 = document.getElementById("bird-part6");
let birdPartDiv7 = document.getElementById("bird-part7");

let birdPartDiv8 = document.getElementById("bird-part2-1");
let birdPartDiv9 = document.getElementById("bird-part2-2");
let birdPartDiv10 = document.getElementById("bird-part2-3");
let birdPartDiv11 = document.getElementById("bird-part2-4");
let birdPartDiv12 = document.getElementById("bird-part2-5");
let birdPartDiv13 = document.getElementById("bird-part2-6");
let birdPartDiv14 = document.getElementById("bird-part2-7");

let divArray = [
    birdPartDiv1,
    birdPartDiv2,
    birdPartDiv3,
    birdPartDiv4,
    birdPartDiv5,
    birdPartDiv6,
    birdPartDiv7,
    birdPartDiv8,
    birdPartDiv9,
    birdPartDiv10,
    birdPartDiv11,
    birdPartDiv12,
    birdPartDiv13,
    birdPartDiv14
];

let aniActive = false;

breakFreeButton.addEventListener('click', function () {
    if (!aniActive) {
        aniActive = true;
        divArray.forEach(element => {
            element.style.animationPlayState = "running";
        });
        setTimeout(
            function () {
                birdPartDiv7.classList.add("bird-wing-moving");
                birdPartDiv14.classList.add("bird-wing-moving");
            }, 2900);
        aniActive = true;
        breakFreeButton.style.opacity = "0.2"; 
    } else {
        divArray.forEach(element => {
            element.style.animationPlayState = "paused";
            breakFreeButton.style.opacity = "1"; 
            aniActive = false;
        });
    }
});

if (window.performance) {
    console.info("window.performance works fine on this browser");
    birdPartDiv7.classList.remove("bird-wing-moving");
    birdPartDiv14.classList.remove("bird-wing-moving");
}