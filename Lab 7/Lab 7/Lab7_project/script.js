// ===============================
// LOGIN FUNCTION
// ===============================
const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "dashboard.html";
    });
}
// start from first slide
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
// function to display slides
function showSlides() {

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // move to next slide
    slideIndex++;

    // Reset to the first slide if the index exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Call this function again after 3 seconds
    setTimeout(showSlides, 3000);
}

// Initialize the slideshow
if (slides.length > 0) {
showSlides();
}

// FAQ Collapsible
let faqButtons = document.getElementsByClassName("faq-btn");

for (let i = 0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener("click", function () {
        let content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// OPTIONAL: CHANGE PROGRESS (SIMULATION)
function startProgress() {
    let progressBar = document.getElementById("orderProgress");
    let width = 0;

    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            progressBar.innerText = "Order Completed 🎉";
        } else {
            width++;
            progressBar.style.width = width + "%";
            progressBar.innerText = width + "%";
        }
    }, 50); // lagi kecil = lagi laju
}
