const newsButton = document.getElementById("newsButton");
const showNav = document.getElementById("showMeLinks");

function readMore() {
    window.open("https://codepen.io/hudsonF13")
}

function showUpNavigtion() {
    
}

newsButton.addEventListener("click", readMore);
showNav.addEventeListenner("click", showUpNavigtion)