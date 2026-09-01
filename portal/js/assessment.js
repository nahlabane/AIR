/*=========================================
* GOOGLE APPS SCRIPT WEB APP URL
*=========================================*/

const API_URL =
    "https://script.google.com/macros/s/AKfycbzzdqYVibzsOsOI6il0Jp6xKYM-pP3SD-g0rRP4-E08mFEYJaoyxk4b7AbL_AaKtPx6/exec";


/*=========================================
* SELECTED ASSESSMENT
*=========================================*/

let sourceCode = null;


/*=========================================
* STORE QUESTIONS
*=========================================*/

let assessmentQuestions = [];


/*=========================================
* LEARNER INFORMATION
*=========================================*/

let learnerEmail = "";


/*=========================================
* MAXIMUM ATTEMPTS
*=========================================*/

const MAX_ATTEMPTS = 2;


/*=========================================
* ASSESSMENT ACCESS
*=========================================*/

let assessmentAvailable = false;


/*=========================================
* ASSESSMENT DATES
*=========================================*/

let assessmentStartDate = null;
let assessmentDueDate = null;

let assessmentCountdownInterval = null;


/*=========================================
* GET LOGGED-IN LEARNER EMAIL
*=========================================*/

function getLearnerEmail() {

    const data =
        sessionStorage.getItem(
            "airUser"
        );

    if (!data) {

        return "";

    }

    try {

        const user =
            JSON.parse(data);

        return String(
            user.email || ""
        ).trim();

    }

    catch(error) {

        console.error(
            "Unable to read AIR user:",
            error
        );

        return "";

    }

}


/*=========================================
* PARSE ASSESSMENT DATE
*=========================================*/

function parseAssessmentDate(
    value,
    endOfDay = false
) {

    if (!value) {

        return null;

    }


    if (value instanceof Date) {

        const date =
            new Date(value);

        if (endOfDay) {

            date.setHours(
                23,
                59,
                59,
                999
            );

        }

        return date;

    }


    const text =
        String(value).trim();


    const match =
        text.match(
            /^(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})$/
        );


    if (match) {

        const day =
            parseInt(
                match[1],
                10
            );

        const monthText =
            match[2].toLowerCase();

        const year =
            parseInt(
                match[3],
                10
            );


        const months = {

            jan: 0,
            january: 0,

            feb: 1,
            february: 1,

            mar: 2,
            march: 2,

            apr: 3,
            april: 3,

            may: 4,

            jun: 5,
            june: 5,

            jul: 6,
            july: 6,

            aug: 7,
            august: 7,

            sep: 8,
            sept: 8,
            september: 8,

            oct: 9,
            october: 9,

            nov: 10,
            november: 10,

            dec: 11,
            december: 11

        };


        const month =
            months[monthText];


        if (
            month !== undefined
        ) {

            const date =
                new Date(
                    year,
                    month,
                    day
                );


            if (endOfDay) {

                date.setHours(
                    23,
                    59,
                    59,
                    999
                );

            }
            else {

                date.setHours(
                    0,
                    0,
                    0,
                    0
                );

            }


            return date;

        }

    }


    const fallback =
        new Date(value);


    if (
        isNaN(
            fallback.getTime()
        )
    ) {

        return null;

    }


    if (endOfDay) {

        fallback.setHours(
            23,
            59,
            59,
            999
        );

    }


    return fallback;

}


/*=========================================
* ASSESSMENT COUNTDOWN
*=========================================*/

