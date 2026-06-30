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

            const info = AIRCountries[country.id];

            if (!info) return;

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

                    if (!stats.error) {

                        document.getElementById("mentors").textContent = stats.mentors;
                        document.getElementById("learners").textContent = stats.learners;
                        document.getElementById("volunteers").textContent = stats.volunteers;
                        document.getElementById("schools").textContent = stats.schools;

                        document.getElementById("subjects").textContent = "0";
                        document.getElementById("projects").textContent = "0";

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

    document.getElementById("mentors").textContent =
        info.mentors ?? 0;

    document.getElementById("learners").textContent =
        info.learners ?? 0;

    document.getElementById("volunteers").textContent =
        info.volunteers ?? 0;

    document.getElementById("schools").textContent =
        info.schools ?? 0;

    document.getElementById("subjects").textContent = "0";

    document.getElementById("projects").textContent = "0";

    const container =
        document.getElementById("regionsContainer");

    container.innerHTML = "";

    if (info.regions) {

        info.regions.forEach(region => {

            container.innerHTML += `

<div class="region-card">

<h4>📍 ${region}</h4>

</div>

`;

        });

    }

}