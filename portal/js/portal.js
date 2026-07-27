
/*=========================================
  INITIALIZE PORTAL
=========================================*/

function initializePortal() {

    const user = getLoggedInUser();

    if (!user) {

        window.location.href = "index.html";
        return;

    }

    AIR.user = user;

    loadHeader(user);

    buildSidebar(user);

    loadPage("dashboard");

}

/*=========================================
  GET LOGGED IN USER
=========================================*/

function getLoggedInUser() {

    const data = sessionStorage.getItem("airUser");

    if (!data) {

        return null;

    }

    try {

        return JSON.parse(data);

    }

    catch {

        return null;

    }

}

/*=========================================
  LOAD HEADER
=========================================*/

function loadHeader(user) {

    const userName = document.getElementById("userName");
    const userRole = document.getElementById("userRole");
    const userCountry = document.getElementById("userCountry");

    if (userName) userName.textContent = user.name || "";
    if (userRole) userRole.textContent = user.role || "";
    if (userCountry) userCountry.textContent = user.country || "";

}

/*=========================================
  SIDEBAR MENU
=========================================*/

const MENU = {

    Learner: [

        { icon:"🏠", text:"Dashboard", page:"dashboard" },
        { icon:"📚", text:"My Subjects", page:"subjects" },
        { icon:"📄", text:"Assignments", page:"assignments" },
        { icon:"📝", text:"Topic Tests", page:"tests" },
        { icon:"📊", text:"Results", page:"results" },
        { icon:"📢", text:"Announcements", page:"announcements" },
        { icon:"📅", text:"Calendar", page:"calendar" },
        { icon:"🎥", text:"Resources", page:"resources" },
        { icon:"💻", text:"Live Sessions", page:"live" },
        { icon:"🔬", text:"Research", page:"research" },
        { icon:"👤", text:"Profile", page:"profile" },
        { icon:"⚙", text:"Settings", page:"settings" },
        { icon:"🚪", text:"Logout", page:"logout" }

    ],

    Mentor: [

        { icon:"🏠", text:"Dashboard", page:"dashboard" },
        { icon:"📚", text:"My Subjects", page:"subjects" },
        { icon:"👨‍🎓", text:"Learners", page:"learners" },
        { icon:"📄", text:"Assignments", page:"assignments" },
        { icon:"📝", text:"Topic Tests", page:"tests" },
        { icon:"💻", text:"Live Sessions", page:"live" },
        { icon:"🎥", text:"Resources", page:"resources" },
        { icon:"📢", text:"Announcements", page:"announcements" },
        { icon:"📈", text:"Reports", page:"reports" },
        { icon:"👤", text:"Profile", page:"profile" },
        { icon:"⚙", text:"Settings", page:"settings" },
        { icon:"🚪", text:"Logout", page:"logout" }

    ],

    Administrator: [

        { icon:"🏠", text:"Dashboard", page:"dashboard" },
        { icon:"👥", text:"Users", page:"users" },
        { icon:"🌍", text:"Countries", page:"countries" },
        { icon:"📚", text:"Subjects", page:"subjects" },
        { icon:"🎓", text:"Programmes", page:"programmes" },
        { icon:"🎥", text:"Resources", page:"resources" },
        { icon:"📄", text:"Assignments", page:"assignments" },
        { icon:"📝", text:"Topic Tests", page:"tests" },
        { icon:"📊", text:"Results", page:"results" },
        { icon:"📢", text:"Announcements", page:"announcements" },
        { icon:"🔬", text:"Research", page:"research" },
        { icon:"📈", text:"Reports", page:"reports" },
        { icon:"⚙", text:"Settings", page:"settings" },
        { icon:"🧾", text:"Audit Log", page:"audit" },
        { icon:"🚪", text:"Logout", page:"logout" }

    ]

};

/*=========================================
  BUILD SIDEBAR
=========================================*/

function buildSidebar(user) {

    const menu = document.getElementById("menu");

    if (!menu) return;

    menu.innerHTML = "";

    const items = MENU[user.role] || [];

    items.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="menu-icon">${item.icon}</span>
            <span>${item.text}</span>
        `;

        li.onclick = () => navigate(item.page);

        menu.appendChild(li);

    });

}

/*=========================================
  NAVIGATION
=========================================*/

function navigate(page) {

    if (page === "logout") {

        logout();

        return;

    }

    loadPage(page);
    
if (window.innerWidth <= 768) {

    closeSidebar();

}
}


/*=========================================
  LOGOUT
=========================================*/

function logout() {

    sessionStorage.clear();

    window.location.href = "index.html";

}
/*=========================================
  AIR PORTAL CONTROLLER
=========================================*/

(function () {

    initializePortal();

})();
/*=========================================
  MOBILE MENU
=========================================*/

const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function openSidebar() {

    sidebar.classList.add("active");
    overlay.classList.add("active");

}

function closeSidebar() {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

}

if (openMenu) {

    openMenu.addEventListener("click", openSidebar);

}

if (closeMenu) {

    closeMenu.addEventListener("click", closeSidebar);

}

if (overlay) {

    overlay.addEventListener("click", closeSidebar);

}

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        closeSidebar();

    }

});