/*=========================================
  AIR PORTAL APPLICATION ENGINE
=========================================*/

const AIR = {

    user: null,

    currentPage: "dashboard",

    selectedSubject: null,

    selectedTopic: null

};

/*=========================================
  LOAD PAGE
=========================================*/

async function loadPage(page){

    try{

        const response = await fetch(`pages/${page}.html`);

        if(!response.ok){

            throw new Error("Page not found");

        }

        const html = await response.text();

        const content = document.getElementById("content");

        if(content){

            content.innerHTML = html;

        }

        AIR.currentPage = page;

        initializePage(page);

    }

    catch(error){

        console.warn(`${page}.html not found.`);

        showComingSoon(page);

    }

}

/*=========================================
  INITIALIZE PAGE
=========================================*/

function initializePage(page){

    switch(page){

        case "dashboard":

            if(typeof loadDashboard==="function"){

                loadDashboard();

            }

        break;

        case "subjects":

            if(typeof loadSubjects==="function"){

                loadSubjects();

            }

        break;

        case "subject":

            if(typeof loadSubject==="function"){

                loadSubject();

            }

        break;

        case "topic":

            if(typeof loadTopic==="function"){

                loadTopic();

            }

        break;

       case "assessment":

    if (
        typeof initializeAssessment ===
        "function"
    ) {

        initializeAssessment();

    }

break;

        case "assignments":

            if(typeof loadAssignments==="function"){

                loadAssignments();

            }

        break;

        case "tests":

            if(typeof loadTests==="function"){

                loadTests();

            }

        break;

       case "results":

    if (
        typeof initializeResults ===
        "function"
    ) {

        initializeResults();

    }

break;
        case "resources":

            if(typeof loadResources==="function"){

                loadResources();

            }

        break;

        case "announcements":

            if(typeof loadAnnouncements==="function"){

                loadAnnouncements();

            }

        break;

        case "calendar":

            if(typeof loadCalendar==="function"){

                loadCalendar();

            }

        break;

        case "profile":

            if(typeof loadProfile==="function"){

                loadProfile();

            }

        break;

        case "settings":

            if(typeof loadSettings==="function"){

                loadSettings();

            }

        break;

        case "research":

            if(typeof loadResearch==="function"){

                loadResearch();

            }

        break;

        case "reports":

            if(typeof loadReports==="function"){

                loadReports();

            }

        break;

        case "users":

            if(typeof loadUsers==="function"){

                loadUsers();

            }

        break;

        case "countries":

            if(typeof loadCountries==="function"){

                loadCountries();

            }

        break;

        case "programmes":

            if(typeof loadProgrammes==="function"){

                loadProgrammes();

            }

        break;

        case "learners":

            if(typeof loadLearners==="function"){

                loadLearners();

            }

        break;

        case "audit":

            if(typeof loadAudit==="function"){

                loadAudit();

            }

        break;

    }

}

/*=========================================
  COMING SOON PAGE
=========================================*/

function showComingSoon(page){

    const content = document.getElementById("content");

    if(!content) return;

    const title = page.charAt(0).toUpperCase() + page.slice(1);

    content.innerHTML = `

        <div class="coming-soon">

            <h1>🚧 ${title}</h1>

            <h3>Module Under Development</h3>

            <p>

                This section of the AIR Portal is currently under development.

            </p>

            <p>

                It will be available in a future update.

            </p>

        </div>

    `;

}

/*=========================================
  OPEN SUBJECT
=========================================*/

function openSubject(subjectCode){

    AIR.selectedSubject = subjectCode;

    sessionStorage.setItem("selectedSubject", subjectCode);

    loadPage("subject");

}

/*=========================================
  OPEN TOPIC
=========================================*/

function openTopic(topicCode){

    AIR.selectedTopic = topicCode;

    sessionStorage.setItem("selectedTopic", topicCode);

    loadPage("topic");

}

/*=========================================
  GETTERS
=========================================*/

function getSelectedSubject(){

    return AIR.selectedSubject ||
           sessionStorage.getItem("selectedSubject");

}

function getSelectedTopic(){

    return AIR.selectedTopic ||
           sessionStorage.getItem("selectedTopic");

}