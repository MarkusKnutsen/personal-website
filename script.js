document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.textContent = "Toggle Theme";
    document.querySelector("header").appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("theme-toggle");
        localStorage.setItem("theme", document.body.classList.contains("theme-toggle") ? "light" : "dark");
    });

    // Load saved theme preference
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("theme-toggle");
    }
});
