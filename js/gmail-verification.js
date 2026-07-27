/* ==========================================
   AIR GMAIL VERIFICATION
========================================== */

const emailInput =
document.getElementById("email");

const sendOTPButton =
document.getElementById("sendOTPButton");

const otpSection =
document.getElementById("otpSection");

const otpInput =
document.getElementById("otp");

const verifyOTPButton =
document.getElementById("verifyOTPButton");

const verificationMessage =
document.getElementById("verificationMessage");

const emailVerifiedField =
document.getElementById("emailVerified");

let emailVerified = false;

sendOTPButton.addEventListener(
"click",
sendVerificationCode
);
verifyOTPButton.addEventListener(
    "click",
    verifyCode
);

const verificationURL =
"https://script.google.com/macros/s/AKfycbybRGbtorNJ0rvmRfkAvcfuCRM253g5DnxEN92C0EptPTfW48HzgipluUd5xpqmUXyH/exec";

async function sendVerificationCode(){

    const email =
    emailInput.value.trim();

    if(email===""){

        alert("Please enter your Gmail address.");

        return;

    }

    if(!email.endsWith("@gmail.com")){

        alert("Please use a Gmail account.");

        return;

    }

    sendOTPButton.disabled = true;

    sendOTPButton.textContent =
    "Sending...";

    try{

       const formData = new FormData();

formData.append("action", "sendOTP");
formData.append("email", email);

const response = await fetch(
    verificationURL,
    {
        method: "POST",
        body: formData
    }
);

        const result =
        await response.json();

        alert(result.message);

        if(result.success){

            otpSection.style.display =
            "block";

        }

    }

    catch(error){

        console.error(error);

        alert("Unable to send verification code.");

    }

    sendOTPButton.disabled = false;

    sendOTPButton.textContent =
    "Send Verification Code";

}


async function verifyCode(){

   const formData = new FormData();

formData.append("action", "verifyOTP");
formData.append("email", emailInput.value.trim());
formData.append("otp", otpInput.value.trim());

const response = await fetch(
    verificationURL,
    {
        method: "POST",
        body: formData
    }
);

    const result =
    await response.json();

    if(result.success){

        emailVerified = true;

        emailVerifiedField.value =
        "true";

        verificationMessage.innerHTML =
        "🟢 Gmail Verified";

        verificationMessage.style.color =
        "green";

        emailInput.readOnly = true;

        otpInput.readOnly = true;

        sendOTPButton.disabled = true;

        verifyOTPButton.disabled = true;

    }

    else{

        verificationMessage.innerHTML =
        "🔴 " + result.message;

        verificationMessage.style.color =
        "red";

    }

}

