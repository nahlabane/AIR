/* ==========================================
   AIR MENTOR REGISTRATION
========================================== */

/* ==========================================
   FORM ELEMENTS
========================================== */

const mentorForm =
document.getElementById("mentorForm");

const country =
document.getElementById("country");

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


/* ==========================================
   INITIAL STATE
========================================== */

registrationContent.style.display = "none";

videoOptions.style.display = "none";


/* ==========================================
   FIND COUNTRY FROM DATABASE
========================================== */

function getCountryData(countryName){

    return Object.values(

        AIR_EDUCATION_DATABASE

    ).find(

        country => country.name === countryName

    );

}
/* ==========================================
   COUNTRY SELECTION
========================================== */

country.addEventListener("change",()=>{

    const selectedCountry =

    country.value;

    if(selectedCountry===""){

        registrationContent.style.display="none";

        programmeCountry.innerHTML=
        "AIR Programme";

        programmeStatus.innerHTML="";

        programmeDescription.innerHTML="";

        programmeSubjects.innerHTML="";

        mentorSubjectCheckboxes.innerHTML="";

        return;

    }

    registrationContent.style.display="block";

    loadProgramme(selectedCountry);

});
/* ==========================================
   LOAD AIR PROGRAMME
========================================== */

function loadProgramme(selectedCountry){

    const programme =

    getCountryData(selectedCountry);

    if(!programme){

        programmeCountry.innerHTML=

        "AIR Programme";

        programmeStatus.innerHTML="";

        programmeDescription.innerHTML="";

        programmeSubjects.innerHTML="";

        mentorSubjectCheckboxes.innerHTML="";

        return;

    }

    programmeCountry.innerHTML =

    "🌍 AIR " +

    programme.name +

    " Programme";



    const activeSubjects =

    programme.subjects.filter(

        subject =>

        subject.status ===

        SUBJECT_STATUS.ACTIVE

    ).length;



    if(activeSubjects > 0){

        programmeStatus.innerHTML =

        '<span class="active-badge">🟢 Programme Active</span>';

    }

    else{

        programmeStatus.innerHTML =

        '<span class="coming-badge">🟡 Recruiting Volunteer Mentors</span>';

    }



    programmeDescription.innerHTML =

    "<strong>Curriculum:</strong> "

    + programme.curriculum +

    "<br><strong>School Level:</strong> "

    + programme.finalLevel.name;



    buildSubjects(

        programme.subjects

    );

}
/* ==========================================
   BUILD SUBJECTS
========================================== */

function buildSubjects(subjects){

    programmeSubjects.innerHTML = "";

    mentorSubjectCheckboxes.innerHTML = "";

    subjects.forEach(subject=>{

        const isActive =

        subject.status ===

        SUBJECT_STATUS.ACTIVE;



        const badge =

        isActive

        ? '<span class="active-badge">🟢 Active</span>'

        : '<span class="coming-badge">🟡 Recruiting Mentors</span>';



        /* =====================================
           SUBJECT CARD
        ===================================== */

        const card =

        document.createElement("div");

        card.className =

        "subject-card";

        card.innerHTML =

        `

        <strong>

            ${subject.name}

        </strong>

        <br>

        <small>

            ${subject.code}

        </small>

        <br><br>

        ${badge}

        `;

        programmeSubjects.appendChild(card);



        /* =====================================
           CHECKBOX
        ===================================== */

        const label =

        document.createElement("label");

        label.className =

        "subject-card";

        label.innerHTML =

        `

        <input

            type="checkbox"

            name="subjects"

            value="${subject.code}">

        <strong>

            ${subject.name}

        </strong>

        <br>

        <small>

            ${subject.code}

        </small>

        <br><br>

        ${badge}

        `;

        mentorSubjectCheckboxes.appendChild(label);

    });

}
/* ==========================================
   GOOGLE SHEETS SUBMISSION
========================================== */

const scriptURL =
"https://script.google.com/macros/s/AKfycbybRGbtorNJ0rvmRfkAvcfuCRM253g5DnxEN92C0EptPTfW48HzgipluUd5xpqmUXyH/exec";


mentorForm.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const button =

    mentorForm.querySelector("button");

    button.disabled = true;

    button.textContent =

    "Submitting...";

    try{

        const formData =

        new FormData(mentorForm);

       const response = await fetch(

    scriptURL,

    {

        method:"POST",

        body:formData

    }

);

if(!response.ok){

    throw new Error(

        "Server returned " +

        response.status

    );

}

const result = await response.json();

if(!result.success){

    alert(result.message);

    button.disabled = false;

    button.textContent =

    "Join AIR as a Volunteer Mentor";

    return;

}

alert(result.message);

        mentorForm.reset();

        registrationContent.style.display="none";

        programmeCountry.innerHTML="AIR Programme";

        programmeStatus.innerHTML="";

        programmeDescription.innerHTML="";

        programmeSubjects.innerHTML="";

        mentorSubjectCheckboxes.innerHTML="";

        if(videoOptions){

            videoOptions.style.display="none";

        }

    }

    catch(error){

        console.error(error);

        alert(

            "Submission failed. Please try again."

        );

    }

    button.disabled = false;

    button.textContent =

    "Join AIR as a Volunteer Mentor";

});