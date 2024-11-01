document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            tabLinks.forEach(link => link.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            const tabId = link.getAttribute("data-tab");
            link.classList.add("active");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
