/* ===========================================
   GOOGLE LOGIN CALLBACK
=========================================== */

function handleCredentialResponse(response) {

    // Decode Google JWT Token
    const payload = parseJwt(response.credential);

    console.log(payload);

    // Show login message

    document.getElementById("loginStatus").innerHTML =
        "Signing you into AIR Portal...";

    // Send user details to authentication

    authenticateUser({

        name: payload.name,

        email: payload.email,

        picture: payload.picture

    });

}

/* ===========================================
   DECODE GOOGLE TOKEN
=========================================== */

function parseJwt(token) {

    const base64Url = token.split('.')[1];

    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    const jsonPayload = decodeURIComponent(

        atob(base64)

        .split('')

        .map(function(c) {

            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);

        })

        .join('')

    );

    return JSON.parse(jsonPayload);

}