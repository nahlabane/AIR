// ======================================
// AIR Website Includes
// Version 1.1
// ======================================

// Load Header
fetch("header.html")

    .then(response => {

        if (!response.ok) {

            throw new Error("Unable to load header.html");

        }

        return response.text();

    })

    .then(data => {

        const header = document.getElementById("header");

        if (header) {

            header.innerHTML = data;

        }

        // Load navigation AFTER header is inserted
        initialiseNavigation();

    })

    .catch(error => {

        console.error(error);

    });



// Load Footer
fetch("footer.html")

    .then(response => {

        if (!response.ok) {

            throw new Error("Unable to load footer.html");

        }

        return response.text();

    })

    .then(data => {

        const footer = document.getElementById("footer");

        if (footer) {

            footer.innerHTML = data;

        }

    })

    .catch(error => {

        console.error(error);

    });



// ======================================
// Navigation
// ======================================

function initialiseNavigation() {

    const menuToggle = document.querySelector(".menu-toggle");

    const topNav = document.querySelector(".top-nav");

    if (menuToggle && topNav) {

        menuToggle.addEventListener("click", function () {

            topNav.classList.toggle("active");

            if (topNav.classList.contains("active")) {

                menuToggle.innerHTML = "✕";

            } else {

                menuToggle.innerHTML = "☰";

            }

        });

    }



    // Dropdowns

    document.querySelectorAll(".dropdown > a").forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const parent = this.parentElement;

            document.querySelectorAll(".dropdown").forEach(function (item) {

                if (item !== parent) {

                    item.classList.remove("open");

                }

            });

            parent.classList.toggle("open");

        });

    });



    // Close everything when clicking outside

    document.addEventListener("click", function (e) {

        if (!e.target.closest(".top-nav")) {

            document.querySelectorAll(".dropdown").forEach(function (item) {

                item.classList.remove("open");

            });

            if (topNav) {

                topNav.classList.remove("active");

            }

            if (menuToggle) {

                menuToggle.innerHTML = "☰";

            }

        }

    });



    // Reset when resizing to desktop

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            if (topNav) {

                topNav.classList.remove("active");

            }

            if (menuToggle) {

                menuToggle.innerHTML = "☰";

            }

        }

    });

}