
/*=========================================
  AIR TOPIC PAGE
=========================================*/

const TOPIC_WEB_APP_URL =
"https://script.google.com/macros/s/AKfycbyHu4hLVGKehFONLXDdVsXUaFOxbuP2Abkd6Ybg66jMN82TL0krHOzjheBQCMzhUSBg/exec";

/*=========================================
  LOAD TOPIC
=========================================*/

function loadTopic(){

    const topicCode = sessionStorage.getItem("selectedTopic");

    if(!topicCode){

        document.getElementById("topicInformation").innerHTML =
        "<h3>No topic selected.</h3>";

        return;

    }
document.getElementById("resources").innerHTML = "";
  fetch(
    TOPIC_WEB_APP_URL +
    "?action=operation" +
    "&topicCode=" + encodeURIComponent(topicCode) +
    "&_=" + Date.now(),
    {
        cache: "no-store"
    }
)
    .then(response => response.json())

    .then(data => {

        console.log(data);

        displayTopic(data);

    })

    .catch(error => {

        console.error(error);

        document.getElementById("topicInformation").innerHTML =

        "<h3>Unable to load topic.</h3>";

    });

}
/*=========================================
  DISPLAY TOPIC
=========================================*/

function displayTopic(data){

    const topic = data.topic;

    const resources = data.resources;

    document.getElementById("topicTitle").innerHTML =
        topic["Remarks"];

    document.getElementById("topicCode").innerHTML =
        topic["Topic Code"];

    document.getElementById("topicInformation").innerHTML =

    `
    <div class="card">

        <p><strong>Assignment Due:</strong>
        ${topic["Assignment Due"]}</p>

        <p><strong>Topic Test:</strong>
        ${topic["Topic Test Date"]}</p>

        <p><strong>Google Meet:</strong> ${topic["Google Meet Date"]}</p>

<p><strong>Time:</strong> ${topic["Google Meet Time"]}</p>

${
topic["Google Meet Link"]
?
`
<a href="${topic["Google Meet Link"]}"
   target="_blank"
   class="meet-btn">

   🎥 Join Google Meet

</a>
`
:
`<p><strong>Meeting Link:</strong> Coming Soon</p>`
}
        <p><strong>Mentor:</strong>
        ${topic["Mentor Name"] || "TBA"}</p>

        <p><strong>Guest:</strong>
        ${topic["Guest Name"] || "TBA"}</p>

        <p><strong>Status:</strong>
        ${topic["Status"]}</p>

    </div>

    `;

    loadResources(resources);

}

/*=========================================
  LOAD RESOURCES
=========================================*/

function loadResources(resources){

    const container =
        document.getElementById("resources");


    /*-----------------------------------------
      CLEAR EXISTING RESOURCES
    -----------------------------------------*/

    container.innerHTML = "";


    let html = "";


    /*-----------------------------------------
      CREATE RESOURCE CARDS
    -----------------------------------------*/

    resources.forEach(resource => {

        html +=
            createResource(resource);

    });


    /*-----------------------------------------
      DISPLAY RESOURCES
    -----------------------------------------*/

    container.innerHTML =
        html;


    /*-----------------------------------------
      LOAD ASSESSMENT STATUS
    -----------------------------------------*/

    resources.forEach(resource => {

        const type =
            String(
                resource["Resource Type"] || ""
            )
            .trim()
            .toLowerCase();


        if(
            type === "test" ||
            type === "assignment"
        ){

            loadAssessmentCardStatus(
                resource
            );

        }

    });


    /*-----------------------------------------
      START COUNTDOWN TIMER
    -----------------------------------------*/

    startTopicAssessmentTimer();

}
   
/*=========================================
  GET LEARNER EMAIL
=========================================*/

function getTopicLearnerEmail(){

    const storedUser =
        sessionStorage.getItem(
            "airUser"
        );


    if(!storedUser){

        return "";

    }


    try{

        const user =
            JSON.parse(
                storedUser
            );


        return String(
            user.email || ""
        ).trim();

    }

    catch(error){

        console.error(
            "Unable to read learner information:",
            error
        );


        return "";

    }

}
/*=========================================
  PARSE ASSESSMENT DATE + TIME
=========================================*/