function startAssessmentCountdown(
    dueDate
) {

    const timer =
        document.getElementById(
            "countdownTimer"
        );


    if (!timer) {

        return;

    }


    if (
        assessmentCountdownInterval
    ) {

        clearInterval(
            assessmentCountdownInterval
        );

    }


    assessmentDueDate =
        parseAssessmentDate(
            dueDate,
            true
        );


    if (!assessmentDueDate) {

        timer.innerHTML =
            "⚠️ Due date unavailable.";

        return;

    }


    function updateCountdown() {

        const now =
            new Date();


        const difference =
            assessmentDueDate.getTime() -
            now.getTime();


        if (
            difference <= 0
        ) {

            clearInterval(
                assessmentCountdownInterval
            );


            timer.innerHTML =
                "🔒 Assessment closed — the submission deadline has passed.";


            timer.classList.add(
                "expired"
            );


            const submitButton =
                document.getElementById(
                    "submitAssessment"
                );


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "Assessment Closed";

            }


            assessmentAvailable =
                false;


            return;

        }


        const totalSeconds =
            Math.floor(
                difference / 1000
            );


        const days =
            Math.floor(
                totalSeconds /
                (24 * 60 * 60)
            );


        const hours =
            Math.floor(
                (
                    totalSeconds %
                    (24 * 60 * 60)
                ) /
                (60 * 60)
            );


        const minutes =
            Math.floor(
                (
                    totalSeconds %
                    (60 * 60)
                ) /
                60
            );


        const seconds =
            totalSeconds %
            60;


        timer.innerHTML = `

            ⏳

            <strong>
                Time remaining:
            </strong>

            ${days}d
            ${hours}h
            ${minutes}m
            ${seconds}s

        `;

    }


    updateCountdown();


    assessmentCountdownInterval =
        setInterval(
            updateCountdown,
            1000
        );

}


/*=========================================
* CHECK START DATE
*=========================================*/

function checkAssessmentStart(
    startDate
) {

    assessmentStartDate =
        parseAssessmentDate(
            startDate,
            false
        );


    if (
        !assessmentStartDate
    ) {

        return true;

    }


    const now =
        new Date();


    if (
        now.getTime() <
        assessmentStartDate.getTime()
    ) {

        const timer =
            document.getElementById(
                "countdownTimer"
            );


        if (timer) {

            timer.innerHTML =
                "🔒 Assessment has not started yet.";

        }


        const submitButton =
            document.getElementById(
                "submitAssessment"
            );


        if (submitButton) {

            submitButton.disabled =
                true;

        }


        assessmentAvailable =
            false;


        return false;

    }


    return true;

}


/*=========================================
* CHECK SOURCE CODE
*=========================================*/

function checkSourceCode() {

    const info =
        document.getElementById(
            "assessmentInfo"
        );


    if (!sourceCode) {

        if (info) {

            info.innerHTML = `

                <div class="error-message">

                    Assessment code is missing.

                </div>

            `;

        }


        const submitButton =
            document.getElementById(
                "submitAssessment"
            );


        if (submitButton) {

            submitButton.disabled =
                true;

        }


        return false;

    }


    if (info) {

        info.innerHTML = `

            <div class="assessment-code">

                <strong>
                    Assessment Code:
                </strong>

                ${escapeHTML(
                    sourceCode
                )}

            </div>

        `;

    }


    return true;

}
/*=========================================
* CHECK LEARNER ATTEMPTS
*=========================================*/

