// ===============================
// AIR Navigation v1.1
// ===============================

// -------------------------------
// Mobile Menu (☰)
// -------------------------------

const menuToggle = document.querySelector(".menu-toggle");
const topNav = document.querySelector(".top-nav");

if (menuToggle && topNav) {

    menuToggle.addEventListener("click", function () {

        topNav.classList.toggle("active");

        // Change ☰ to ✕
        if (topNav.classList.contains("active")) {

            menuToggle.innerHTML = "✕";

        } else {

            menuToggle.innerHTML = "☰";

        }

    });

}

// -------------------------------
// Click Dropdowns (Desktop & Mobile)
// -------------------------------

document.querySelectorAll(".dropdown > a").forEach(function (link) {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const parent = this.parentElement;

        // Close all other dropdowns
        document.querySelectorAll(".dropdown").forEach(function (item) {

            if (item !== parent) {

                item.classList.remove("open");

            }

        });

        // Toggle current dropdown
        parent.classList.toggle("open");

    });

});

// -------------------------------
// Close Everything When Clicking Outside
// -------------------------------

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

// -------------------------------
// Reset Menu on Desktop Resize
// -------------------------------

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