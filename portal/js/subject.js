

/* ==========================================
   AIR SUBJECT PAGE
========================================== */

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzzdqYVibzsOsOI6il0Jp6xKYM-pP3SD-g0rRP4-E08mFEYJaoyxk4b7AbL_AaKtPx6/exec";

/* ==========================================
   LOAD SUBJECT
========================================== */

function loadSubject() {

    const subjectCode = sessionStorage.getItem("selectedSubject");

    if (!subjectCode) {

        document.getElementById("academicPlan").innerHTML =
            "<h3>No subject selected.</h3>";

        return;

    }

    const title = document.getElementById("subjectTitle");
    const description = document.getElementById("subjectDescription");

    switch (subjectCode) {

        case "ZA-MAT-G12":

            title.innerHTML = "Mathematics";
            description.innerHTML = "South Africa • Grade 12";

            break;

        case "ZA-PHY-G12":

            title.innerHTML = "Physical Sciences";
            description.innerHTML = "South Africa • Grade 12";

            break;

          case "ZA-LO-G12":

            title.innerHTML = "Life Orientation";
            description.innerHTML = "South Africa • Grade 12";

            break;
   

        default:

            title.innerHTML = subjectCode;
            description.innerHTML = "";

    }

    loadAcademicPlan(subjectCode);

}

/* ==========================================
   OPEN TOPIC
========================================== */

function openTopic(topicCode) {

    console.log("Opening topic:", topicCode);

    sessionStorage.setItem("selectedTopic", topicCode);

    loadPage("topic");

}
/* ==========================================
   LOAD ACADEMIC PLAN
========================================== */

function loadAcademicPlan(subjectCode) {

    document.getElementById("academicPlan").innerHTML =
        "<p>Loading academic plan...</p>";

    fetch(

        WEB_APP_URL +
        "?action=plan&subjectCode=" +
        encodeURIComponent(subjectCode)

    )

    .then(response => response.json())

    .then(data => {

        console.log(data);

        if (!Array.isArray(data) || data.length === 0) {

            document.getElementById("academicPlan").innerHTML =
                "<h3>No academic plan found.</h3>";

            return;

        }

        let html = "";

        data.forEach(topic => {

            html += `

            <div class="card">

                <h3>${topic.module}</h3>

                <h2>${topic.topicTitle}</h2>

                <p><strong>Topic Code:</strong> ${topic.topicCode}</p>

                <p><strong>Start Date:</strong> ${formatDate(topic.startDate)}</p>

                <p><strong>End Date:</strong> ${formatDate(topic.endDate)}</p>

                <p><strong>Status:</strong> ${topic.status}</p>

                <button onclick="openTopic('${topic.topicCode}')">

                    Open Topic

                </button>

            </div>

            <br>

            `;

        });

        document.getElementById("academicPlan").innerHTML = html;

    })

    .catch(error => {

        console.error(error);

        document.getElementById("academicPlan").innerHTML =

            "<h3>Unable to load Academic Plan.</h3>";

    });

}

/* ==========================================
   FORMAT DATE
========================================== */

function formatDate(dateValue) {

    if (!dateValue) return "";

    const date = new Date(dateValue);

    if (isNaN(date.getTime())) {

        return dateValue;

    }

    return date.toLocaleDateString("en-GB", {

        day: "2-digit",
        month: "short",
        year: "numeric"

    });

}


