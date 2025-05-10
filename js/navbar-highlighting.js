window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".topnav a");
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Check if the section is in the viewport (taking into account the navbar)
        if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");  // Remove 'active' class from all links
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");  // Add 'active' class to the current link
        }
    });
});
