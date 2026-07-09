const mapObject = document.getElementById("africaMap");

mapObject.addEventListener("load", () => {

    const svg = mapObject.contentDocument;

    if (!svg) {
        console.error("SVG could not be loaded.");
        return;
    }

    const countries = svg.querySelectorAll("path[id]");

    console.log("Countries found:", countries.length);

    countries.forEach(country => {

        // Default appearance
        country.style.cursor = "pointer";
        country.style.transition = "all 0.25s ease";
        country.style.fill = "#2d2d2d";
        country.style.stroke = "#8a8a8a";
        country.style.strokeWidth = "0.25";

        // Hover
        country.addEventListener("mouseenter", () => {

            if (!country.classList.contains("selected")) {
                country.style.fill = "#00AEEF";
            }

        });

        // Mouse leave
        country.addEventListener("mouseleave", () => {

            if (!country.classList.contains("selected")) {
                country.style.fill = "#2d2d2d";
            }

        });

        // Click
        country.addEventListener("click", () => {

            countries.forEach(c => {

                c.classList.remove("selected");
                c.style.fill = "#2d2d2d";

            });

            country.classList.add("selected");
            country.style.fill = "#0077CC";

            let info = AIRCountries[country.id];

            if (!info) {

                const extraCountries = {
                    SA:{name:"Saudi Arabia",flag:"🇸🇦"},
                    YE:{name:"Yemen",flag:"🇾🇪"},
                    OM:{name:"Oman",flag:"🇴🇲"},
                    AE:{name:"United Arab Emirates",flag:"🇦🇪"},
                    QA:{name:"Qatar",flag:"🇶🇦"},
                    KW:{name:"Kuwait",flag:"🇰🇼"},
                    IQ:{name:"Iraq",flag:"🇮🇶"},
                    SY:{name:"Syria",flag:"🇸🇾"},
                    JO:{name:"Jordan",flag:"🇯🇴"},
                    LB:{name:"Lebanon",flag:"🇱🇧"},
                    IL:{name:"Israel",flag:"🇮🇱"},
                    PS:{name:"Palestine",flag:"🇵🇸"}
                };

                const countryInfo = extraCountries[country.id];

                info = {
                    name: countryInfo ? countryInfo.name : country.id,
                    flag: countryInfo ? countryInfo.flag : "🌍",
                    mentors:0,
                    learners:0,
                    volunteers:0,
                    schools:0,
                    status:"Not Active",
                    regions:[]
                };

            }

            // Country name
            document.getElementById("countryName").innerHTML =
                `${info.flag} ${info.name}`;

            // Loading
            document.getElementById("mentors").textContent = "Loading...";
            document.getElementById("learners").textContent = "Loading...";
            document.getElementById("volunteers").textContent = "Loading...";
            document.getElementById("schools").textContent = "Loading...";
            document.getElementById("subjects").textContent = "Loading...";
            document.getElementById("projects").textContent = "Loading...";

            document.getElementById("regionsContainer").innerHTML =
                "<p>Loading AIR Footprint...</p>";

            // Google Apps Script
            fetch(`https://script.google.com/macros/s/AKfycbwmOJSFEK1azUVrl3vQcOI4ADGFoZ5FAccOoUNM0F0EtWSVsMaPTElKvG_X0690HSTO/exec?country=${country.id}`)

                .then(response => response.json())

                .then(stats => {

                    console.log(stats);

                    if (stats.success) {

                        document.getElementById("mentors").textContent = stats.mentors;
                        document.getElementById("learners").textContent = stats.learners;
                        document.getElementById("volunteers").textContent = stats.volunteers;
                        document.getElementById("schools").textContent = stats.schools;

                        document.getElementById("subjects").textContent = "0";
                        document.getElementById("projects").textContent = "0";
                        const s=document.getElementById("status"); if(s) s.textContent="🟢 Active";

                        const container =
                            document.getElementById("regionsContainer");

                        container.innerHTML = "";

                        if (stats.regions && stats.regions.length > 0) {

                            stats.regions.forEach(region => {

                               container.innerHTML += `

<div class="region-card">

    <div class="region-header">

        <h4>📍 ${region.name}</h4>

        <span class="status active">
            🟢 ${region.status}
        </span>

    </div>

    <div class="region-stat">

        <span>👨‍🏫 Mentors</span>

        <strong>${region.mentors}</strong>

    </div>

    <div class="region-stat">

        <span>🎓 Learners</span>

        <strong>${region.learners}</strong>

    </div>

    <div class="region-stat">

        <span>🤝 Volunteers</span>

        <strong>${region.volunteers}</strong>

    </div>

    <div class="region-stat">

        <span>🏫 Schools</span>

        <strong>${region.schools}</strong>

    </div>

</div>

`;

                            });

                        } else {

                            container.innerHTML =
                                "<p>No regional statistics available.</p>";

                        }

                    } else {

                        useFallback(info);

                    }

                })

                .catch(error => {

                    console.error(error);

                    useFallback(info);

                });

        });

    });

});


function useFallback(info) {

    console.log("Using fallback statistics.");

    const inactiveCountries = [
        "Saudi Arabia","Yemen","Oman","United Arab Emirates","Qatar",
        "Kuwait","Iraq","Syria","Jordan","Lebanon","Israel","Palestine"
    ];

    const isInactive = inactiveCountries.includes(info.name);

    const displayValue = isInactive ? "🔴 Not Active" : "🟡 Planning";
    const s=document.getElementById("status");
    if(s) s.textContent=displayValue;

    document.getElementById("mentors").textContent = displayValue;
    document.getElementById("learners").textContent = displayValue;
    document.getElementById("volunteers").textContent = displayValue;
    document.getElementById("schools").textContent = displayValue;
    document.getElementById("subjects").textContent = displayValue;
    document.getElementById("projects").textContent = displayValue;

    const container =
        document.getElementById("regionsContainer");

    container.innerHTML = "";

    if (info.regions && info.regions.length > 0) {

        info.regions.forEach(region => {

            container.innerHTML += `

<div class="region-card">

<h4>📍 ${region}</h4>

</div>

`;

        });
    } else {

        container.innerHTML = "<p>No regions available yet.</p>";

    }

}