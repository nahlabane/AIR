
/*=========================================
  AIR TOPIC PAGE
=========================================*/

const TOPIC_WEB_APP_URL =
"https://script.google.com/macros/s/AKfycbwOiCHUjGaSWPxJxb9c5ORDTM3QrAORtbyZK6IdROwYOOVaXFeaBXqA4Mf5W98xaqU/exec";

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

    fetch(
    TOPIC_WEB_APP_URL +
    "?action=operation&topicCode=" +
    encodeURIComponent(topicCode)
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

    let html = "";

    resources.forEach(resource=>{

        html += createResource(resource);

    });

    document.getElementById("resources").innerHTML =
    html;

}

/*=========================================
  CREATE RESOURCE
=========================================*/

function createResource(resource){

    let html = `
        <div class="card">

            <h3>${resource["Resource Type"]}</h3>

            <h2>${resource["Resource Title"]}</h2>

            <p>${resource["Resource Description"]}</p>
    `;

    /*==============================
      VIDEO
    ==============================*/

    if(
        resource["Resource Type"] === "Video" &&
        resource["Resource Link"]
    ){

        html += `
            <iframe
                src="${convertYoutube(resource["Resource Link"])}"
                allowfullscreen>
            </iframe>
        `;

    }

    else if(resource["Resource Type"] === "Video"){

        html += `
            <div class="coming-video">

                <h3>🎥 Video Coming Soon</h3>

                <p>
                    This lesson video has not been uploaded yet.
                </p>

            </div>
        `;

    }

    /*==============================
      OTHER RESOURCES
    ==============================*/

    else if(resource["Resource Link"]){

        html += `
            <a
                href="${resource["Resource Link"]}"
                target="_blank"
                class="resource-btn">

                📄 Open Resource

            </a>
        `;

    }

    else{

        html += `
            <div class="coming-video">

                <h3>📄 Resource Coming Soon</h3>

                <p>
                    This resource has not been uploaded yet.
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
  CONVERT YOUTUBE LINK
=========================================*/

function convertYoutube(url){

    if(!url) return "";

    if(url.includes("youtu.be")){

        const id = url.split("youtu.be/")[1].split("?")[0];

        return "https://www.youtube.com/embed/" + id;

    }

    if(url.includes("watch?v=")){

        const id = url.split("watch?v=")[1].split("&")[0];

        return "https://www.youtube.com/embed/" + id;

    }

    return url;

}
