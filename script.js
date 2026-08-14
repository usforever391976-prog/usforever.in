function toggleMenu() {
    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("open");
    }
}


// Close mobile menu after clicking a link

document.querySelectorAll("#mainNav a").forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.getElementById("mainNav");

        if (nav) {
            nav.classList.remove("open");
        }

    });

});


// Smooth reveal animation when sections enter the screen

const revealElements = document.querySelectorAll(
    ".section, .project-card, .team-card, .gallery-item, .video-showcase"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function(element) {

    observer.observe(element);

});
