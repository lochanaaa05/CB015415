// Get the toggle icon and the navigations as variables
const menuIcon = document.getElementById('toggle');
const navLinks = document.getElementById('nav-links');

// Adding event listener to the toggle icon to know when it is clicked
menuIcon.addEventListener('click', function() {
  // Toggle the nav-active class to show or hide the navigations when the icon is clicked
  navLinks.classList.toggle('nav-active');
});