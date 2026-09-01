/* =========================================
   AIR PORTAL — LEARNER RESULTS
   ========================================= */

(function () {


   /*=========================================
* GOOGLE APPS SCRIPT WEB APP URL
=========================================*/

const API_URL =
    "https://script.google.com/macros/s/AKfycbye-prrN-FdqyteoxwJapxQsp5sYF1lp6lyBxGQh5YKunAzWhflIPd1oA7wQcTGWH4K/exec";


    /* =========================================
       INITIALIZE RESULTS
       ========================================= */

    function initializeResults() {

        console.log(
            "AIR Results initializing..."
        );

        loadLearnerResults();

    }


    /* =========================================
       GET LOGGED-IN LEARNER EMAIL
       ========================================= */

    function getLearnerEmail() {

        const storedUser =
            sessionStorage.getItem(
                "airUser"
            );


        if (!storedUser) {

            return "";

        }


        try {

            const user =
                JSON.parse(
                    storedUser
                );


            return String(
                user.email || ""
            )
                .trim()
                .toLowerCase();

        }

        catch (error) {

            console.error(
                "Could not read airUser:",
                error
            );

            return "";

        }

    }


    /* =========================================
       LOAD RESULTS
       ========================================= */

    function loadLearnerResults() {

        const loading =
            document.getElementById(
                "resultsLoading"
            );

        const errorBox =
            document.getElementById(
                "resultsError"
            );

        const container =
            document.getElementById(
                "resultsContainer"
            );


        if (!container) {

            console.error(
                "resultsContainer not found."
            );

            return;

        }


        const email =
            getLearnerEmail();


        if (!email) {

            if (loading) {

                loading.style.display =
                    "none";

            }


            if (errorBox) {

                errorBox.style.display =
                    "block";

                errorBox.textContent =
                    "Learner login information could not be found.";

            }


            return;

        }


        /* =====================================
           CHECK API URL
           ===================================== */

        if (
            !API_URL ||
            API_URL.indexOf("PASTE-YOUR") !== -1
        ) {

            if (loading) {

                loading.style.display =
                    "none";

            }


            if (errorBox) {

                errorBox.style.display =
                    "block";

                errorBox.textContent =
                    "Google Apps Script API URL has not been configured.";

            }


            console.error(
                "API_URL has not been configured."
            );

            return;

        }


        /* =====================================
           BUILD REQUEST URL
           ===================================== */

        const url =
            API_URL +
            "?action=results&email=" +
            encodeURIComponent(
                email
            );


        console.log(
            "Loading learner results..."
        );


        /* =====================================
           REQUEST RESULTS
           ===================================== */

        fetch(url)

            .then(function (response) {

                if (!response.ok) {

                    throw new Error(
                        "Server returned HTTP " +
                        response.status
                    );

                }

                return response.json();

            })

            .then(function (data) {

                console.log(
                    "Learner results:",
                    data
                );


                if (
                    data.status !==
                    "success"
                ) {

                    throw new Error(
                        data.message ||
                        "Could not load results."
                    );

                }


                renderResults(
                    data.results || []
                );

            })

            .catch(function (error) {

                console.error(
                    "Results error:",
                    error
                );


                if (loading) {

                    loading.style.display =
                        "none";

                }


                if (errorBox) {

                    errorBox.style.display =
                        "block";

                    errorBox.textContent =
                        error.message ||
                        "Unable to load results.";

                }

            });

    }


    /* =========================================
       RENDER RESULTS
       ========================================= */

    function renderResults(results) {

        const loading =
            document.getElementById(
                "resultsLoading"
            );

        const container =
            document.getElementById(
                "resultsContainer"
            );


        if (loading) {

            loading.style.display =
                "none";

        }


        if (!container) {

            return;

        }


        container.innerHTML = "";


        /* =====================================
           NO RESULTS
           ===================================== */

        if (
            !results ||
            results.length === 0
        ) {

            container.innerHTML = `

                <div class="no-results">

                    <h3>No results yet</h3>

                    <p>
                        Your submitted tests
                        and assignments will
                        appear here.
                    </p>

                </div>

            `;

            return;

        }


        /* =====================================
           MOST RECENT FIRST
           ===================================== */

        results =
            results.slice().reverse();


        /* =====================================
           CREATE RESULT CARDS
           ===================================== */

        results.forEach(
            function (result) {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "result-card";


                const code =
                    escapeHtml(
                        result.code ||
                        "Assessment"
                    );


                const attempt =
                    escapeHtml(
                        String(
                            result.attempt ||
                            ""
                        )
                    );


                const score =
                    escapeHtml(
                        String(
                            result.score ??
                            ""
                        )
                    );


                const total =
                    escapeHtml(
                        String(
                            result.total ??
                            ""
                        )
                    );


                const percentage =
                    escapeHtml(
                        formatPercentage(
                            result.percentage
                        )
                    );


                const submittedAt =
                    escapeHtml(
                        formatSubmittedTime(
                            result.submittedAt
                        )
                    );


                card.innerHTML = `

                    <div class="result-top">

                        <div class="result-code">

                            ${code}

                        </div>


                        <div class="result-attempt">

                            Attempt ${attempt}

                        </div>

                    </div>


                    <div class="result-details">

                        <div class="result-detail">

                            <span
                                class="result-detail-label"
                            >
                                Score
                            </span>

                            <span
                                class="result-detail-value"
                            >
                                ${score} / ${total}
                            </span>

                        </div>


                        <div class="result-detail">

                            <span
                                class="result-detail-label"
                            >
                                Percentage
                            </span>

                            <span
                                class="result-detail-value result-percentage"
                            >
                                ${percentage}
                            </span>

                        </div>


                        <div class="result-detail">

                            <span
                                class="result-detail-label"
                            >
                                Attempt
                            </span>

                            <span
                                class="result-detail-value"
                            >
                                ${attempt}
                            </span>

                        </div>


                        <div class="result-detail">

                            <span
                                class="result-detail-label"
                            >
                                Status
                            </span>

                            <span
                                class="result-detail-value"
                            >
                                Completed
                            </span>

                        </div>

                    </div>


                    <div class="result-submitted">

                        <strong>
                            Submitted:
                        </strong>

                        ${submittedAt}

                    </div>

                `;


                container.appendChild(
                    card
                );

            }
        );

    }


    /* =========================================
       FORMAT PERCENTAGE
       ========================================= */

    function formatPercentage(value) {

        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {

            return "—";

        }


        const number =
            Number(value);


        if (
            Number.isNaN(number)
        ) {

            return String(value);

        }


        return (
            Number.isInteger(number)
                ? number
                : number.toFixed(2)
        ) + "%";

    }


    /* =========================================
       FORMAT SUBMITTED TIME
       ========================================= */

    function formatSubmittedTime(value) {

        if (!value) {

            return "—";

        }


        return String(value);

    }


    /* =========================================
       ESCAPE HTML
       ========================================= */

    function escapeHtml(value) {

        return String(value)

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =========================================
       MAKE FUNCTION AVAILABLE TO PORTAL
       ========================================= */

    window.initializeResults =
        initializeResults;


})();