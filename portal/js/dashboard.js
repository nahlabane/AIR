/*=========================================
  DASHBOARD
=========================================*/

function loadDashboard(){

    if(!AIR.user){

        return;

    }

    const greeting = document.getElementById("dashboardGreeting");

    if(!greeting){

        return;

    }

    greeting.innerHTML = `

        <h2>Hello ${AIR.user.name}</h2>

        <p><strong>Role:</strong> ${AIR.user.role}</p>

        <p><strong>Country:</strong> ${AIR.user.country}</p>

        <p><strong>Programme:</strong> ${AIR.user.programme}</p>

    `;

}