// ===============================
// AIR Navigation
// ===============================

// Mobile dropdown menu
document.querySelectorAll(".dropdown > a").forEach(function (link) {

    link.addEventListener("click", function (e) {

        if (window.innerWidth <= 768) {

            e.preventDefault();

            const parent = this.parentElement;

            // Close all other dropdowns
            document.querySelectorAll(".dropdown").forEach(function (item) {

                if (item !== parent) {
                    item.classList.remove("open");
                }

            });

            // Open or close current dropdown
            parent.classList.toggle("open");

        }

    });

});

// Close all dropdowns when switching to desktop
window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        document.querySelectorAll(".dropdown").forEach(function (item) {

            item.classList.remove("open");

        });

    }

});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {

    if (!e.target.closest(".top-nav")) {

        document.querySelectorAll(".dropdown").forEach(function (item) {

            item.classList.remove("open");

        });

    }

});