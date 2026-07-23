/* ==========================================================
   MALARA PORTFOLIO
   SCRIPT.JS
   PART 1 - BACKGROUND / TYPING / SCROLL REVEAL
==========================================================*/

/* ===========================
   ELEMENTS
=========================== */

const stars =
document.getElementById("stars");

const particles =
document.getElementById("particleContainer");

const fireflies =
document.getElementById("fireflyContainer");

/* ===========================
   STARS
=========================== */

for(let i = 0; i < 220; i++){

    const star =
    document.createElement("div");

    star.className = "star";

    star.style.left =
    Math.random()*100 + "%";

    star.style.top =
    Math.random()*100 + "%";

    const size =
    Math.random()*3 + 1;

    star.style.width =
    size + "px";

    star.style.height =
    size + "px";

    star.style.animationDelay =
    Math.random()*4 + "s";

    stars.appendChild(star);

}

/* ===========================
   PARTICLES
=========================== */

for(let i = 0; i < 45; i++){

    const particle =
    document.createElement("div");

    particle.className =
    "particle";

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.top =
    Math.random()*100 + "%";

    particle.style.opacity =
    Math.random();

    particles.appendChild(particle);

    animateParticle(particle);

}

function animateParticle(particle){

    const duration =
    6000 + Math.random()*7000;

    particle.animate([

        {
            transform:
            "translateY(0px)"
        },

        {
            transform:
            "translateY(-120px)"
        }

    ],{

        duration:duration,

        iterations:Infinity,

        direction:"alternate",

        easing:"ease-in-out"

    });

}

/* ===========================
   FIREFLIES
=========================== */

for(let i = 0; i < 25; i++){

    const firefly =
    document.createElement("div");

    firefly.className =
    "firefly";

    firefly.style.left =
    Math.random()*100 + "%";

    firefly.style.top =
    Math.random()*100 + "%";

    fireflies.appendChild(firefly);

    animateFirefly(firefly);

}

function animateFirefly(firefly){

    const x =
    Math.random()*120-60;

    const y =
    Math.random()*120-60;

    const duration =
    4000 + Math.random()*5000;

    firefly.animate([

        {
            transform:
            "translate(0px,0px)"
        },

        {
            transform:
            `translate(${x}px,${y}px)`
        }

    ],{

        duration:duration,

        direction:"alternate",

        iterations:Infinity,

        easing:"ease-in-out"

    });

}

/* ===========================
   TYPING EFFECT
=========================== */

const typing =
document.getElementById("typing");

const words = [

    "PROGRAMMER",

    "ROBLOX DEV",

    "COLLEGE STUDENT",

    "BROKE",

    "WORLDBUILDER"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

function type(){

    const current =
    words[wordIndex];

    if(!deleting){

        typing.textContent =
        current.substring(0,letterIndex++);

        if(letterIndex >
        current.length){

            deleting = true;

            setTimeout(type,5000);

            return;

        }

    }else{

        typing.textContent =
        current.substring(0,--letterIndex);

        if(letterIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(type,
    deleting ? 50 : 110);

}

type();

/* ===========================
   EXPLORE BUTTON
=========================== */

const scrollButton =
document.getElementById("scrollButton");

if(scrollButton){

    scrollButton.onclick = () => {

        document
        .getElementById("about")
        .scrollIntoView({

            behavior:"smooth"

        });

    };

}

/* ===========================
   SCROLL REVEAL
=========================== */

const observer =
new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

document
.querySelectorAll("section,.glass,.project,.skillCard")
.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

/* ==========================================================
   PART 2 - EFFECTS / LIGHTBOX / MUSIC / CURSOR
==========================================================*/

/* ===========================
   MOBILE CHECK
=========================== */

const mobile =
window.matchMedia("(max-width:900px)").matches;

/* ===========================
   MOON GLOW
=========================== */

const moon =
document.getElementById("moon");

if(moon){

setInterval(()=>{

moon.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.04)"

},

{

transform:"scale(1)"

}

],{

duration:3500,

iterations:1

});

},4000);

}

/* ===========================
   MUSIC
=========================== */

const music =
document.getElementById("music");

const musicButton =
document.getElementById("musicButton");

let playing = false;

if(musicButton){

musicButton.onclick=()=>{

if(!playing){

music.play();

musicButton.innerHTML="❚❚";

playing=true;

}else{

music.pause();

musicButton.innerHTML="♪";

playing=false;

}

};

}

/* ===========================
   LIGHTBOX
=========================== */

const lightbox =
document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=

'<img id="lightboxImage">';

document.body.appendChild(lightbox);

const lightboxImage =
document.getElementById("lightboxImage");

document

.querySelectorAll(".galleryGrid img")

.forEach(image=>{

image.onclick=()=>{

lightbox.classList.add("active");

lightboxImage.src=image.src;

};

});

lightbox.onclick=()=>{

lightbox.classList.remove("active");

};