async function checkLearnerAttempts() {

    const info =
        document.getElementById(
            "assessmentInfo"
        );


    learnerEmail =
        getLearnerEmail();


    /*-----------------------------------------
      CHECK LEARNER LOGIN
    -----------------------------------------*/

    if (!learnerEmail) {

        if (info) {

            info.innerHTML = `

                <div class="error-message">

                    Learner login information
                    could not be found.

                    <br><br>

                    Please return to the dashboard
                    and log in again.

                </div>

            `;

        }


        return false;

    }


    /*-----------------------------------------
      REQUEST ATTEMPTS
    -----------------------------------------*/

    try {

        const response =
            await fetch(

                API_URL +
                "?action=attempts" +
                "&email=" +
                encodeURIComponent(
                    learnerEmail
                ) +
                "&sourceCode=" +
                encodeURIComponent(
                    sourceCode
                )

            );


        const result =
            await response.json();


        console.log(
            "Attempt result:",
            result
        );


        /*-------------------------------------
          LEARNER NOT REGISTERED
        -------------------------------------*/

        if (
            result.status ===
            "not_registered"
        ) {

            if (info) {

                info.innerHTML = `

                    <div class="error-message">

                        Learner is not registered.

                    </div>

                `;

            }


            return false;

        }


        /*-------------------------------------
          ERROR
        -------------------------------------*/

        if (
            result.status ===
            "error"
        ) {

            if (info) {

                info.innerHTML = `

                    <div class="error-message">

                        ${
                            result.message ||
                            "Unable to check assessment attempts."
                        }

                    </div>

                `;

            }


            return false;

        }


        /*-------------------------------------
          ATTEMPT INFORMATION
        -------------------------------------*/

        const attempts =
            Number(
                result.attempts || 0
            );


        const remaining =
            Number(
                result.remaining ||
                Math.max(
                    MAX_ATTEMPTS -
                    attempts,
                    0
                )
            );


        const maxAttempts =
            Number(
                result.maxAttempts ||
                MAX_ATTEMPTS
            );


        /*-------------------------------------
          DISPLAY ATTEMPTS
        -------------------------------------*/

        if (info) {

            info.innerHTML += `

                <div class="attempt-info">

                    <strong>
                        Learner:
                    </strong>

                    ${escapeHTML(
                        learnerEmail
                    )}

                    <br>

                    <strong>
                        Attempts used:
                    </strong>

                    ${attempts}
                    /
                    ${maxAttempts}

                    <br>

                    <strong>
                        Attempts remaining:
                    </strong>

                    ${remaining}

                </div>

            `;

        }


        /*-------------------------------------
          MAXIMUM ATTEMPTS REACHED
        -------------------------------------*/

        if (
            attempts >= maxAttempts
        ) {

            if (info) {

                info.innerHTML += `

                    <div class="closed-message">

                        🔒 You have used all
                        available attempts
                        for this assessment.

                    </div>

                `;

            }


            const submitButton =
                document.getElementById(
                    "submitAssessment"
                );


            if (submitButton) {

                submitButton.disabled =
                    true;

            }


            assessmentAvailable =
                false;


            return false;

        }


        return true;

    }

    catch(error) {

        console.error(
            "Attempt check error:",
            error
        );


        if (info) {

            info.innerHTML += `

                <div class="error-message">

                    Unable to check your
                    assessment attempts.

                    <br><br>

                    Please try again.

                </div>

            `;

        }


        return false;

    }

}


/*=========================================
* LOAD QUESTIONS
*=========================================*/