function parseTopicAssessmentDate(
    value,
    timeValue,
    endOfDay
){

    if(
        !value
    ){

        return null;

    }


    const text =
        String(
            value
        ).trim();


    /*
     * Expected date format:
     *
     * 11 Aug 2026
     */

    const match =
        text.match(
            /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/
        );


    let date = null;


    if(
        match
    ){

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
            months[
                match[2].toLowerCase()
            ];


        if(
            month !== undefined
        ){

            date =
                new Date(
                    Number(
                        match[3]
                    ),
                    month,
                    Number(
                        match[1]
                    )
                );

        }

    }


    /*
     * Fallback for other valid
     * date formats.
     */

    if(
        !date
    ){

        date =
            new Date(
                value
            );

    }


    if(
        isNaN(
            date.getTime()
        )
    ){

        return null;

    }


    /*=====================================
      APPLY TIME
    =====================================*/

    let hours = 0;

    let minutes = 0;


    /*
     * If a time was supplied,
     * read it.
     */

    if(
        timeValue !== undefined &&
        timeValue !== null &&
        String(
            timeValue
        ).trim() !== ""
    ){

        const timeText =
            String(
                timeValue
            ).trim();


        /*
         * HH:mm
         */

        const timeMatch =
            timeText.match(
                /^(\d{1,2}):(\d{2})$/
            );


        if(
            timeMatch
        ){

            hours =
                Number(
                    timeMatch[1]
                );

            minutes =
                Number(
                    timeMatch[2]
                );

        }

        else{

            /*
             * Try formats such as:
             *
             * 8:00 AM
             * 5:30 PM
             */

            const parsedTime =
                new Date(
                    "1970-01-01 " +
                    timeText
                );


            if(
                !isNaN(
                    parsedTime.getTime()
                )
            ){

                hours =
                    parsedTime.getHours();

                minutes =
                    parsedTime.getMinutes();

            }

        }

    }


    /*
     * If no time was supplied,
     * preserve the old behaviour.
     *
     * Start:
     * 00:00
     *
     * End:
     * 23:59:59
     */

    if(
        !timeValue ||
        String(
            timeValue
        ).trim() === ""
    ){

        if(
            endOfDay
        ){

            date.setHours(
                23,
                59,
                59,
                999
            );

        }

        else{

            date.setHours(
                0,
                0,
                0,
                0
            );

        }

    }

    else{

        date.setHours(
            hours,
            minutes,
            endOfDay
            ?
            59
            :
            0,
            endOfDay
            ?
            999
            :
            0
        );

    }


    return date;

}


/*=========================================
  FORMAT ASSESSMENT DATE/TIME
=========================================*/

