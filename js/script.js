// Image Lightbox functionality
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.insta-grid img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            document.body.appendChild(lightbox);

            const largeImg = document.createElement('img');
            largeImg.src = img.src; // Set the src of the large image to the clicked image's src
            lightbox.appendChild(largeImg);

            // Close lightbox when clicked anywhere on it
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        const name = form.querySelector("input[name='name']").value;
        const email = form.querySelector("input[name='email']").value;

        let nameError = document.getElementById("name-error");
        let emailError = document.getElementById("email-error");
        nameError.textContent = "";
        emailError.textContent = "";

        let valid = true;

        // Validate name (check if empty)
        if (!name) {
            nameError.textContent = "Name is required.";
            valid = false;
        }

        // Validate email
        if (!email) {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); 
        }
    });
});
