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
    document.getElementById("courses-menu-select-1").style="border: 1px solid var(--borders);";
    document.getElementById("courses-menu-select-2").style="border: 1px solid transparent;";
    document.getElementById("courses-menu-select-3").style="border: 1px solid transparent;";
    document.getElementById("courses-menu-select-4").style="border: 1px solid transparent;";
    document.getElementById("courses-main-level").innerHTML = "Level 1 Class";
    document.getElementById("courses-main-price").innerHTML = "$999";
    document.getElementById("courses-main-name").innerHTML = "Grades K - 2";
    document.getElementById("courses-main-text").innerHTML = 
    "Inspired by American art education principles, this course invites young artists on a playful journey where stories come to life through art. Using a wide range of materials, children experiment, imagine, and create in a welcoming classroom that celebrates every idea. With no “wrong” answers, they’re encouraged to explore freely, developing both creativity and a personal sense of aesthetics through hands-on, story-driven projects.<br><br>Original Price: $1125";
}
function changeToCourse2() {
    document.getElementById("courses-menu-select-2").style="border: 1px solid var(--borders);";
    document.getElementById("courses-menu-select-1").style="border: 1px solid transparent;";
    document.getElementById("courses-menu-select-3").style="border: 1px solid transparent;";
    document.getElementById("courses-menu-select-4").style="border: 1px solid transparent;";
    document.getElementById("courses-main-level").innerHTML = "Level 2 Class";
    document.getElementById("courses-main-price").innerHTML = "$999";
    document.getElementById("courses-main-name").innerHTML = "Grades 3 - 5";
    document.getElementById("courses-main-text").innerHTML = 
    "Students will explore a wide range of materials, learning how to use each one to serve their ideas and bring drawing-based projects to life. Through sketching, basic shaping, and themed creations, they’ll discover how materials can enhance storytelling in art while building both creative thinking and technical skills.<br><br>Original Price: $1125";
}
function changeToCourse3() {
    document.getElementById("courses-menu-select-3").style="border: 1px solid var(--borders);";
    document.getElementById("courses-menu-select-2").style="border: 1px solid transparent;";
    document.getElementById("courses-menu-select-1").style="border: 1px solid transparent;";
    document.getElementById("courses-menu-select-4").style="border: 1px solid transparent;";
    document.getElementById("courses-main-level").innerHTML = "Level 3 Class";
    document.getElementById("courses-main-price").innerHTML = "$999";
    document.getElementById("courses-main-name").innerHTML = "Grades 6 - 8";
    document.getElementById("courses-main-text").innerHTML = 
    "Students will build strong foundations in sketching, shaping, structure, and color, with an emphasis on precision and craftsmanship. Alongside honing technical skills, they will explore diverse media to serve their ideas, strengthen observational abilities, and refine their creative process—ensuring that strong concepts remain at the core of their work.<br><br>Original Price: $1125";
}
function changeToCourse4() {
    document.getElementById("courses-menu-select-4").style="border: 1px solid var(--borders);";
    document.getElementById("courses-menu-select-3").style="border: 1px solid transparent;";
    document.getElementById("courses-menu-select-2").style="border: 1px solid transparent;";
    document.getElementById("courses-menu-select-1").style="border: 1px solid transparent;";
    document.getElementById("courses-main-level").innerHTML = "Level 4 Class";
    document.getElementById("courses-main-price").innerHTML = "Varies";
    document.getElementById("courses-main-name").innerHTML = "College Portfolio";
    document.getElementById("courses-main-text").innerHTML = 
    "Students prepare for their college art portfolio, building on learned skills and foundations. Price varies based on individual needs and packages.";
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
        if (localStorage.getItem("level") == 4) {
           changeToCourse4()      
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
            document.getElementById("courses-menu-select-4").style="border: 1px solid transparent;";
            changeToCourse1()
        }
        document.getElementById("courses-menu-select-2").onclick = function() {
            document.getElementById("courses-menu-select-2").style="border: 1px solid var(--borders);";
            document.getElementById("courses-menu-select-1").style="border: 1px solid transparent;";
            document.getElementById("courses-menu-select-3").style="border: 1px solid transparent;";
            document.getElementById("courses-menu-select-4").style="border: 1px solid transparent;";
            changeToCourse2()
        }
        document.getElementById("courses-menu-select-3").onclick = function() {
            document.getElementById("courses-menu-select-3").style="border: 1px solid var(--borders);";
            document.getElementById("courses-menu-select-2").style="border: 1px solid transparent;";
            document.getElementById("courses-menu-select-1").style="border: 1px solid transparent;";
            document.getElementById("courses-menu-select-4").style="border: 1px solid transparent;";
            changeToCourse3()
        }
         document.getElementById("courses-menu-select-4").onclick = function() {
            document.getElementById("courses-menu-select-4").style="border: 1px solid var(--borders);";
            document.getElementById("courses-menu-select-3").style="border: 1px solid transparent;";
            document.getElementById("courses-menu-select-2").style="border: 1px solid transparent;";
            document.getElementById("courses-menu-select-1").style="border: 1px solid transparent;";
            changeToCourse4()
        }
    }
}

function loadFunction() {
    linkInitiation();
}

function testmonialSwitch() {
    if (window.location.pathname.includes("index")) {
        var clicks = 1;
        var numTestimonials = 3;
        document.getElementById("next-quote").onclick = function() {
            clicks++;
            if (clicks > numTestimonials) {clicks = 1;}
            if (clicks == 1) {
                document.getElementById("testimonials-testimonial").innerHTML = "Before joining Polyvoc, my son could barely sit still for 10 minutes. Now he’s focused for the whole class and asks to draw even after we get home. It’s been amazing to see how engaged he is with art!";
                document.getElementById("testimonial-name").innerHTML = "Sophia, parent of a 6-year-old";
                document.getElementById("testimonial-profile-img").src = "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";
            }
            if (clicks == 2) {
                document.getElementById("testimonials-testimonial").innerHTML = "My daughter used to be shy and hesitant about showing her art, but since joining Polyvoc, she's grown so much in skill and confidence. The teachers truly understand how to connect with each child and bring out their creativity. We’re so grateful.";
                document.getElementById("testimonial-name").innerHTML = "Emma, parent of 10-year-old student";
                document.getElementById("testimonial-profile-img").src = "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";
            }
            if (clicks == 3) {
                document.getElementById("testimonials-testimonial").innerHTML = "Polyvoc helped me prepare my portfolio for art high school, and I actually got accepted into my top choice! The feedback was always supportive but constructive, and I learned how to express my ideas clearly through my artwork.";
                document.getElementById("testimonial-name").innerHTML = "Lucas, high school student";
                document.getElementById("testimonial-profile-img").src = "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";
            }

        }
    }
}

window.onload = function() {
    loadFunction();
    changeCourse();
    switchCourse();
    testmonialSwitch();
}

