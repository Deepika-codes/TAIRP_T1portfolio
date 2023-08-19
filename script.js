const sections = document.querySelectorAll("section"); // Get all sections
const footer = document.querySelector("footer");

function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function fadeAndSlide() {
    sections.forEach(section => {
        if (isVisible(section)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    if (isVisible(footer)) {
        footer.classList.add("active");
    } else {
        footer.classList.remove("active");
    }
}

fadeAndSlide(); // Initial check

window.addEventListener("scroll", fadeAndSlide);