function formatTopicAssessmentDateTime(
    date
){

    if(
        !date ||
        isNaN(
            date.getTime()
        )
    ){

        return "";

    }


    return date.toLocaleString(
        undefined,
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}
/*=========================================
  FORMAT REMAINING TIME
=========================================*/

function formatTopicRemainingTime(
    milliseconds
){

    if(
        milliseconds <= 0
    ){

        return "0m";

    }


    const totalSeconds =
        Math.floor(
            milliseconds / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    let result =
        "";


    if(
        days > 0
    ){

        result +=
            days +
            "d ";

    }


    if(
        hours > 0 ||
        days > 0
    ){

        result +=
            hours +
            "h ";

    }


    if(
        minutes > 0 ||
        hours > 0 ||
        days > 0
    ){

        result +=
            minutes +
            "m ";

    }


    result +=
        seconds +
        "s";


    return result.trim();

}

/*=========================================
  LOAD ASSESSMENT CARD STATUS
=========================================*/

async function loadAssessmentCardStatus(
    resource
){

    const sourceCode =
        String(
            resource["Resource Code"] || ""
        ).trim();


    const resourceType =
        String(
            resource["Resource Type"] || ""
        )
        .trim()
        .toLowerCase();


    if(
        !sourceCode
    ){

        return;

    }


    const statusElement =
        document.querySelector(
            `[data-assessment-status="${sourceCode}"]`
        );


    const button =
        document.querySelector(
            `[data-assessment-button="${sourceCode}"]`
        );


    if(
        !statusElement
    ){

        return;

    }


    /*=========================================
      EXACT START DATE + TIME
    =========================================*/

    const startDate =
        parseTopicAssessmentDate(
            resource["Start Date"],
            resource["Start Time"],
            false
        );


    /*=========================================
      EXACT END DATE + TIME
    =========================================*/

    const dueDate =
        parseTopicAssessmentDate(
            resource["Due Date"],
            resource["End Time"],
            true
        );


    const now =
        new Date();


    const assessmentName =
        resourceType === "assignment"
        ?
        "Assignment"
        :
        "Test";


    /*=========================================
      NOT STARTED / UPCOMING
    =========================================*/

    if(
        startDate &&
        now.getTime() <
        startDate.getTime()
    ){

        statusElement.innerHTML = `

            <div
                style="
                    padding:12px;
                    background:#fff8e1;
                    border-left:4px solid #e0a800;
                    border-radius:5px;
                "
            >

                🟡
                <strong>
                    Upcoming
                </strong>

                <br>

                Starts:
                <strong>
                    ${formatTopicAssessmentDateTime(
                        startDate
                    )}
                </strong>

                ${
                    dueDate
                    ?
                    `
                    <br>

                    Ends:
                    <strong>
                        ${formatTopicAssessmentDateTime(
                            dueDate
                        )}
                    </strong>
                    `
                    :
                    ""
                }

                <br>

                🔒
                ${assessmentName}
                not available yet.

            </div>

        `;


        if(
            button
        ){

            button.disabled =
                true;

            button.style.opacity =
                "0.6";

            button.style.cursor =
                "not-allowed";

            button.textContent =
                "🔒 Not Available Yet";

        }


        return;

    }


    /*=========================================
      CLOSED
    =========================================*/

    if(
        dueDate &&
        now.getTime() >
        dueDate.getTime()
    ){

        statusElement.innerHTML = `

            <div
                style="
                    padding:12px;
                    background:#ffeaea;
                    border-left:4px solid #b00020;
                    border-radius:5px;
                    color:#b00020;
                "
            >

                🔴
                <strong>
                    Closed
                </strong>

                <br>

                Ended:
                <strong>
                    ${formatTopicAssessmentDateTime(
                        dueDate
                    )}
                </strong>

                <br>

                The
                ${assessmentName.toLowerCase()}
                submission deadline has passed.

            </div>

        `;


        if(
            button
        ){

            button.disabled =
                true;

            button.style.opacity =
                "0.6";

            button.style.cursor =
                "not-allowed";

            button.textContent =
                "🔒 Closed";

        }


        return;

    }


    /*=========================================
      LEARNER
    =========================================*/

    const email =
        getTopicLearnerEmail();


    let attempts = 0;

    let remaining = 2;

    let maxAttempts = 2;

    let latestResult = null;


    /*=========================================
      LOAD ATTEMPTS
    =========================================*/

    if(
        email
    ){

        try{

            const attemptsURL =
                TOPIC_WEB_APP_URL +
                "?action=attempts" +
                "&email=" +
                encodeURIComponent(
                    email
                ) +
                "&sourceCode=" +
                encodeURIComponent(
                    sourceCode
                ) +
                "&_=" +
                Date.now();


            const response =
                await fetch(
                    attemptsURL,
                    {
                        cache:
                            "no-store"
                    }
                );


            const result =
                await response.json();


            if(
                result.status ===
                "success"
            ){

                attempts =
                    Number(
                        result.attempts ||
                        0
                    );


                maxAttempts =
                    Number(
                        result.maxAttempts ||
                        2
                    );


                remaining =
                    Number(
                        result.remaining ??
                        Math.max(
                            maxAttempts -
                            attempts,
                            0
                        )
                    );

            }

        }

        catch(error){

            console.error(
                "Attempt status error:",
                error
            );

        }


        /*=====================================
          LOAD RESULTS
        =====================================*/

        try{

            const resultsURL =
                TOPIC_WEB_APP_URL +
                "?action=results" +
                "&email=" +
                encodeURIComponent(
                    email
                ) +
                "&_=" +
                Date.now();


            const response =
                await fetch(
                    resultsURL,
                    {
                        cache:
                            "no-store"
                    }
                );


            const result =
                await response.json();


            if(
                result.status ===
                "success" &&
                Array.isArray(
                    result.results
                )
            ){

                const matchingResults =
                    result.results.filter(
                        item => {

                            return String(
                                item.code || ""
                            ).trim()
                            ===
                            sourceCode;

                        }
                    );


                if(
                    matchingResults.length >
                    0
                ){

                    matchingResults.sort(
                        (
                            a,
                            b
                        ) => {

                            return (
                                Number(
                                    b.attempt || 0
                                )
                                -
                                Number(
                                    a.attempt || 0
                                )
                            );

                        }
                    );


                    latestResult =
                        matchingResults[0];

                }

            }

        }

        catch(error){

            console.error(
                "Results status error:",
                error
            );

        }

    }


    /*=========================================
      ALL ATTEMPTS USED
    =========================================*/

    if(
        attempts >= maxAttempts
    ){

        let resultText =
            "";


        if(
            latestResult
        ){

            resultText = `

                <br>

                Latest score:
                <strong>
                    ${latestResult.score}
                    /
                    ${latestResult.total}
                </strong>

                <br>

                Percentage:
                <strong>
                    ${latestResult.percentage}%
                </strong>

            `;

        }


        statusElement.innerHTML = `

            <div
                style="
                    padding:12px;
                    background:#e8f1fb;
                    border-left:4px solid #124a87;
                    border-radius:5px;
                "
            >

                🔵
                <strong>
                    Submitted
                </strong>

                <br>

                Attempts:
                <strong>
                    ${attempts} / ${maxAttempts}
                </strong>

                ${resultText}

            </div>

        `;


        if(
            button
        ){

            button.disabled =
                true;

            button.style.opacity =
                "0.6";

            button.style.cursor =
                "not-allowed";

            button.textContent =
                "🔒 No Attempts Remaining";

        }


        return;

    }


    /*=========================================
      AVAILABLE
    =========================================*/

    let submittedText =
        "";


    if(
        latestResult
    ){

        submittedText = `

            <div
                style="
                    margin-top:5px;
                "
            >

                Latest submission:
                <strong>
                    ${latestResult.percentage}%
                </strong>

            </div>

        `;

    }


    statusElement.innerHTML = `

        <div
            style="
                padding:12px;
                background:#eef7ee;
                border-left:4px solid #2e7d32;
                border-radius:5px;
            "
        >

            🟢
            <strong>
                Available
            </strong>

            <br>

            Starts:
            <strong>
                ${
                    startDate
                    ?
                    formatTopicAssessmentDateTime(
                        startDate
                    )
                    :
                    "Not specified"
                }
            </strong>

            <br>

            ${
                dueDate
                ?
                `
                Ends:
                <strong>
                    ${formatTopicAssessmentDateTime(
                        dueDate
                    )}
                </strong>

                <br>

                <span
                    class="assessment-card-countdown"
                    data-due="${dueDate.getTime()}"
                >
                    ⏳ Time remaining:
                    ${formatTopicRemainingTime(
                        dueDate.getTime() -
                        Date.now()
                    )}
                </span>
                `
                :
                `
                <span>
                    No closing date
                </span>
                `
            }

            <br>

            Attempts:
            <strong>
                ${attempts} / ${maxAttempts}
            </strong>

            <br>

            Attempts remaining:
            <strong>
                ${remaining}
            </strong>

            ${submittedText}

        </div>

    `;


    /*
     * Keep the working
     * Start Test /
     * Start Assignment button.
     */

    if(
        button
    ){

        button.disabled =
            false;

        button.style.opacity =
            "1";

        button.style.cursor =
            "pointer";

    }

}



/*=========================================
  UPDATE CARD COUNTDOWNS
=========================================*/

function updateTopicAssessmentCountdowns(){

    document
        .querySelectorAll(
            ".assessment-card-countdown"
        )
        .forEach(
            element => {

                const due =
                    Number(
                        element.dataset.due
                    );


                if(
                    !due
                ){

                    return;

                }


                const difference =
                    due -
                    Date.now();


                if(
                    difference <= 0
                ){

                    element.textContent =
                        "🔴 Submission deadline passed.";

                    return;

                }


                element.textContent =
                    "⏳ Time remaining: " +
                    formatTopicRemainingTime(
                        difference
                    );

            }
        );

}


/*=========================================
  START CARD COUNTDOWN
=========================================*/

var topicAssessmentTimer = null;


function startTopicAssessmentTimer(){

    if(
        topicAssessmentTimer
    ){

        clearInterval(
            topicAssessmentTimer
        );

    }


    topicAssessmentTimer =
        setInterval(
            updateTopicAssessmentCountdowns,
            1000
        );


    updateTopicAssessmentCountdowns();

}
/*=========================================
  CREATE RESOURCE
=========================================*/

function createResource(resource){

    const resourceType =
        String(
            resource["Resource Type"] || ""
        )
        .trim()
        .toLowerCase();


    const sourceCode =
        String(
            resource["Resource Code"] || ""
        ).trim();


    let html = `

        <div class="card">

            <h3>
                ${resource["Resource Type"] || ""}
            </h3>

            <h2>
                ${resource["Resource Title"] || ""}
            </h2>

            <p>
                ${resource["Resource Description"] || ""}
            </p>

    `;


    /*=========================================
      TEST / ASSIGNMENT STATUS AREA
    =========================================*/

    if(
        resourceType === "test" ||
        resourceType === "assignment"
    ){

        html += `

            <div
                class="assessment-card-status"
                data-assessment-status="${sourceCode}"
                style="
                    margin:15px 0;
                "
            >

                <div
                    style="
                        padding:12px;
                        background:#f5f7fa;
                        border-left:4px solid #999;
                        border-radius:5px;
                        color:#555;
                    "
                >

                    Checking status...

                </div>

            </div>

        `;

    }


    /*=========================================
      TEST
    =========================================*/

    if(
        resourceType === "test"
    ){

        html += `

            <button
                type="button"
                class="resource-btn assessment-start-button"
                data-assessment-button="${sourceCode}"
                onclick="openAssessment(
                    '${sourceCode}',
                    'Test'
                )"
            >

                📝 Start Test

            </button>

        `;

    }


    /*=========================================
      ASSIGNMENT
    =========================================*/

    else if(
        resourceType === "assignment"
    ){

        html += `

            <button
                type="button"
                class="resource-btn assessment-start-button"
                data-assessment-button="${sourceCode}"
                onclick="openAssessment(
                    '${sourceCode}',
                    'Assignment'
                )"
            >

                📄 Start Assignment

            </button>

        `;

    }


    /*=========================================
      VIDEO
    =========================================*/

    else if(
        resourceType === "video" &&
        resource["Resource Link"]
    ){

        html += `

                       <iframe
                width="560"
                height="315"
                src="${convertVideoLink(
                    resource["Resource Link"]
                )}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>

        `;

    }


    /*=========================================
      VIDEO WITHOUT LINK
    =========================================*/

    else if(
        resourceType === "video"
    ){

        html += `

            <div class="coming-video">

                <h3>
                    🎥 Video Coming Soon
                </h3>

                <p>
                    This lesson video has not
                    been uploaded yet.
                </p>

            </div>

        `;

    }


    /*=========================================
      OTHER RESOURCES
    =========================================*/

    else if(
        resource["Resource Link"]
    ){

        html += `

            <a
                href="${resource["Resource Link"]}"
                target="_blank"
                class="resource-btn"
            >

                📄 Open Resource

            </a>

        `;

    }


    /*=========================================
      RESOURCE WITHOUT LINK
    =========================================*/

    else{

        html += `

            <div class="coming-video">

                <h3>
                    📄 Resource Coming Soon
                </h3>

                <p>
                    This resource has not
                    been uploaded yet.
                </p>

            </div>

        `;

    }


    html += `

        </div>

        <br>

    `;


    return html;

}
/*=========================================
  OPEN ASSESSMENT
=========================================*/

function openAssessment(
    sourceCode,
    assessmentType
){

    if(!sourceCode){

        console.error(
            "Assessment source code is missing."
        );

        return;

    }


    /*-----------------------------------------
      DEFAULT TYPE
    -----------------------------------------*/

    assessmentType =
        assessmentType ||
        "Test";


    /*-----------------------------------------
      SAVE SELECTED ASSESSMENT
    -----------------------------------------*/

    sessionStorage.setItem(
        "selectedAssessment",
        sourceCode
    );


    /*-----------------------------------------
      SAVE ASSESSMENT TYPE
    -----------------------------------------*/

    sessionStorage.setItem(
        "selectedAssessmentType",
        assessmentType
    );


    /*-----------------------------------------
      LOAD ASSESSMENT INSIDE PORTAL
    -----------------------------------------*/

    loadPage(
        "assessment"
    );

}


/*=========================================
  CONVERT YOUTUBE LINK
=========================================*/

function convertVideoLink(url) {

    if (!url) return "";

    // YouTube
    if (url.includes("youtube.com/watch")) {

        const id = new URL(url).searchParams.get("v");
        if (id) return "https://www.youtube-nocookie.com/embed/" + id;

    }

    // youtu.be
    if (url.includes("youtu.be")) {

        const id = url.split("youtu.be/")[1].split("?")[0];
        return "https://www.youtube-nocookie.com/embed/" + id;

    }

    // Vimeo
    if (url.includes("vimeo.com")) {

        const id = url.split("/").pop().split("?")[0];
        return "https://player.vimeo.com/video/" + id;

    }

    // Google Drive
    if (url.includes("drive.google.com")) {

        const match = url.match(/\/d\/([^/]+)/);

        if (match) {
            return `https://drive.google.com/file/d/${match[1]}/preview`;
        }

    }

    // All other links
    return url;
}

