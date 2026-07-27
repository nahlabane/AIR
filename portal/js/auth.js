/* ===========================================
   AIR AUTHENTICATION
=========================================== */

// Replace with your deployed Apps Script Web App URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwOiCHUjGaSWPxJxb9c5ORDTM3QrAORtbyZK6IdROwYOOVaXFeaBXqA4Mf5W98xaqU/exec";

/* ===========================================
   SEND GOOGLE USER TO AIR
=========================================== */

function authenticateUser(user) {

    document.getElementById("loginStatus").innerHTML =
        "Verifying your AIR account...";

    fetch(APPS_SCRIPT_URL, {

        method: "POST",

        body: JSON.stringify({

            email: user.email

        })

    })

    .then(response => response.json())

    .then(data => {

        if(data.status === "approved"){

            document.getElementById("loginStatus").innerHTML =
                "Login successful.";

            sessionStorage.setItem("airUser", JSON.stringify(data));

            if(data.role === "Learner"){

                window.location.href = "portal.html";

            }

            else if(data.role === "Mentor"){

                window.location.href = "portal.html";

            }

            else if(data.role === "Administrator"){

                window.location.href = "portal.html";

            }

        }

        else if(data.status === "pending"){

            document.getElementById("loginStatus").innerHTML =
                "Your account is awaiting AIR approval.";

        }

        else{

            document.getElementById("loginStatus").innerHTML =
                "This Google account is not registered with AIR.";

        }

    })

    .catch(error => {

        console.error(error);

        document.getElementById("loginStatus").innerHTML =
            "Unable to connect to AIR.";

    });

}