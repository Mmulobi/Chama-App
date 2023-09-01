document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("app");

    // Load components based on the URL route
    const path = window.location.pathname;
    if (path.startsWith("/auth")) {
        // Load authentication component
        loadComponent("auth");
    } else if (path.startsWith("/members")) {
        // Load members component
        loadComponent("members");
    } else if (path.startsWith("/transactions")) {
        // Load transactions component
        loadComponent("transactions");
    } else if (path.startsWith("/meetings")) {
        // Load meetings component
        loadComponent("meetings");
    } else {
        // Default to the homepage
        loadComponent("homepage");
    }

    function loadComponent(componentName) {
        // Load and render the specified component
        fetch(`/components/${componentName}.js`)
            .then((response) => response.text())
            .then((componentCode) => {
                const componentScript = document.createElement("script");
                componentScript.textContent = componentCode;
                appContainer.innerHTML = ""; // Clear previous content
                appContainer.appendChild(componentScript);
            })
            .catch((error) => {
                console.error("Error loading component:", error);
            });
    }
});
