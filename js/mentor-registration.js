/* ==========================================
   AIR MENTOR REGISTRATION
========================================== */

const country = document.getElementById("country");

const registrationContent =
document.getElementById("registrationContent");

const programmeCountry =
document.getElementById("programmeCountry");

const programmeStatus =
document.getElementById("programmeStatus");

const programmeDescription =
document.getElementById("programmeDescription");

const programmeSubjects =
document.getElementById("programmeSubjects");

const mentorSubjectCheckboxes =
document.getElementById("mentorSubjectCheckboxes");

const videoSupport =
document.getElementById("videoSupport");

const videoOptions =
document.getElementById("videoOptions");
const DEFAULT_PROGRAMME = {

    level:"Senior Secondary Education",

    status:"recruiting",

    description:
    "AIR is currently recruiting volunteer mentors. The mentorship programme will become active once enough volunteer mentors have joined in your country.",

    subjects:[

        {name:"Mathematics",status:"recruiting"},
        {name:"Physics",status:"recruiting"},
        {name:"Accounting",status:"recruiting"},
        {name:"English",status:"recruiting"},
        {name:"Kiswahili",status:"recruiting"}

    ]

};

const ACTIVE_PROGRAMMES = {

    "South Africa":{

        level:"Grade 12",

        status:"active",

        description:
        "AIR currently provides academic mentorship for Grade 12 learners in South Africa. Additional subjects will be activated as more volunteer mentors join the network.",

        subjects:[

            {name:"Mathematics",status:"active"},
            {name:"Physics",status:"active"},
            {name:"Accounting",status:"recruiting"},
            {name:"English",status:"recruiting"},
            {name:"Kiswahili",status:"recruiting"}

        ]

    }

};

registrationContent.style.display="none";
videoOptions.style.display="none";

country.addEventListener("change",()=>{

    if(country.value===""){

        registrationContent.style.display="none";

        return;

    }

    registrationContent.style.display="block";

    loadProgramme(country.value);

});
/* ==========================================
   LOAD AIR PROGRAMME
========================================== */

function loadProgramme(selectedCountry){

    const programme = ACTIVE_PROGRAMMES[selectedCountry] || DEFAULT_PROGRAMME;

    programmeCountry.innerHTML =
    "🌍 AIR " + selectedCountry + " Programme";

    if(programme.status==="active"){

        programmeStatus.innerHTML =
        '<span class="active-badge">🟢 Programme Active</span>';

    }else{

        programmeStatus.innerHTML =
        '<span class="coming-badge">🟡 Recruiting Volunteer Mentors</span>';

    }

    programmeDescription.innerHTML =
    programme.description;

    buildSubjects(programme.subjects);

}
/* ==========================================
   BUILD SUBJECTS
========================================== */

function buildSubjects(subjects){

    programmeSubjects.innerHTML="";

    mentorSubjectCheckboxes.innerHTML="";

    subjects.forEach(subject=>{

        /* ----------------------------
           Programme Card
        ----------------------------- */

        const card=document.createElement("div");

        card.className="subject-card";

        card.innerHTML=`

            <strong>${subject.name}</strong>

            <br><br>

            ${
                subject.status==="active"

                ?'<span class="active-badge">🟢 Active</span>'

                :'<span class="coming-badge">🟡 Recruiting Mentors</span>'
            }

        `;

        programmeSubjects.appendChild(card);

        /* ----------------------------
           Mentor Selection
        ----------------------------- */

        const label=document.createElement("label");

        label.className="subject-card";

        label.innerHTML=`

            <input
                type="checkbox"
                name="subjects"
                value="${subject.name}">

            <strong>

                ${subject.name}

            </strong>

            <br><br>

            ${
                subject.status==="active"

                ?'<span class="active-badge">🟢 Active</span>'

                :'<span class="coming-badge">🟡 Recruiting Mentors</span>'
            }

        `;

        mentorSubjectCheckboxes.appendChild(label);

    });

}


/* ==========================================
   EDUCATIONAL CONTENT
========================================== */

videoSupport.addEventListener("change",()=>{

    videoOptions.style.display =
    videoSupport.value==="Yes" ? "block" : "none";

});

/* ==========================================
   FORM SUBMISSION
========================================== */

const mentorForm=document.getElementById("mentorForm");
const scriptURL="";

mentorForm.addEventListener("submit",async(e)=>{

    e.preventDefault();

    if(scriptURL===""){
        alert("Google Apps Script URL has not been configured.");
        return;
    }

    const button=mentorForm.querySelector("button");

    button.disabled=true;
    button.textContent="Submitting...";

    try{

        await fetch(scriptURL,{
            method:"POST",
            body:new FormData(mentorForm)
        });

        alert("Volunteer mentor registration submitted successfully.");

        mentorForm.reset();

        registrationContent.style.display="none";
        programmeCountry.innerHTML="AIR Programme";
        programmeStatus.innerHTML="";
        programmeDescription.innerHTML="";
        programmeSubjects.innerHTML="";
        mentorSubjectCheckboxes.innerHTML="";
        videoOptions.style.display="none";

    }catch(error){

        console.error(error);
        alert("Submission failed. Please try again.");

    }

    button.disabled=false;
    button.textContent="Join AIR as a Volunteer Mentor";

});
