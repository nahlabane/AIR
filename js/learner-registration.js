/* ==========================================
   AIR LEARNER REGISTRATION
========================================== */

/* ==========================================
   FORM ELEMENTS
========================================== */

const learnerForm =
document.getElementById("learnerForm");

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

const learnerSubjectCheckboxes =
document.getElementById("learnerSubjectCheckboxes");


/* ==========================================
   INITIAL STATE
========================================== */

registrationContent.style.display = "none";


/* ==========================================
   FIND COUNTRY
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

        learnerSubjectCheckboxes.innerHTML="";

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

        return;

    }

    programmeCountry.innerHTML =

    "🌍 AIR " +

    programme.name +

    " Programme";

    const activeSubjects =

    programme.subjects.filter(

        subject =>

        subject.status===

        SUBJECT_STATUS.ACTIVE

    ).length;

    if(activeSubjects>0){

        programmeStatus.innerHTML=

        '<span class="active-badge">🟢 Programme Active</span>';

    }

    else{

        programmeStatus.innerHTML=

        '<span class="coming-badge">🟡 Recruiting Volunteer Mentors</span>';

    }

    programmeDescription.innerHTML=

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

    learnerSubjectCheckboxes.innerHTML="";

    subjects.forEach(subject=>{

        const active =

        subject.status===

        SUBJECT_STATUS.ACTIVE;

        const badge =

        active

        ? '<span class="active-badge">🟢 Active</span>'

        : '<span class="coming-badge">🟡 Recruiting Mentors</span>';

        const label =

        document.createElement("label");

        label.className=

        "subject-card";

        label.innerHTML=`

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

        learnerSubjectCheckboxes.appendChild(label);

    });

}
/* ==========================================
   GOOGLE SHEETS SUBMISSION
========================================== */

const scriptURL = "https://script.google.com/macros/s/AKfycbybRGbtorNJ0rvmRfkAvcfuCRM253g5DnxEN92C0EptPTfW48HzgipluUd5xpqmUXyH/exec";

/*
Paste your Google Apps Script URL above.

Example:

const scriptURL =
"https://script.google.com/macros/s/xxxxxxxxxxxxxxxx/exec";

*/


learnerForm.addEventListener("submit", async (e)=>{

    e.preventDefault();

    if(scriptURL===""){

        alert(

            "Google Apps Script URL has not been configured."

        );

        return;

    }

    const button =

    learnerForm.querySelector("button");

    button.disabled = true;

    button.textContent =

    "Submitting...";

    try{

  const response = await fetch(

    scriptURL,

    {

        method:"POST",

        body:new FormData(

            learnerForm

        )

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

    "Join AIR as a Learner";

    return;

}

alert(result.message);

        learnerForm.reset();

        registrationContent.style.display="none";

        programmeCountry.innerHTML="AIR Programme";

        programmeStatus.innerHTML="";

        programmeDescription.innerHTML="";

        learnerSubjectCheckboxes.innerHTML="";

    }

    catch(error){

        console.error(error);

        alert(

            "Submission failed. Please try again."

        );

    }

    button.disabled=false;

    button.textContent=

    "Join AIR as a Learner";

});