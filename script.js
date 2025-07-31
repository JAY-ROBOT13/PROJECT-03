
// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("href").replace("#", "").toLowerCase();
        const section = document.getElementById(target) || document.querySelector(`[id$='${target}']`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Buy Now! button feedback
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for your interest!");
    });
});
