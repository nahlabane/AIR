/* ===========================================
   AIR PORTAL AUTHENTICATION
=========================================== */

const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzzdqYVibzsOsOI6il0Jp6xKYM-pP3SD-g0rRP4-E08mFEYJaoyxk4b7AbL_AaKtPx6/exec";


/* ===========================================
   GENERAL HELPERS
=========================================== */

function getElement(id) {
    return document.getElementById(id);
}


function showLoginMessage(message, success = false) {

    const status = getElement("loginStatus");

    if (!status) return;

    status.textContent = message;

    status.style.color = success ? "#16803c" : "#cc0000";
}


function setButtonLoading(buttonId, loading, loadingText) {

    const button = getElement(buttonId);

    if (!button) return;

    if (loading) {

        button.dataset.originalText = button.textContent;
        button.textContent = loadingText;
        button.disabled = true;

    } else {

        button.textContent =
            button.dataset.originalText || button.textContent;

        button.disabled = false;
    }
}


function getAIRUserEmail() {

    return String(
        getElement("emailAddress")?.value || ""
    ).trim().toLowerCase();
}


function hideAllAuthenticationSections() {

    [
        "emailLoginSection",
        "otpSection",
        "createPinSection",
        "pinLoginSection"
    ].forEach(function (id) {

        const section = getElement(id);

        if (section) {
            section.hidden = true;
        }

    });
}


function showAuthenticationSection(sectionId) {

    hideAllAuthenticationSections();

    const section = getElement(sectionId);

    if (section) {
        section.hidden = false;
    }

    showLoginMessage("");
}


async function sendAuthRequest(action, data = {}) {

    const response = await fetch(APPS_SCRIPT_URL, {

        method: "POST",

        body: JSON.stringify({

            action: action,

            ...data

        })

    });

    if (!response.ok) {
        throw new Error("The authentication server could not be reached.");
    }

    return await response.json();
}


/* ===========================================
   EXISTING GOOGLE SIGN-IN
   PRESERVED
=========================================== */

function authenticateUser(user) {

    showLoginMessage("Verifying your AIR account...");

    fetch(APPS_SCRIPT_URL, {

        method: "POST",

        body: JSON.stringify({

            email: user.email

        })

    })

    .then(function (response) {

        return response.json();

    })

    .then(function (data) {

        if (data.status === "approved") {

            showLoginMessage("Login successful.", true);

            sessionStorage.setItem(
                "airUser",
                JSON.stringify(data)
            );

            window.location.href = "portal.html";

        } else if (data.status === "pending") {

            showLoginMessage(
                "Your account is awaiting AIR approval."
            );

        } else if (data.status === "rejected") {

            showLoginMessage(
                "Your AIR application has not been approved."
            );

        } else {

            showLoginMessage(
                "This Google account is not registered with AIR."
            );

        }

    })

    .catch(function (error) {

        console.error("Google authentication error:", error);

        showLoginMessage(
            "Unable to connect to AIR. Please try again."
        );

    });

}


/* ===========================================
   CHECK AIR EMAIL ACCOUNT
=========================================== */

async function checkAIRAccount() {

    const email = getAIRUserEmail();

    if (!email) {

        showLoginMessage("Please enter your email address.");

        getElement("emailAddress").focus();

        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        showLoginMessage(
            "Please enter a valid email address."
        );

        return;
    }

    setButtonLoading(
        "continueEmailBtn",
        true,
        "Checking account..."
    );

    showLoginMessage("");

    try {

        const result = await sendAuthRequest(
            "authCheckUser",
            { email: email }
        );

        if (result.status === "approved") {

            sessionStorage.setItem("airLoginEmail", email);

            /*
             * The server must distinguish an existing PIN
             * from a user who still needs to create one.
             */

            if (result.pinSet === true) {

                showAuthenticationSection("pinLoginSection");

                getElement("loginPin").focus();

            } else if (result.pinSet === false) {

                await sendVerificationCode(email);

            } else {

                showLoginMessage(
                    "Account verified, but the PIN setup status could not be determined."
                );

            }

        } else if (result.status === "pending") {

            showLoginMessage(
                result.message ||
                "Your account is awaiting AIR approval."
            );

        } else if (
            result.status === "rejected" ||
            result.status === "not_approved"
        ) {

            showLoginMessage(
                result.message ||
                "Your account is not approved for portal access."
            );

        } else if (result.status === "not_registered") {

            showLoginMessage(
                result.message ||
                "This email address is not registered with AIR."
            );

        } else {

            showLoginMessage(
                result.message ||
                "Unable to verify your AIR account."
            );

        }

    } catch (error) {

        console.error("Account check error:", error);

        showLoginMessage(
            "Unable to connect to AIR. Please try again."
        );

    } finally {

        setButtonLoading(
            "continueEmailBtn",
            false
        );

    }

}


