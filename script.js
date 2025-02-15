document.addEventListener("DOMContentLoaded", () => {
    // Default to light mode
    document.body.classList.add("theme-change");
    let isDarkMode = false;
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    document.querySelector("header").appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle("theme-change");
        themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Load saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("theme-change");
    }
});
