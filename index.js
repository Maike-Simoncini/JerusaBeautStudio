// Scroll reveal com IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("animate")) {
            entry.target.classList.add("animate");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