/* ===========================================
   SEND EMAIL VERIFICATION CODE
=========================================== */

async function sendVerificationCode(email) {

    setButtonLoading(
        "continueEmailBtn",
        true,
        "Sending code..."
    );

    try {

        const result = await sendAuthRequest(
            "authSendOTP",
            { email: email }
        );

        if (result.status === "success") {

            showAuthenticationSection("otpSection");

            showLoginMessage(
                result.message ||
                "A verification code has been sent to your email.",
                true
            );

            getElement("otpCode").focus();

        } else {

            showLoginMessage(
                result.message ||
                "Unable to send the verification code."
            );

        }

    } catch (error) {

        console.error("OTP sending error:", error);

        showLoginMessage(
            "Unable to send the verification code."
        );

    } finally {

        setButtonLoading(
            "continueEmailBtn",
            false
        );

    }

}


/* ===========================================
   VERIFY EMAIL OTP
=========================================== */

async function verifyEmailOTP() {

    const email = sessionStorage.getItem("airLoginEmail");
    const otp = String(getElement("otpCode").value || "").trim();

    if (!email) {

        showLoginMessage(
            "Please enter your email address again."
        );

        showAuthenticationSection("emailLoginSection");

        return;
    }

    if (!/^\d{6}$/.test(otp)) {

        showLoginMessage(
            "Please enter the six-digit verification code."
        );

        getElement("otpCode").focus();

        return;
    }

    setButtonLoading(
        "verifyOtpBtn",
        true,
        "Verifying..."
    );

    try {

        const result = await sendAuthRequest(
            "authVerifyOTP",
            {
                email: email,
                otp: otp
            }
        );

        if (
            result.status === "success" ||
            result.status === "verified"
        ) {

            sessionStorage.setItem(
                "airEmailVerified",
                "true"
            );

            showAuthenticationSection("createPinSection");

            showLoginMessage(
                "Email verified. Create your five-digit PIN.",
                true
            );

            getElement("newPin").focus();

        } else {

            showLoginMessage(
                result.message ||
                "The verification code could not be verified."
            );

        }

    } catch (error) {

        console.error("OTP verification error:", error);

        showLoginMessage(
            "Unable to verify your email. Please try again."
        );

    } finally {

        setButtonLoading(
            "verifyOtpBtn",
            false
        );

    }

}


/* ===========================================
   CREATE AIR LOGIN PIN
=========================================== */

async function createAIRPin() {

    const email = sessionStorage.getItem("airLoginEmail");

    const pin = String(getElement("newPin").value || "");
    const confirmPIN = String(getElement("confirmPin").value || "");

    if (!email) {

        showLoginMessage(
            "Please enter your email address again."
        );

        showAuthenticationSection("emailLoginSection");

        return;
    }

    if (!/^\d{5}$/.test(pin)) {

        showLoginMessage(
            "Your PIN must contain exactly five digits."
        );

        getElement("newPin").focus();

        return;
    }

    if (pin !== confirmPIN) {

        showLoginMessage(
            "The PIN entries do not match."
        );

        getElement("confirmPin").focus();

        return;
    }

    setButtonLoading(
        "createPinBtn",
        true,
        "Creating PIN..."
    );

    try {

        const result = await sendAuthRequest(
            "authCreatePIN",
            {
                email: email,
                pin: pin,
                confirmPIN: confirmPIN
            }
        );

        if (result.status === "success") {

            getElement("newPin").value = "";
            getElement("confirmPin").value = "";

            showAuthenticationSection("pinLoginSection");

            showLoginMessage(
                "Your PIN has been created. You can now sign in.",
                true
            );

            getElement("loginPin").focus();

        } else {

            showLoginMessage(
                result.message ||
                "Unable to create your PIN."
            );

        }

    } catch (error) {

        console.error("PIN creation error:", error);

        showLoginMessage(
            "Unable to create your PIN. Please try again."
        );

    } finally {

        setButtonLoading(
            "createPinBtn",
            false
        );

    }

}