async function loadQuestions() {

    const questionsContainer =
        document.getElementById(
            "questions"
        );


    const info =
        document.getElementById(
            "assessmentInfo"
        );


    /*-----------------------------------------
      CHECK SOURCE CODE
    -----------------------------------------*/

    if (!checkSourceCode()) {

        return;

    }


    /*-----------------------------------------
      CHECK LEARNER
    -----------------------------------------*/

    const attemptsAllowed =
        await checkLearnerAttempts();


    if (!attemptsAllowed) {

        return;

    }


    /*-----------------------------------------
      SHOW LOADING
    -----------------------------------------*/

    if (questionsContainer) {

        questionsContainer.innerHTML = `

            <div class="loading">

                Loading questions...

            </div>

        `;

    }


    /*-----------------------------------------
      GET QUESTIONS
    -----------------------------------------*/

    try {

        const response =
            await fetch(

                API_URL +
                "?action=assessment" +
                "&sourceCode=" +
                encodeURIComponent(
                    sourceCode
                )

            );


        const result =
            await response.json();


        console.log(
            "Assessment result:",
            result
        );


        /*-------------------------------------
          CLOSED ASSESSMENT
        -------------------------------------*/

        if (
            result.status ===
            "closed"
        ) {

            if (info) {

                info.innerHTML += `

                    <div class="closed-message">

                        🔒

                        ${
                            result.message ||
                            "This assessment is not currently available."
                        }

                    </div>

                `;

            }


            if (questionsContainer) {

                questionsContainer.innerHTML =
                    "";

            }


            assessmentAvailable =
                false;


            return;

        }


        /*-------------------------------------
          ERROR
        -------------------------------------*/

        if (
            result.status ===
            "error"
        ) {

            if (info) {

                info.innerHTML += `

                    <div class="error-message">

                        ${
                            result.message ||
                            "Unable to load assessment."
                        }

                    </div>

                `;

            }


            if (questionsContainer) {

                questionsContainer.innerHTML =
                    "";

            }


            return;

        }


        /*-------------------------------------
          STORE QUESTIONS
        -------------------------------------*/

        assessmentQuestions =
            Array.isArray(
                result.questions
            )
                ? result.questions
                : [];


        /*-------------------------------------
          STORE RESOURCE INFORMATION
        -------------------------------------*/

        if (
            result.resource
        ) {

            const resource =
                result.resource;


            assessmentStartDate =
                parseAssessmentDate(
                    resource.startDate,
                    false
                );


            assessmentDueDate =
                parseAssessmentDate(
                    resource.dueDate,
                    true
                );


                   /*---------------------------------
          CHECK START DATE
        ---------------------------------*/

        if (
            !checkAssessmentStart(
                resource.startDate
            )
        ) {

            if (
                questionsContainer
            ) {

                questionsContainer.innerHTML =
                    "";

            }

            return;

        }


        /*---------------------------------
          START COUNTDOWN
        ---------------------------------*/

        if (
            resource.dueDate
        ) {

            startAssessmentCountdown(
                resource.dueDate
            );

        }


        /*---------------------------------
          SHOW QUESTION PAPER
        ---------------------------------*/

        displayQuestionPaper(
            resource
        );

    }


        /*-------------------------------------
          NO QUESTIONS
        -------------------------------------*/

        if (
            assessmentQuestions.length === 0
        ) {

            if (questionsContainer) {

                questionsContainer.innerHTML = `

                    <div class="error-message">

                        No questions are available
                        for this assessment.

                    </div>

                `;

            }


            return;

        }


        /*-------------------------------------
          ASSESSMENT AVAILABLE
        -------------------------------------*/

        assessmentAvailable =
            true;


        /*-------------------------------------
          DISPLAY QUESTIONS
        -------------------------------------*/

        renderQuestions();


        /*-------------------------------------
          ENABLE SUBMIT BUTTON
        -------------------------------------*/

        const submitButton =
            document.getElementById(
                "submitAssessment"
            );


        if (submitButton) {

            submitButton.disabled =
                false;

        }

    }

    catch(error) {

        console.error(
            "Question loading error:",
            error
        );


        if (questionsContainer) {

            questionsContainer.innerHTML = `

                <div class="error-message">

                    Unable to load the assessment.

                    <br><br>

                    Please try again.

                </div>

            `;

        }

    }

}
/*=========================================
* QUESTION PAPER DOWNLOAD
*=========================================*/

function displayQuestionPaper(resource) {

    const assessmentInfo =
        document.getElementById(
            "assessmentInfo"
        );

    if (!assessmentInfo) {
        return;
    }


    /*---------------------------------------
    * REMOVE EXISTING BOX
    *---------------------------------------*/

    const existing =
        document.getElementById(
            "questionPaperBox"
        );

    if (existing) {
        existing.remove();
    }


    /*---------------------------------------
    * GET QUESTION PAPER LINK
    *---------------------------------------*/

    if (
        !resource ||
        !resource.resourceLink
    ) {

        console.log(
            "Question paper link not found."
        );

        return;

    }


    const link =
        String(
            resource.resourceLink
        ).trim();


    if (!link) {
        return;
    }


    /*---------------------------------------
    * CREATE QUESTION PAPER BOX
    *---------------------------------------*/

    const box =
        document.createElement(
            "div"
        );


    box.id =
        "questionPaperBox";


    box.style.cssText = `
        background:#eef4fb;
        border-left:5px solid #124a87;
        padding:15px;
        margin:15px 0 25px 0;
        border-radius:6px;
    `;


    box.innerHTML = `

        <div style="
            font-size:18px;
            font-weight:bold;
            margin-bottom:8px;
        ">

            📄 Question Paper

        </div>


        <p style="
            margin:0 0 12px 0;
        ">

            Download the question paper
            before answering the assessment.

        </p>


        <a
            href="${link}"
            target="_blank"
            rel="noopener noreferrer"
            style="
                display:inline-block;
                padding:11px 18px;
                background:#124a87;
                color:#ffffff;
                text-decoration:none;
                border-radius:6px;
                font-weight:bold;
            "
        >

            📥 Download Question Paper

        </a>

    `;


    /*---------------------------------------
    * INSERT AFTER ASSESSMENT INFORMATION
    *---------------------------------------*/

    assessmentInfo.insertAdjacentElement(
        "afterend",
        box
    );

}
/*=========================================
* RENDER QUESTIONS
*=========================================*/

