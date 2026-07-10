/* ==========================================
   ELEMENTS
========================================== */

const envelope = document.getElementById("envelope");
const envelopeScene = document.getElementById("envelopeScene");

const letterScene = document.getElementById("letterScene");
const letter = document.getElementById("letter");

const flowerButton = document.getElementById("flowerButton");

const roseScene = document.getElementById("roseScene");
const stem = document.getElementById("stem");
const rose = document.getElementById("rose");

const leaves = document.querySelectorAll(".leaf");

const sparkles = document.getElementById("sparkles-container");
const heartsContainer = document.getElementById("hearts-container");
const petalsContainer = document.getElementById("petals-container");

const loveMusic = document.getElementById("loveMusic");


/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    const icons = ["❤️","💖","💕","💗"];

    heart.innerHTML =
        icons[Math.floor(Math.random()*icons.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        (15 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (6 + Math.random()*5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },11000);

}

setInterval(createHeart,350);


/* ==========================================
   OPEN ENVELOPE
========================================== */

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    document.querySelector(".click-text").style.opacity="0";

    setTimeout(()=>{

        envelopeScene.classList.add("fadeOut");

    },900);

    setTimeout(()=>{

        envelopeScene.style.display="none";

        letterScene.style.display="flex";

        setTimeout(()=>{

            letter.classList.add("show");

        },100);

    },1800);

});


/* ==========================================
   FOR YOU BUTTON
========================================== */

flowerButton.addEventListener("click",()=>{

    letter.classList.remove("show");

    setTimeout(()=>{

        letterScene.style.display="none";

        roseScene.classList.add("show");

        startRoseAnimation();

    },900);

});


/* ==========================================
   ROSE GROWING
========================================== */

function startRoseAnimation(){

    stem.classList.add("grow");

    setTimeout(()=>{

        leaves.forEach(leaf=>{

            leaf.classList.add("show");

        });

    },1800);

    setTimeout(()=>{

        rose.classList.add("grow");

    },2600);
    /* ==========================================
   BLOOM THE ROSE
========================================== */

setTimeout(() => {

    rose.classList.add("bloom");

    createSparkles();

}, 5000);


/* ==========================================
   SHOW LOVE MESSAGE
========================================== */

const loveMessage = document.getElementById("loveMessage");

setTimeout(() => {

    loveMessage.classList.add("show");

}, 7000);


/* ==========================================
   PLAY MUSIC
========================================== */

setTimeout(() => {

    if (loveMusic) {

        loveMusic.volume = 0.4;

        loveMusic.play().catch(() => {
            console.log("Music autoplay blocked until user interaction.");
        });

    }

}, 6500);


/* ==========================================
   SPARKLES
========================================== */

function createSparkles(){

    const sparkleInterval = setInterval(()=>{

        for(let i=0;i<8;i++){

            const sparkle = document.createElement("div");

            sparkle.className = "sparkle";

            sparkle.style.left =
                (window.innerWidth/2 + (Math.random()*220-110)) + "px";

            sparkle.style.top =
                (window.innerHeight/2 - 180 + (Math.random()*220-110)) + "px";

            sparkle.style.animationDuration =
                (.8 + Math.random()) + "s";

            sparkles.appendChild(sparkle);

            setTimeout(()=>{

                sparkle.remove();

            },1500);

        }

    },300);

    // keep sparkles for 10 seconds
    setTimeout(()=>{

        clearInterval(sparkleInterval);

    },10000);

}


/* ==========================================
   FALLING ROSE PETALS
========================================== */

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "rose-petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.fontSize =
        (20 + Math.random()*18) + "px";

    petal.style.animationDuration =
        (6 + Math.random()*5) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}


/* Start petals after the flower blooms */

setTimeout(()=>{

    setInterval(createPetal,350);

},5500);


/* ==========================================
   OPTIONAL CONFETTI HEART BURST
========================================== */

function heartBurst(){

    for(let i=0;i<40;i++){

        const heart = document.createElement("div");

        heart.className="heart";

        heart.innerHTML="💖";

        heart.style.left =
            (window.innerWidth/2) + "px";

        heart.style.bottom="45%";

        heart.style.fontSize =
            (18+Math.random()*25)+"px";

        heart.style.animationDuration =
            (2+Math.random()*2)+"s";

        heart.style.transform =
            `translateX(${Math.random()*400-200}px)`;

        heartsContainer.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}

/* Burst when message appears */

setTimeout(()=>{

    heartBurst();

},7200);


/* ==========================================
   WINDOW RESIZE
========================================== */

window.addEventListener("resize",()=>{

    // Reserved for future effects

});


/* ==========================================
   THE END ❤️
========================================== */

console.log("❤️ Surprise loaded successfully.");

}