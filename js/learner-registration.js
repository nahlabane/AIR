/* AIR Learner Registration */
const country=document.getElementById("country");
const southAfricaNotice=document.getElementById("southAfricaNotice");
const internationalNotice=document.getElementById("internationalNotice");
const southAfricaFields=document.getElementById("southAfricaFields");
const internationalFields=document.getElementById("internationalFields");
const countryProgrammeTitle=document.getElementById("countryProgrammeTitle");
const countryProgrammeMessage=document.getElementById("countryProgrammeMessage");
const subjects={
"Grade 4":[{name:"Mathematics",status:"coming"},{name:"English",status:"coming"}],
"Grade 5":[{name:"Mathematics",status:"coming"},{name:"English",status:"coming"}],
"Grade 6":[{name:"Mathematics",status:"coming"},{name:"English",status:"coming"}],
"Grade 7":[{name:"Mathematics",status:"coming"},{name:"English",status:"coming"}],
"Grade 8":[{name:"Mathematics",status:"coming"},{name:"Natural Sciences",status:"coming"}],
"Grade 9":[{name:"Mathematics",status:"coming"},{name:"Natural Sciences",status:"coming"}],
"Grade 10":[{name:"Mathematics",status:"coming"},{name:"Physical Sciences",status:"coming"},{name:"Life Sciences",status:"coming"},{name:"Accounting",status:"coming"}],
"Grade 11":[{name:"Mathematics",status:"coming"},{name:"Physical Sciences",status:"coming"},{name:"Life Sciences",status:"coming"},{name:"Accounting",status:"coming"}],
"Grade 12":[{name:"Mathematics",status:"active"},{name:"Physical Sciences",status:"active"},{name:"Life Sciences",status:"coming"},{name:"Accounting",status:"coming"}]
};
function updateCountryFields(){
 if(country.value==="South Africa"){
  southAfricaNotice.style.display="block";southAfricaFields.style.display="block";
  internationalNotice.style.display="none";internationalFields.style.display="none";
 }else if(country.value===""){
  southAfricaNotice.style.display="none";southAfricaFields.style.display="none";
  internationalNotice.style.display="none";internationalFields.style.display="none";
 }else{
  southAfricaNotice.style.display="none";southAfricaFields.style.display="none";
  internationalNotice.style.display="block";internationalFields.style.display="block";
  if(countryProgrammeTitle)countryProgrammeTitle.innerHTML="🌍 "+country.value+" Mentorship Programme";
  if(countryProgrammeMessage)countryProgrammeMessage.innerHTML="AIR is currently recruiting dedicated volunteer mentors from <strong>"+country.value+"</strong> who understand the country's education system and curriculum.<br><br>The AIR Mentorship Programme for <strong>"+country.value+"</strong> has not yet been activated because we are still recruiting enough volunteer mentors to provide sustainable academic support.<br><br>Learners are encouraged to register today even though mentoring has not yet started. Every learner registration helps AIR understand the demand for mentoring in <strong>"+country.value+"</strong>, including the grades, subjects and regions where support is needed.<br><br>This information allows AIR to recruit mentors based on real demand, build local mentoring teams and prepare for the official launch of the AIR Mentorship Programme in <strong>"+country.value+"</strong>.<br><br>As soon as enough mentors have joined, AIR will activate the programme and registered learners will be contacted.";
 }
}
country.addEventListener("change",updateCountryFields);updateCountryFields();
const grade=document.getElementById("grade");const container=document.getElementById("subjectsContainer");
if(grade&&container){grade.addEventListener("change",()=>{container.innerHTML="";(subjects[grade.value]||[]).forEach(subject=>{const d=document.createElement("div");d.className="subject-card";d.innerHTML=`<label><input type="checkbox" name="subject" value="${subject.name}"><strong>${subject.name}</strong>${subject.status==="active"?'<span class="active-badge">🟢 Active</span>':'<span class="coming-badge">🟡 Registration Open</span>'}</label>`;container.appendChild(d);});});}
const scriptURL="https://script.google.com/macros/s/AKfycbypgQFE4Jdl_TH78b7YcQAoEkUweOFhgRDcnxUs2NDyb_a69gbG3HoklgcjKNtLv-1rPg/exec";
const form=document.getElementById("learnerForm");
if(form){form.addEventListener("submit",async(e)=>{e.preventDefault();const btn=form.querySelector("button[type='submit']")||form.querySelector("button");btn.disabled=true;btn.textContent="Submitting...";try{const fd=new FormData(form);await fetch(scriptURL,{method:"POST",body:fd,mode:"no-cors"});alert("Registration submitted successfully.");form.reset();if(container)container.innerHTML="";updateCountryFields();}catch(error){console.error(error);alert("Submission failed. Please try again.");}btn.disabled=false;btn.textContent="Submit Learner Registration";});}
