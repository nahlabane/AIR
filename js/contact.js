const scriptURL = "https://script.google.com/macros/s/AKfycbwnLnSXownPSnwTRV85ehB5sfjei86EpAvOyxIjh-QJ8ZjuJKFn0YupI3kgi3i4kZoi/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const button = form.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    try {

        const response = await fetch(

            scriptURL,

            {

                method: "POST",

                body: new FormData(form)

            }

        );

        if (!response.ok) {

            throw new Error(
                "Server returned " + response.status
            );

        }

        const result = await response.json();

        if (!result.success) {

            alert(result.message);

            button.disabled = false;

            button.textContent = "Send Message";

            return;

        }

        alert(result.message);

        form.reset();

    }

    catch (error) {

        console.error(error);

        alert(
            "Submission failed. Please try again."
        );

    }

    button.disabled = false;

    button.textContent = "Send Message";

});