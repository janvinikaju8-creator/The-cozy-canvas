const aboutButton = document.getElementById("aboutButton");
const aboutMore = document.getElementById("aboutMore");

aboutButton.addEventListener("click", function () {

    if (aboutMore.classList.contains("show")) {

        aboutMore.classList.remove("show");
        aboutButton.textContent = "Read More";

    } else {

        aboutMore.classList.add("show");
        aboutButton.textContent = "Read Less";

    }

});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received. ♡";

    contactForm.reset();

});

const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "☀️";
    } else {
        darkModeButton.textContent = "🌙";
    }

});