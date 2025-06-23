function setHeaderFooter() {
let header = `
        <div id="menu-bar">
            <img id="menu-icon" src="./assets/logo-icon.png">
            <button class="clear-button" id="menu-bar-button" onclick="openMenu()">Menu</button>
            </div>
            <div id="menu-grayout"></div>
            <div id="menu-block">
                <button class="clear-button" id="menu-bar-button-close" onclick="closeMenu()">Close Menu</button>
                <div id="menu-links">
                    <button class="menu-block-links">Home</button><br>
                    <button class="menu-block-links">About</button><br>
                    <button class="menu-block-links">Courses</button><br>
                    <button class="menu-block-links">Portfolio</button><br>
                    <button class="menu-block-links">Testimonials</button><br>
                    <button class="menu-block-links">Contact</button>
                </div>
            <script async src="menu.js"></script> 
        </div>
    `;
    document.getElementById("menu-main").innerHTML = header;

    let footer = `
        <div id="contact">
            <div id="contact-top-container">
                <div id="contact-top">
                    <p class="normal-text" id="contact-top-text">Questions or concerns?</p>
                    <button class="button">Contact us</button>
                </div>
            </div>
            <div id="contact-main">
                <div id="contact-main-left">
                    <div id="contact-main-logo">
                        <img id="contact-main-logo-img" src="./assets/logo-icon.png">
                        <p class="title-text" id="contact-main-title">POLYVOC</p>
                    </div>
                    <p class="normal-text" id="contact-main-address">3843 Streename Street, New York City, NY 19283</p>
                </div>
                <div id="contact-main-right">
                    <div class="contact-main-right-links" id="contact-main-right-links-1">
                        <a href="" id="contact-main-right-link">Home</a><br>
                        <a href="" id="contact-main-right-link">About</a><br>
                        <a href="" id="contact-main-right-link">Courses</a>
                    </div>
                    <div class="contact-main-right-links" id="contact-main-right-links-2">
                        <a href="" id="contact-main-right-link">Portfolio</a><br>
                        <a href="" id="contact-main-right-link">Testimonials</a><br>
                        <a href="" id="contact-main-right-link">Contact</a>
                    </div>
                </div>
            </div>
            <script async src="footer.js"></script> 
        </div>
    `;
    document.getElementById("contact-all").innerHTML = footer;
}

window.onload = function() {
    setHeaderFooter();
}

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
    if (window.scrollY <= 200) {
        document.getElementById("menu-bar").style = "border: 1px solid transparent; background: transparent;";
    }
    else {
        document.getElementById("menu-bar").style = "border: 1px solid var(--borders);";
    }
}, 10)
if (width > 1024) {
 
}



