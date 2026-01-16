const toggleButton = document.querySelector(".toggleButtonContainer");
const header = document.getElementById("header-container");
const sidebar = document.getElementById("sidebar-container");
const body = document.body;

toggleButton.addEventListener("click", function() {

    header.classList.toggle("activeSidebar");
    toggleButton.classList.toggle("open");
    sidebar.classList.toggle("open");
    body.classList.toggle("activeSidebar");


})  