/* ===========================================
   LOGIN WITH PIN
=========================================== */

async function loginWithAIRPin() {

    const email = sessionStorage.getItem("airLoginEmail");

    const pin = String(getElement("loginPin").value || "");

    if (!email) {

        showLoginMessage(
            "Please enter your email address again."
        );

        showAuthenticationSection("emailLoginSection");

        return;
    }

    if (!/^\d{5}$/.test(pin)) {

        showLoginMessage(
            "Please enter your five-digit PIN."
        );

        getElement("loginPin").focus();

        return;
    }

    setButtonLoading(
        "loginPinBtn",
        true,
        "Signing in..."
    );

    try {

        const result = await sendAuthRequest(
            "authLoginWithPIN",
            {
                email: email,
                pin: pin
            }
        );

        if (result.status === "success") {

            if (!result.sessionToken) {

                showLoginMessage(
                    "Login response did not include a session token."
                );

                return;
            }

            sessionStorage.setItem(
                "airSessionToken",
                result.sessionToken
            );

            sessionStorage.setItem(
                "airUser",
                JSON.stringify(result.user || {
                    email: email,
                    role: result.role
                })
            );

            showLoginMessage(
                "Login successful.",
                true
            );

            window.location.href = "portal.html";

        } else {

            showLoginMessage(
                result.message ||
                "Unable to sign in."
            );

        }

    } catch (error) {

        console.error("PIN login error:", error);

        showLoginMessage(
            "Unable to sign in. Please try again."
        );

    } finally {

        setButtonLoading(
            "loginPinBtn",
            false
        );

    }

}


/* ===========================================
   FORGOT PIN / PIN RECOVERY
=========================================== */

async function startPINRecovery() {

    const email = sessionStorage.getItem("airLoginEmail");

    if (!email) {

        showLoginMessage(
            "Please enter your registered email address."
        );

        showAuthenticationSection("emailLoginSection");

        return;
    }

    const confirmed = window.confirm(
        "We will send a verification code to your registered email so you can reset your PIN. Continue?"
    );

    if (!confirmed) return;

    setButtonLoading(
        "loginPinBtn",
        true,
        "Preparing recovery..."
    );

    try {

        const result = await sendAuthRequest(
            "authSendOTP",
            { email: email }
        );

        if (result.status === "success") {

            getElement("otpCode").value = "";

            showAuthenticationSection("otpSection");

            showLoginMessage(
                "A PIN recovery code has been sent to your email.",
                true
            );

            getElement("otpCode").focus();

        } else {

            showLoginMessage(
                result.message ||
                "Unable to send a recovery code."
            );

        }

    } catch (error) {

        console.error("PIN recovery error:", error);

        showLoginMessage(
            "Unable to start PIN recovery."
        );

    } finally {

        setButtonLoading(
            "loginPinBtn",
            false
        );

    }

}


/* ===========================================
   RETURN TO EMAIL LOGIN
=========================================== */

function backToEmailLogin() {

    getElement("otpCode").value = "";

    showAuthenticationSection("emailLoginSection");

    getElement("emailAddress").focus();

}

/* ===========================================
   INITIALISE LOGIN PAGE
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    hideAllAuthenticationSections();

    // Show the email login section when the page loads.
    showAuthenticationSection("emailLoginSection");

    const email = sessionStorage.getItem("airLoginEmail");

    if (email && getElement("emailAddress")) {

        getElement("emailAddress").value = email;

    }

});