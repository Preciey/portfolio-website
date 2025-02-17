document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    // Toggle navigation menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Form submission handler
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";
            form.reset();
        }
    });
});
