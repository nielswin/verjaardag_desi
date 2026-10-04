const birthdayMessage = document.getElementById("birthday-message");

setInterval(() => {
    document.title =
        document.title === "⸜(｡˃ ᵕ ˂ )⸝♡"
            ? "(˶˃ ᵕ ˂˶)"
            : "(..◜ᴗ◝..)";
}, 1000);


const cadeau = document.getElementById("cadeau");
const openCadeau = document.getElementById("cadeau-open");

cadeau.addEventListener("click", () => {

    // Don't allow another click while opening
    if (cadeau.classList.contains("opening")) return;

    // Start shaking
    cadeau.classList.add("opening");

    // Wait for the animation
    setTimeout(() => {

        // Remove shaking
        cadeau.classList.remove("opening");

        // Hide closed present
        cadeau.style.display = "none";

        // Show open present in EXACT same position
        openCadeau.style.display = "block";

        // Show birthday message
        birthdayMessage.style.display = "block";

        // Confetti
        createConfetti();

    }, 2000);
});


function createConfetti() {

    const colors = [
        "#ff69b4",
        "#ffd700",
        "#00ffff",
        "#ff6347",
        "#7fff00",
        "#9370db"
    ];

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4500);
    }
}

