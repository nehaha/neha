/* Toggle sidebar*/
function toggleMenu() {
  document.getElementById("menu").classList.toggle('visible');
}

/* Hide menu icon and toggle sidebar on click */
function toggleOpenMenu() {
	document.getElementById('openMenu').style.display = 'none';
	toggleMenu();
}

/* Toggle sidebar on click and display menu icon */
function toggleCloseMenu() {
	document.getElementById('openMenu').style.display = 'block';
	toggleMenu();
}