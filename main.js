function setupTabs() {
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            const sidebar = button.parentElement;
            const tabsContainer = sidebar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs-content[data-tab="${tabNumber}"]`);

            sidebar.querySelectorAll(".filter-btn").forEach(button=>{
                button.classList.remove("filter-btn-active");
            });

            tabsContainer.querySelectorAll(".tabs-content").forEach(tab=>{
                tab.classList.remove("tabs-content-active");
            });

            button.classList.add("filter-btn-active")
            tabToActivate.classList.add("tabs-content-active");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
})