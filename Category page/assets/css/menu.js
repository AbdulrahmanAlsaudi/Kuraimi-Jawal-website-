// Function to toggle the dropdown menu
function toggleMenu() {
    const menuList = document.getElementById("menuList");
    menuList.style.display = menuList.style.display === "block" ? "none" : "block";
}

// Close the menu if clicked outside
window.onclick = function(event) {
    const menuList = document.getElementById("menuList");
    if (!event.target.closest('.menu-container')) {
        menuList.style.display = "none";
    }
}