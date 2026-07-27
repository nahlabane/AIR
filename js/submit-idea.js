const scriptURL =
"https://script.google.com/macros/s/AKfycbwZNN7SwL07ZDO92TCVEk7MmJO7mN_rTaArmFj73o8B8MHAOjRBHplKzM4mZKLWtC1A/exec";

const form = document.getElementById("projectProposalForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const button = form.querySelector("button");

    button.disabled = true;
    button.textContent = "Submitting...";

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

            button.textContent =
                "Submit Community Project Proposal";

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

    button.textContent =
        "Submit Community Project Proposal";

});