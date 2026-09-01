/* ===========================================
   AIR PORTAL - SUBJECTS
=========================================== */

function loadSubjects() {

    const user = JSON.parse(sessionStorage.getItem("airUser"));

    const container = document.getElementById("subjectsContainer");

    if (!container) return;

    if (!user) {

        container.innerHTML = "<p>No user session found.</p>";

        return;

    }

    let html = "";

    // Administrator
    if (user.subjects === "ALL") {

        html += `
            <div class="card subject-card"
                 onclick="openSubject('ZA-MAT-G12')">

                <h2>📘 Mathematics</h2>

                <p>ZA-MAT-G12</p>

            </div>

            <div class="card subject-card"
                 onclick="openSubject('ZA-PHY-G12')">

                <h2>⚛ Physical Sciences</h2>

                <p>ZA-PHY-G12</p>

            </div>

             <div class="card subject-card"
                 onclick="openSubject('ZA-LO-G12')">

                <h2>📘 Life Orientation</h2>

                <p>ZA-LO-G12</p>

            </div>
        `;

    } else {

        const subjects = user.subjects.split(",");

        subjects.forEach(subject => {

            let subjectName = subject;

            switch (subject.trim()) {

                case "ZA-MAT-G12":
                    subjectName = "📘 Mathematics";
                    break;

                case "ZA-PHY-G12":
                    subjectName = "⚛ Physical Sciences";
                    break;

               case "ZA-LO-G12":
                    subjectName = "📘 Life Orientation";
                    break;
            }

            html += `
                <div class="card subject-card"
                     onclick="openSubject('${subject.trim()}')">

                    <h2>${subjectName}</h2>

                    <p>${subject.trim()}</p>

                </div>
            `;

        });

    }

    container.innerHTML = html;

}

function openSubject(subjectCode){

    sessionStorage.setItem("selectedSubject", subjectCode);

    fetch("pages/subject.html")

        .then(response => response.text())

        .then(html =>{

            document.getElementById("content").innerHTML = html;

            loadSubject();

        })

        .catch(() =>{

            document.getElementById("content").innerHTML =
            "<h2>Subject page not found.</h2>";

        });

}