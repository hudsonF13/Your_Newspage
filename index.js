const newsButton = document.getElementById("newsButton");
const showNav = document.getElementById("showMeLinks");
const menuNavMobile = document.getElementById("menuNavMobile");
const exitMenu = document.getElementById("exitMenu");

function readMore() {
    window.open("https://codepen.io/hudsonF13")
}

function showUpNavigtion() {
    menuNavMobile.classList.toggle("displayNone")
}

newsButton.addEventListener("click", readMore);
showNav.addEventListener("click", showUpNavigtion);
exitMenu.addEventListener("click", showUpNavigtion);