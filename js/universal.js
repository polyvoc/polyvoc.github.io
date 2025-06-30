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
                    <button class="menu-block-links" id="menu-home">Home</button><br>
                    <button class="menu-block-links" id="menu-about">About</button><br>
                    <button class="menu-block-links" id="menu-courses">Courses</button><br>
                    <button class="menu-block-links" id="menu-portfolio">Portfolio</button><br>
                    <button class="menu-block-links" id="menu-testimonials">Testimonials</button><br>
                    <button class="menu-block-links" id="menu-contact">Contact</button>
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
                    <button class="button" id="footer-top-contact">Contact us</button>
                </div>
            </div>
            <div id="contact-main">
                <div id="contact-main-left">
                    <div id="contact-main-logo">
                        <img id="contact-main-logo-img" src="./assets/logo-icon.png">
                        <p class="title-text" id="contact-main-title">POLYVOC</p>
                    </div>
                    <p class="normal-text" id="contact-main-address">20 Miller Pl, Syosset, NY 1179</p>
                </div>
                <div id="contact-main-right">
                    <div class="contact-main-right-links" id="contact-main-right-links-1">
                        <button class="contact-main-right-link" id="footer-home">Home</button><br>
                        <button class="contact-main-right-link" id="footer-about">About</button><br>
                        <button class="contact-main-right-link" id="footer-courses">Courses</button>
                    </div>
                    <div class="contact-main-right-links" id="contact-main-right-links-2">
                        <button class="contact-main-right-link" id="footer-portfolio">Portfolio</button><br>
                        <button class="contact-main-right-link" id="footer-testimonials">Testimonials</button><br>
                        <button class="contact-main-right-link" id="footer-contact">Contact</button>
                    </div>
                </div>
            </div>
            <script async src="footer.js"></script> 
        </div>
    `;
    document.getElementById("contact-all").innerHTML = footer;
}

function homeReturn () {
    document.getElementById("menu-home").onclick = function(){
        window.open("./index.html", "_parent");
    };
    document.getElementById("footer-home").onclick = function(){
        window.open("./index.html", "_parent");
    };
    document.getElementById("menu-icon").onclick = function(){
        window.open("./index.html", "_parent");
    };
}
function aboutReturn(offset) {
    document.getElementById("menu-about").onclick = function(){
        if (window.location.pathname.includes("index")) {
            closeMenu();
            scrollTo({top: document.getElementById("about").offsetTop - offset, behavior: "smooth"});
        }
        else {
            localStorage.setItem("toAbout", "going");
            window.open("./index.html", "_parent");
        }
    };
    document.getElementById("footer-about").onclick = function(){
        if (window.location.pathname.includes("index")) {
            closeMenu();
            scrollTo({top: document.getElementById("about").offsetTop - offset, behavior: "smooth"});
        }
        else {
            localStorage.setItem("toAbout", "going");
            window.open("./index.html", "_parent");
        }
    };
    if (localStorage.getItem("toAbout") == "going") {
            scrollTo({top: document.getElementById("about").offsetTop - offset, behavior: "smooth"});
            localStorage.removeItem("toAbout");
    }
}
function coursesReturn() {
    document.getElementById("menu-courses").onclick = function(){
        window.open("./courses.html", "_parent");
    };
    document.getElementById("footer-courses").onclick = function(){
        window.open("./courses.html", "_parent");
    };
}
function testimonialsReturn(offset) {
    document.getElementById("menu-testimonials").onclick = function(){
        if (window.location.pathname.includes("index")) {
            closeMenu();
            scrollTo({top: document.getElementById("testimonials").offsetTop - offset, behavior: "smooth"});
        }
        else {
            localStorage.setItem("toTestimonials", "going");
            window.open("./index.html", "_parent");
        }
    };
    document.getElementById("footer-testimonials").onclick = function(){
        if (window.location.pathname.includes("index")) {
            closeMenu();
            scrollTo({top: document.getElementById("testimonials").offsetTop - offset, behavior: "smooth"});
        }
        else {
            localStorage.setItem("toTestimonials", "going");
            window.open("./index.html", "_parent");
        }
    };
    if (localStorage.getItem("toTestimonials") == "going") {
            scrollTo({top: document.getElementById("testimonials").offsetTop - offset, behavior: "smooth"});
            localStorage.removeItem("toTestimonials");
    }
}
function portfolioReturn() {
    document.getElementById("menu-portfolio").onclick = function(){
        window.open("./portfolio.html", "_parent");
    };   
    document.getElementById("footer-portfolio").onclick = function(){
        window.open("./portfolio.html", "_parent");
    };    
}
function contactReturn() {
    document.getElementById("menu-contact").onclick = function(){
        window.open("./contact.html", "_parent");
    };
    document.getElementById("footer-top-contact").onclick = function(){
        window.open("./contact.html", "_parent");
    };
    document.getElementById("footer-contact").onclick = function(){
        window.open("./contact.html", "_parent");
    };
}

function linkInitiation() {
    var offset;
    if (width >= 1024) {
        offset = 225;
    }
    else {
        offset=300;
    }
    setHeaderFooter();
    homeReturn();
    aboutReturn(offset);
    coursesReturn();
    testimonialsReturn(offset);
    portfolioReturn();
    contactReturn();
}

var width = window.screen.width;

function openMenu() {
    document.getElementById("menu-block").style = "right: 0px;";
    document.getElementById("menu-grayout").style = "opacity: 0.3; pointer-events: all;";
};
function closeMenu() {
    if (width < 1024) {
        document.getElementById("menu-block").style = "right: -900px;";
    }
    else {
        document.getElementById("menu-block").style = "right: -600px;";
    }
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


function detailsButton(level) {
    localStorage.setItem("level", level);
    window.open("./courses.html", "_parent");
}

function changeToCourse1() {
    document.getElementById("courses-main-level").innerHTML = "Level 1 Class";
    document.getElementById("courses-main-price").innerHTML = "$1111";
    document.getElementById("courses-main-name").innerHTML = "Kindergarten - 3rd Grade";
    document.getElementById("courses-main-text").innerHTML = 
    "Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. Underit in voluptate velit esse. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.<br><br>- Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.<br>- Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. ";
}
function changeToCourse2() {
    document.getElementById("courses-main-level").innerHTML = "Level 2 Class";
    document.getElementById("courses-main-price").innerHTML = "$1234";
    document.getElementById("courses-main-name").innerHTML = "4th Grade - 9th Grade";
    document.getElementById("courses-main-text").innerHTML = 
    "Irure dolor in reprehenderit in voluptfugiat nulla pariatur. Excepteur sint occaecat cupidatat. Underit in voluptate velit esse. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.<br><br>- Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.<br>- Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. ";
}
function changeToCourse3() {
    document.getElementById("courses-main-level").innerHTML = "Level 3 Class";
    document.getElementById("courses-main-price").innerHTML = "$4235";
    document.getElementById("courses-main-name").innerHTML = "College Portfolio Prep";
    document.getElementById("courses-main-text").innerHTML = 
    "Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu atat. Underit in voluptate velit esse. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.<br><br>- Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.<br>- Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat. ";
}
function changeCourse() {
    if (window.location.pathname.includes("courses")) {
        if (localStorage.getItem("level") == 1) {
           changeToCourse1()
           localStorage.removeItem("level");
        }
        if (localStorage.getItem("level") == 2) {
            changeToCourse2()
           localStorage.removeItem("level");
        }
        if (localStorage.getItem("level") == 3) {
           changeToCourse3()      
           localStorage.removeItem("level");
        }  
    }
}

function switchCourse() {
    if (window.location.pathname.includes("courses")) {
        document.getElementById("courses-menu-select-1").onclick = function() {
            document.getElementById("courses-menu-select-1").style="border: 1px solid var(--borders);";
            document.getElementById("courses-menu-select-2").style="border: 1px solid transparent;";
            document.getElementById("courses-menu-select-3").style="border: 1px solid transparent;";
            changeToCourse1()
        }
        document.getElementById("courses-menu-select-2").onclick = function() {
            document.getElementById("courses-menu-select-2").style="border: 1px solid var(--borders);";
            document.getElementById("courses-menu-select-1").style="border: 1px solid transparent;";
            document.getElementById("courses-menu-select-3").style="border: 1px solid transparent;";
            changeToCourse2()
        }
        document.getElementById("courses-menu-select-3").onclick = function() {
            document.getElementById("courses-menu-select-3").style="border: 1px solid var(--borders);";
            document.getElementById("courses-menu-select-2").style="border: 1px solid transparent;";
            document.getElementById("courses-menu-select-1").style="border: 1px solid transparent;";
            changeToCourse3()
        }
    }
}

function loadFunction() {
    linkInitiation();
}

window.onload = function() {
    loadFunction();
    changeCourse();
    switchCourse();
}

