document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.textContent = "Toggle Theme";
    document.querySelector("header").appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("theme-change");
        localStorage.setItem("theme", document.body.classList.contains("theme-change") ? "theme-change" : "dark");
    });

    // Load saved theme preference
    if (localStorage.getItem("theme") === "theme-change") {
        document.body.classList.add("theme-change");
    }
});

