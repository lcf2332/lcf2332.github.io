// Author: Sushil Thapa
// Date: Nov 29, 2023
// File Name: styles.css

// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
    menu.style.display = "none";
    } else {
    menu.style.display = "block";
    }
    }