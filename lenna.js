// ===============================
// AMBIL ELEMENT
// ===============================

const opening = document.getElementById("opening");
const website = document.getElementById("website");

const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");

const music = document.getElementById("music");


// ===============================
// BUKA SURAT
// ===============================

function bukaSurat() {

    // Cegah tombol ditekan berkali-kali
    openButton.disabled = true;

    // Animasi amplop terbuka
    envelope.classList.add("open");

    // Efek hati
    createHeartExplosion();

    // Tunggu animasi surat
    setTimeout(function () {

        // Hilangkan halaman pembuka
        opening.classList.add("hide");

    }, 1000);


    // Tampilkan website
    setTimeout(function () {

        website.classList.add("show");

        document.body.style.overflowY = "auto";

        // Kembali ke paling atas
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Coba memainkan musik
        music.play().catch(function () {
            console.log("Musik menunggu interaksi pengguna.");
        });

    }, 1600);

}


// ===============================
// TOMBOL BUKA SURAT
// ===============================

openButton.addEventListener("click", bukaSurat);


// Klik amplop juga bisa membuka
envelope.addEventListener("click", function () {

    if (!envelope.classList.contains("open")) {
        bukaSurat();
    }

});


// ===============================
// EFEK HATI
// ===============================

function createHeartExplosion() {

    const hearts = [
        "♥",
        "♡",
        "❤",
        "✦",
        "✧"
    ];

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        heart.style.color = "#c94e76";

        heart.style.fontSize =
            (Math.random() * 20 + 10) + "px";


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 300 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1.2)`,

                    opacity: 0
                }
            ],
            {
                duration: 1500,
                easing: "ease-out"
            }
        );


        document.body.appendChild(heart);


        setTimeout(function () {
            heart.remove();
        }, 1600);

    }

}


// ===============================
// MUSIC
// ===============================

const musicButton =
    document.getElementById("musicButton");


if (musicButton) {

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            musicButton.innerHTML =
                '<span class="music-icon">♫</span><span>Music</span>';

        } else {

            music.pause();

            musicButton.innerHTML =
                '<span class="music-icon">▶</span><span>Music</span>';

        }

    });

}


// ===============================
// HEADER SCROLL
// ===============================

const header =
    document.getElementById("header");


window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ===============================
// BACK TO TOP
// ===============================

const backTop =
    document.getElementById("backTop");


if (backTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ===============================
// WISH
// ===============================

const wishButton =
    document.getElementById("wishButton");


if (wishButton) {

    wishButton.addEventListener("click", function () {

        wishButton.innerHTML =
            "Wish sent ✦";

        wishButton.disabled = true;

        createHeartExplosion();

    });

}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });


revealElements.forEach(function (element) {

    observer.observe(element);

});