function renderQuestions() {

    const container =
        document.getElementById(
            "questions"
        );


    if (!container) {

        console.error(
            "Questions container not found."
        );

        return;

    }


    container.innerHTML =
        "";


    let currentHeading =
        "";


    assessmentQuestions.forEach(
        (question, index) => {

            /*---------------------------------
              QUESTION HEADING
            ---------------------------------*/

            const heading =
                String(
                    question[
                        "Question Heading"
                    ] || ""
                ).trim();


            if (
                heading &&
                heading !== currentHeading
            ) {

                currentHeading =
                    heading;


                const headingElement =
                    document.createElement(
                        "h2"
                    );


                headingElement.className =
                    "question-heading";


                headingElement.textContent =
                    heading;


                container.appendChild(
                    headingElement
                );

            }


            /*---------------------------------
              QUESTION NUMBER
            ---------------------------------*/

            const questionNumber =
                question[
                    "Question No."
                ];


            /*---------------------------------
              QUESTION CARD
            ---------------------------------*/

            const questionElement =
                document.createElement(
                    "div"
                );


            questionElement.className =
                "question";


            questionElement.dataset.index =
                index;


            /*---------------------------------
              QUESTION TITLE
            ---------------------------------*/

            const numberElement =
                document.createElement(
                    "div"
                );


            numberElement.className =
                "question-number";


            numberElement.textContent =
                questionNumber !== "" &&
                questionNumber !== null &&
                questionNumber !== undefined
                    ? questionNumber
                    : `Question ${index + 1}`;


            questionElement.appendChild(
                numberElement
            );


            /*---------------------------------
              OPTIONS
            ---------------------------------*/

            const options = [
                "A",
                "B",
                "C",
                "D",
                "E"
            ];


            options.forEach(
                optionLetter => {

                    const optionValue =
                        question[
                            "Option " +
                            optionLetter
                        ];


                    /*-------------------------
                      SKIP EMPTY OPTIONS
                    -------------------------*/

                    if (
                        optionValue === "" ||
                        optionValue === null ||
                        optionValue === undefined
                    ) {

                        return;

                    }


                    const label =
                        document.createElement(
                            "label"
                        );


                    label.className =
                        "option";


                    const input =
                        document.createElement(
                            "input"
                        );


                    input.type =
                        "radio";


                    input.name =
                        "question_" +
                        index;


                    input.value =
                        optionLetter;


                    input.dataset.questionIndex =
                        index;


                    /*-------------------------
                      OPTION TEXT
                    -------------------------*/

                    const text =
                        document.createTextNode(
                            " " +
                            optionLetter +
                            ". " +
                            String(
                                optionValue
                            )
                        );


                    label.appendChild(
                        input
                    );


                    label.appendChild(
                        text
                    );


                    questionElement.appendChild(
                        label
                    );

                }
            );


            /*---------------------------------
              ADD QUESTION TO CONTAINER
            ---------------------------------*/

            container.appendChild(
                questionElement
            );

        }
    );


    /*-----------------------------------------
      SCROLL TO TOP OF QUESTIONS
    -----------------------------------------*/

    container.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/*=========================================
* GET LEARNER ANSWERS
*=========================================*/

function getLearnerAnswers() {

    const answers = [];


    assessmentQuestions.forEach(
        (question, index) => {

            const selected =
                document.querySelector(
                    `input[name="question_${index}"]:checked`
                );


            answers.push({

                questionIndex:
                    index,

                questionNo:
                    question[
                        "Question No."
                    ],

                answer:
                    selected
                        ? selected.value
                        : ""

            });

        }
    );


    return answers;

}


/*=========================================
* CHECK ALL QUESTIONS ANSWERED
*=========================================*/

function validateAnswers() {

    const answers =
        getLearnerAnswers();


    const unanswered =
        answers.filter(
            answer =>
                answer.answer === ""
        );


    if (
        unanswered.length > 0
    ) {

        const proceed =
            confirm(

                `${unanswered.length} question(s) ` +
                `have not been answered.\n\n` +
                `Do you want to submit anyway?`

            );


        if (!proceed) {

            return false;

        }

    }


    return true;

}


/*=========================================
* ESCAPE HTML
*=========================================*/

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


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
/*=========================================
* SUBMIT ASSESSMENT
*=========================================*/

async function submitAssessment() {

    /*-----------------------------------------
      PREVENT SUBMISSION IF CLOSED
    -----------------------------------------*/

    if (!assessmentAvailable) {

        alert(
            "This assessment is not currently available."
        );

        return;

    }


    /*-----------------------------------------
      CHECK SOURCE CODE
    -----------------------------------------*/

    if (!sourceCode) {

        alert(
            "Assessment code could not be found."
        );

        return;

    }


    /*-----------------------------------------
      CHECK LEARNER EMAIL
    -----------------------------------------*/

    learnerEmail =
        getLearnerEmail();


    if (!learnerEmail) {

        alert(
            "Learner login information could not be found. " +
            "Please return to the dashboard and log in again."
        );

        return;

    }


    /*-----------------------------------------
      CHECK DUE DATE AGAIN
      This protects against submitting after
      the countdown has expired.
    -----------------------------------------*/

    if (assessmentDueDate) {

        const now =
            new Date();


        if (
            now.getTime() >=
            assessmentDueDate.getTime()
        ) {

            assessmentAvailable =
                false;


            const submitButton =
                document.getElementById(
                    "submitAssessment"
                );


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "Assessment Closed";

            }


            alert(
                "The submission deadline has passed."
            );

            return;

        }

    }


    /*-----------------------------------------
      VALIDATE ANSWERS
    -----------------------------------------*/

    if (!validateAnswers()) {

        return;

    }


    /*-----------------------------------------
      GET ANSWERS
    -----------------------------------------*/

    const answers =
        getLearnerAnswers();


    /*-----------------------------------------
      CONFIRM SUBMISSION
    -----------------------------------------*/

    const confirmed =
        confirm(

            "Are you sure you want to submit your assessment?\n\n" +
            "You will use one of your available attempts."

        );


    if (!confirmed) {

        return;

    }


    /*-----------------------------------------
      DISABLE BUTTON
    -----------------------------------------*/

    const submitButton =
        document.getElementById(
            "submitAssessment"
        );


    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.textContent =
            "Submitting...";

    }


    /*-----------------------------------------
      PREPARE REQUEST
    -----------------------------------------*/

    const request = {

        action:
            "submitAssessment",

        email:
            learnerEmail,

        sourceCode:
            sourceCode,

        answers:
            answers

    };


    console.log(
        "Submitting assessment:",
        request
    );


    /*-----------------------------------------
      SEND TO GOOGLE APPS SCRIPT
    -----------------------------------------*/

    try {

        const response =
            await fetch(
                API_URL,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "text/plain;charset=utf-8"

                    },

                    body:
                        JSON.stringify(
                            request
                        )

                }
            );


        const result =
            await response.json();


        console.log(
            "Submission result:",
            result
        );


        /*-------------------------------------
          SUBMITTED SUCCESSFULLY
        -------------------------------------*/

        if (
            result.status ===
            "submitted"
        ) {

            assessmentAvailable =
                false;


            if (
                assessmentCountdownInterval
            ) {

                clearInterval(
                    assessmentCountdownInterval
                );

            }


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "Assessment Submitted";

            }


            const info =
                document.getElementById(
                    "assessmentInfo"
                );


            if (info) {

                info.innerHTML += `

                    <div class="attempt-info">

                        <strong>
                            Assessment submitted successfully.
                        </strong>

                        <br><br>

                        Attempt:
                        ${result.attempt || ""}

                        /
                        ${result.maxAttempts || MAX_ATTEMPTS}

                        <br>

                        Score:
                        ${result.score || 0}
                        /
                        ${result.totalMarks || 0}

                        <br>

                        Percentage:
                        ${
                            result.percentage !== undefined
                                ? Number(
                                    result.percentage
                                  ).toFixed(2)
                                : "0.00"
                        }%

                    </div>

                `;

            }


            /*---------------------------------
              SHOW RESULT
            ---------------------------------*/

            alert(

                "Assessment submitted successfully.\n\n" +

                "Score: " +
                (result.score || 0) +
                " / " +
                (result.totalMarks || 0) +
                "\n\n" +

                "Percentage: " +
                (
                    result.percentage !== undefined
                        ? Number(
                            result.percentage
                          ).toFixed(2)
                        : "0.00"
                ) +
                "%"

            );


            return;

        }


        /*-------------------------------------
          MAXIMUM ATTEMPTS
        -------------------------------------*/

        if (
            result.status ===
            "max_attempts"
        ) {

            assessmentAvailable =
                false;


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "No Attempts Remaining";

            }


            alert(
                result.message ||
                "You have used all available attempts."
            );


            return;

        }


        /*-------------------------------------
          ASSESSMENT CLOSED
        -------------------------------------*/

        if (
            result.status ===
            "closed"
        ) {

            assessmentAvailable =
                false;


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "Assessment Closed";

            }


            alert(
                result.message ||
                "The assessment deadline has passed."
            );


            return;

        }


        /*-------------------------------------
          LEARNER NOT REGISTERED
        -------------------------------------*/

        if (
            result.status ===
            "not_registered"
        ) {

            alert(
                "Learner is not registered."
            );


            return;

        }


        /*-------------------------------------
          OTHER ERROR
        -------------------------------------*/

        alert(

            result.message ||
            "Assessment submission failed."

        );


        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.textContent =
                "Submit Final Answers";

        }

    }

    catch(error) {

        console.error(
            "Submission error:",
            error
        );


        alert(
            "An error occurred while submitting " +
            "the assessment. Please try again."
        );


        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.textContent =
                "Submit Final Answers";

        }

    }

}
/*=========================================
* INITIALIZE ASSESSMENT
*=========================================*/

function initializeAssessment() {

    console.log(
        "AIR Assessment initializing..."
    );


    /*-----------------------------------------
      GET SELECTED ASSESSMENT
    -----------------------------------------*/

    sourceCode =
        sessionStorage.getItem(
            "selectedAssessment"
        );


    /*-----------------------------------------
      FALLBACK TO URL
    -----------------------------------------*/

    if (!sourceCode) {

        const params =
            new URLSearchParams(
                window.location.search
            );

        sourceCode =
            params.get(
                "sourceCode"
            );

    }


    console.log(
        "Assessment source code:",
        sourceCode
    );


    /*-----------------------------------------
      CHECK SOURCE CODE
    -----------------------------------------*/

    if (!sourceCode) {

        const info =
            document.getElementById(
                "assessmentInfo"
            );

        if (info) {

            info.innerHTML = `

                <div class="error-message">

                    Assessment code is missing.

                </div>

            `;

        }

        return;

    }


    /*-----------------------------------------
      LOAD QUESTIONS
    -----------------------------------------*/

    loadQuestions();

}