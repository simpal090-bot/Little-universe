document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. WELCOME SCREEN & INIT ---
    const welcomeScreen = document.getElementById("welcome-screen");
    const enterBtn = document.getElementById("enter-btn");
    const mainContent = document.getElementById("main-content");

    enterBtn.addEventListener("click", () => {
        welcomeScreen.style.opacity = "0";
        setTimeout(() => {
            welcomeScreen.classList.add("hidden");
            mainContent.classList.remove("hidden");
            createSparkles();
        }, 500);
    });

    // --- 2. TINY COMPANION WIDGET ---
    const bunnyWidget = document.getElementById("bunny-companion");
    const bunnySpeech = document.getElementById("bunny-speech");
    const bunnyMessages = [
        "Hewwooo! 👋", "You look hot today! 🔥", "Need a cuddle? 🧸", 
        "Go check the spicy corner! 🌶️", "You're my favorite! 💗"
    ];

    bunnyWidget.addEventListener("click", () => {
        const msg = bunnyMessages[Math.floor(Math.random() * bunnyMessages.length)];
        bunnySpeech.innerText = msg;
        bunnySpeech.classList.remove("hidden");
        bunnyWidget.style.transform = "scale(1.2)";
        setTimeout(() => bunnyWidget.style.transform = "scale(1)", 200);
        setTimeout(() => { bunnySpeech.classList.add("hidden"); }, 3000);
    });

    // --- 3. BOREDOM BUTTON ---
    const boredBtn = document.getElementById("bored-btn");
    const boredResult = document.getElementById("bored-result");
    const boredIdeas = [
        "Do a silly little dance right now! 💃", 
        "Give me a 10-second kiss. 💋",
        "Send me a cute (or spicy) selfie! 📸", 
        "Go draw a card in the Spicy Corner! 🌶️"
    ];

    boredBtn.addEventListener("click", () => {
        boredResult.innerText = boredIdeas[Math.floor(Math.random() * boredIdeas.length)];
        boredResult.classList.remove("hidden");
    });

    // --- 4. MOOD STATION (With Dynamic Peach & Goma GIFs) ---
    const moodBtns = document.querySelectorAll(".mood-btn");
    const moodResultCard = document.getElementById("mood-result-card");
    const moodGif = document.getElementById("mood-gif");
    const moodText = document.getElementById("mood-text");

    const moodData = {
        happy: {
            text: "Yay! Keep glowing, pretty girl! ✨🌸",
            gif: "https://media.tenor.com/f_d_Jbb_2LMAAAAj/peach-and-goma-peach-goma.gif"
        },
        sad: {
            text: "Oh no... Here's a massive virtual hug! 🧸🥺",
            gif: "https://media.tenor.com/5OqB0P1n2h8AAAAj/peach-goma-crying.gif"
        },
        angry: {
            text: "Who do I need to fight?! 🥊😤 (Take a deep breath)",
            gif: "https://media.tenor.com/39_mE24P7o4AAAAj/peach-goma-angry.gif"
        },
        sleepy: {
            text: "Go rest those pretty eyes. Come cuddle! 🌙💤",
            gif: "https://media.tenor.com/xO42dK8gB1sAAAAj/peach-goma-sleep.gif"
        }
    };

    moodBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const mood = e.target.getAttribute("data-mood");
            moodGif.src = moodData[mood].gif;
            moodText.innerText = moodData[mood].text;
            moodResultCard.classList.remove("hidden");
            // Add a little pop animation
            moodResultCard.style.animation = 'none';
            moodResultCard.offsetHeight; /* trigger reflow */
            moodResultCard.style.animation = 'popIn 0.4s';
        });
    });

    // --- 5. SPICY CORNER 🌶️ (Card Draw Mechanic) ---
    const spicyCard = document.getElementById("spicy-card");
    const spicyPrompt = document.getElementById("spicy-prompt");
    const nextSpicyBtn = document.getElementById("next-spicy-btn");

    const spicyPrompts = [
        "Give me a kiss that lasts at least 10 seconds. 💋",
        "You owe me a full back massage tonight. 💆‍♀️",
        "Send me a risky text right now. 📱🔥",
        "Make out with me... immediately. 🥵",
        "Sit on my lap for the next 10 minutes. 🪑",
        "Tell me your favorite physical thing about me. 😏",
        "You owe me one free 'Get out of an argument' pass. 🏆",
        "Hold my hand under the table. 🤝"
    ];

    spicyCard.addEventListener("click", () => {
        if (!spicyCard.classList.contains("is-flipped")) {
            // Pick a random prompt
            const prompt = spicyPrompts[Math.floor(Math.random() * spicyPrompts.length)];
            spicyPrompt.innerText = prompt;
            spicyCard.classList.add("is-flipped");
            nextSpicyBtn.classList.remove("hidden");
        }
    });

    nextSpicyBtn.addEventListener("click", () => {
        spicyCard.classList.remove("is-flipped");
        nextSpicyBtn.classList.add("hidden");
    });


    // --- 6. MINI GAMES ---
    const loveMeterBtn = document.getElementById("love-meter-btn");
    const loveFill = document.getElementById("love-fill");
    const loveResult = document.getElementById("love-result");
    
    loveMeterBtn.addEventListener("click", () => {
        loveFill.style.width = "0%";
        loveResult.innerText = "Calculating chemistry...";
        setTimeout(() => {
            loveFill.style.width = "100%";
            loveResult.innerHTML = "<strong>1000% MATCH! Dangerously hot chemistry! 🔥💖</strong>";
        }, 500);
    });

    // --- 7. HUG SIMULATOR ---
    const hugBtn = document.getElementById("hug-btn");
    const hugGifContainer = document.getElementById("hug-gif-container");
    const hugMessage = document.getElementById("hug-message");

    hugBtn.addEventListener("click", () => {
        hugBtn.classList.add("hidden");
        hugGifContainer.classList.remove("hidden");
        hugMessage.classList.remove("hidden");
    });

    // --- 8. LOVE CORNER (Envelopes) ---
    const envelopes = document.querySelectorAll(".envelope");
    envelopes.forEach(env => {
        env.addEventListener("click", () => {
            if(!env.classList.contains("open")) {
                env.classList.add("open");
                env.innerHTML = `<span style="font-size: 0.9rem;">${env.getAttribute("data-msg")}</span>`;
            }
        });
    });

    // --- BACKGROUND SPARKLES ---
    function createSparkles() {
        const container = document.getElementById("sparkle-container");
        setInterval(() => {
            const sparkle = document.createElement("div");
            sparkle.innerHTML = "✨";
            sparkle.style.position = "fixed";
            sparkle.style.left = Math.random() * 100 + "vw";
            sparkle.style.top = "-20px";
            sparkle.style.opacity = Math.random();
            sparkle.style.fontSize = (Math.random() * 10 + 10) + "px";
            sparkle.style.animation = `fall ${Math.random() * 3 + 3}s linear`;
            sparkle.style.zIndex = "-1";
            container.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 6000);
        }, 800);
    }
});
