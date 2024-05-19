document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarContent = document.getElementById("navbar-content");
  
    navbarToggle.addEventListener("click", function() {
      navbarContent.classList.toggle("hidden");
    });
  });