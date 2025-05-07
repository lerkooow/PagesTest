function openTab(evt, tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-link");

    tabs.forEach((tab) => tab.classList.remove("active"));
    buttons.forEach((btn) => btn.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");

    changeBodyColor(tabId);
    changeButtonColor(tabId);
}

function changeBodyColor(tabId) {
    const body = document.body;
    switch (tabId) {
        case 'minimal':
            body.style.backgroundColor = '#b0aa93';
            break;
        case 'premium':
            body.style.backgroundColor = '#5f010a';
            break;
        case 'dynamic':
            body.style.backgroundColor = '#17285C';
            break;
    }
}


function changeButtonColor(tabId) {
    const buttons = document.querySelectorAll(".button");
    const tabButtons = document.querySelectorAll(".tab-link");
    let color, hoverColor;

    switch (tabId) {
        case "minimal":
            color = "#9a7b67";
            hoverColor = "#b8967e";
            break;
        case "premium":
            color = "#c88644";
            hoverColor = "#d89b5d";
            break;
        case "dynamic":
            color = "#881649";
            hoverColor = "#a21c58";
            break;
    }

    buttons.forEach((btn) => {
        btn.style.backgroundColor = color;

        btn.onmouseenter = () => (btn.style.backgroundColor = hoverColor);
        btn.onmouseleave = () => (btn.style.backgroundColor = color);
    });

    tabButtons.forEach((btn) => {
        if (btn.classList.contains("active")) {
            btn.style.backgroundColor = color;
            btn.style.color = "#fff";
            btn.onmouseenter = () => (btn.style.backgroundColor = hoverColor);
            btn.onmouseleave = () => (btn.style.backgroundColor = color);
        } else {
            btn.style.backgroundColor = "";
            btn.style.color = "";
            btn.onmouseenter = null;
            btn.onmouseleave = null;
        }
    });
}
