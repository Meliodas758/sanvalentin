const correctPassword = "30122021";

function addDigit(digit) {
    const input = document.getElementById("passwordInput");
    input.value += digit;
}

function clearInput() {
    document.getElementById("passwordInput").value = "";
}

function validatePassword() {
    let userInput = document.getElementById("passwordInput").value;
    if (userInput === correctPassword) {
        showSection("timeTogetherSection");
        startTimer();
    } else {
        alert("Clave incorrecta.");
        clearInput();
    }
}

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

function startTimer() {
    const startDate = new Date("2021-12-30T20:24:16");
    setInterval(function () {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("timeCounter").innerHTML =`${years} años, ${days} días, ${hours}:${minutes}:${seconds}`;
    }, 1000);
}

function showMemory(memoryType) {
    showSection("memoryAnimationContainer");
    const canvas = document.getElementById("memoryAnimationCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText(`Animación de ${memoryType}`, 100, 100);
}

function showFinalMessage() {
    showSection("finalMessage");
}