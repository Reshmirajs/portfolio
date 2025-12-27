function scrollToContact() {
    document.getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
}

const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});
