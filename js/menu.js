var width = window.screen.width;

function openMenu() {
    document.getElementById("menu-block").style = "right: 0px;";
    document.getElementById("menu-grayout").style = "opacity: 0.3; pointer-events: all;";
};
function closeMenu() {
    document.getElementById("menu-block").style = "right: -600px;";
    document.getElementById("menu-grayout").style = "opacity: 0; pointer-events: none;";
};
setInterval(function () {
    if (window.scrollY <= 400) {
        document.getElementById("menu-bar").style = "border: 1px solid transparent; background: transparent;";
    }
    else {
        document.getElementById("menu-bar").style = "border: 1px solid var(--borders);";
    }
}, 10)
if (width > 1024) {
 
}