/* ===========================
   CURSOR GLOW
=========================== */

if(!mobile){

const cursor =
document.createElement("div");

cursor.id="cursorGlow";

document.body.appendChild(cursor);

window.addEventListener(

"mousemove",

e=>{

cursor.style.left=

e.clientX+"px";

cursor.style.top=

e.clientY+"px";

});

}

/* ===========================
   PARALLAX
=========================== */

if(!mobile){

window.addEventListener(

"mousemove",

e=>{

const x=
(e.clientX/window.innerWidth-.5)*15;

const y=
(e.clientY/window.innerHeight-.5)*15;

document.body.style.backgroundPosition=

`${50+x}% ${50+y}%`;

});

}

/* ===========================
   SMOOTH NAV
=========================== */

document

.querySelectorAll('nav a[href^="#"]')

.forEach(link=>{

link.onclick=(e)=>{

e.preventDefault();

const id = link.getAttribute("href");

const target = document.querySelector(id);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

};

});

/* ==========================================================
   PART 3 - FINAL POLISH
==========================================================*/

/* ===========================
   LOADING SCREEN
=========================== */

const loader = document.createElement("div");

loader.id = "loader";

loader.innerHTML = `

<div class="loaderContent">

<h1>JETSKIIIX</h1>

<div class="loaderBar">

<div class="loaderFill"></div>

</div>

</div>

`;

document.body.appendChild(loader);

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.remove();

        }, 800);

    }, 1200);

});

/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   RANDOM CARD FLOAT
=========================== */

document

.querySelectorAll(".project,.skillCard,.glass")

.forEach(card => {

    card.animate([

        {

            transform:"translateY(0px)"

        },

        {

            transform:"translateY(-6px)"

        },

        {

            transform:"translateY(0px)"

        }

    ],{

        duration:5000 + Math.random()*4000,

        iterations:Infinity,

        easing:"ease-in-out"

    });

});

/* ===========================
   IMAGE LAZY ANIMATION
=========================== */

document

.querySelectorAll("img")

.forEach(image=>{

image.loading="lazy";

image.addEventListener("load",()=>{

image.animate([

{

opacity:0,

transform:"scale(.95)"

},

{

opacity:1,

transform:"scale(1)"

}

],{

duration:700,

fill:"forwards"

});

});

});

/* ===========================
   SMALL RANDOM GLOW
=========================== */

setInterval(()=>{

const moon=document.getElementById("moon");

if(moon){

moon.style.filter=

`brightness(${1+Math.random()*.15})`;

}

},1000);

/* ===========================
   FPS LIMIT
=========================== */

let previous=0;

function animationLoop(time){

if(time-previous>33){

previous=time;

}

requestAnimationFrame(animationLoop);

}

requestAnimationFrame(animationLoop);

console.log("JETSKIIIX Portfolio Loaded");

/* ===========================
   TERMINAL MODE
=========================== */


const terminalButton =
document.getElementById("terminalButton");


const terminalOverlay =
document.getElementById("terminalOverlay");


const closeTerminal =
document.getElementById("closeTerminal");


const terminalOutput =
document.getElementById("terminalOutput");



const terminalLines = [

"> CONNECTING TO MAJARA SYSTEM...",

"> ACCESS GRANTED",

"",

"USER: NULL",

"CLASS: UNKNOWN",

"LEVEL: ???",

"CURRENT OBJECTIVE: MAJARA",

"",

"> LOADING SKILLS...",

"[████████░░] LUA",

"[██████░░░░] C#",

"[███████░░░] PYTHON",

"[█████████░] HTML / CSS",

"[█████░░░░░] BLENDER",

"",

"> CURRENT PLANS",

"[✓] Mana System",

"[✓] Lantern Physics",

"[✓] Custom Sky Shader",

"[ ] Weather System",

"[ ] Combat System",

"[ ] Enemy AI",

"",

"> SYSTEM STATUS: ONLINE"

];



let terminalRunning = false;



function runTerminal(){


if(terminalRunning)
return;


terminalRunning=true;


terminalOutput.innerHTML="";


let lineIndex=0;



function typeLine(){


if(lineIndex >= terminalLines.length){

terminalRunning=false;

return;

}



let line =
terminalLines[lineIndex];


let element =
document.createElement("p");


terminalOutput.appendChild(element);



let charIndex=0;



function typeCharacter(){


if(charIndex < line.length){


element.textContent +=
line[charIndex];


charIndex++;


setTimeout(typeCharacter,35);


}

else{


lineIndex++;


setTimeout(typeLine,250);


}


}



typeCharacter();



}



typeLine();


}



if(terminalButton){


terminalButton.onclick=(e)=>{


e.preventDefault();


terminalOverlay.classList.add("active");


runTerminal();


};


}



if(closeTerminal){


closeTerminal.onclick=()=>{


terminalOverlay.classList.remove("active");


terminalRunning=false;


};


}