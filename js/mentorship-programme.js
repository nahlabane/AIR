// ==========================================
// AIR Mentorship Network
// Accordion Controller
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const accordionItems =
        document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {

        const header =
            item.querySelector(".accordion-header");

        header.addEventListener("click", () => {

            const isOpen =
                item.classList.contains("active");

            accordionItems.forEach(section => {

                section.classList.remove("active");

            });

            if (!isOpen) {

                item.classList.add("active");

            }

        });

    });

});
// ==========================================
// Open First Section
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const firstSection =
        document.querySelector(".accordion-item");

    if (firstSection) {

        firstSection.classList.add("active");

    }

});
// ==========================================
// Remember Last Opened Section
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const sections =
        document.querySelectorAll(".accordion-item");

    const saved =
        localStorage.getItem("AIRMentorshipSection");

    if (saved !== null && sections[saved]) {

        sections.forEach(section =>
            section.classList.remove("active"));

        sections[saved].classList.add("active");

    }

    sections.forEach((section, index) => {

        section
            .querySelector(".accordion-header")
            .addEventListener("click", () => {

                localStorage.setItem(
                    "AIRMentorshipSection",
                    index
                );

            });

    });

});
// ==========================================
// Smooth Scroll
// ==========================================

document
.querySelectorAll(".accordion-header")
.forEach(header => {

    header.addEventListener("click", () => {

        setTimeout(() => {

            header.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        },250);

    });

});
// ==========================================
// Programme Explorer
// ==========================================

document
.querySelectorAll(".nav-card")
.forEach(card => {

    card.addEventListener("click", function(e){

        e.preventDefault();

        const target =
            this.getAttribute("href");

        const section =
            document.querySelector(target);

        if(!section) return;

        document
        .querySelectorAll(".accordion-item")
        .forEach(item=>{

            item.classList.remove("active");

        });

        section.classList.add("active");

        localStorage.setItem(

            "AIRMentorshipSection",

            [...document
            .querySelectorAll(".accordion-item")]

            .indexOf(section)

        );

        section.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    });

});