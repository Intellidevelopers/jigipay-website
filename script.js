function fade(){
    window.location.href = "screen1.html";
}
function getstarted(){
    window.location.href = "getstarted.html"
}
const screens = document.querySelectorAll('.screen');
const nextBtn = document.getElementById('nextBtn');
let currentScreenIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentScreenIndex < screens.length - 1) {
        screens[currentScreenIndex].classList.remove('current');
        screens[currentScreenIndex].classList.add('next');
        screens[currentScreenIndex + 1].classList.add('current');
        currentScreenIndex++;
        updateIndicator();
    }
});

function updateIndicator() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentScreenIndex) {
            indicator.classList.add('active');
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the screens and buttons
    var screens = document.querySelectorAll(".screen");
    var btns = document.querySelector(".btns");

    // Set the initial screen index and hide buttons on the last screen
    var currentScreenIndex = 0;
    hideButtonsIfNeeded();

    // Function to hide buttons if on the last screen
    function hideButtonsIfNeeded() {
        if (currentScreenIndex === screens.length - 1) {
            btns.style.display = "none";
        } else {
            btns.style.display = "flex"; // Show buttons if not on the last screen
        }
    }

    // Function to navigate to the next screen
    function nextScreen() {
        if (currentScreenIndex < screens.length - 1) {
            screens[currentScreenIndex].classList.remove("current");
            currentScreenIndex++;
            screens[currentScreenIndex].classList.add("current");
            hideButtonsIfNeeded();
        }
    }

    // Event listener for the Next button
    document.getElementById("nextBtn").addEventListener("click", function() {
        nextScreen();
    });
});
