console.log("Script loaded. Add your dynamic functionality here!");

// Scroll functionality for the navbar
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});
