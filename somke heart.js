document.addEventListener("DOMContentLoaded", function() {
    let smokeContainer = document.querySelector(".smoke-container");

    setInterval(() => {
        let smoke = document.createElement("div");
        smoke.className = "smoke";

        // Random position along the heart
        let randomX = Math.random() * 200 - 100; // Between -100px and 100px
        let randomY = Math.random() * 50 - 25; // Small vertical variation
        let randomSize = Math.random() * 8 + 2; // Size between 2px - 10px
        let randomDuration = Math.random() * 2 + 1.5; // Duration 1.5s - 3.5s

        smoke.style.left = `calc(50% + ${randomX}px)`;
        smoke.style.top = `calc(50% + ${randomY}px)`;
        smoke.style.width = `${randomSize}px`;
        smoke.style.height = `${randomSize}px`;
        smoke.style.animationDuration = `${randomDuration}s`;

        smokeContainer.appendChild(smoke);

        // Remove smoke after animation ends
        setTimeout(() => {
            smoke.remove();
        }, randomDuration * 1000);
    }, 200);
});
