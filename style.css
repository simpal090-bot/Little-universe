:root {
    --bg-pink: #ffe6ea;
    --bg-lavender: #e6e6fa;
    --bg-peach: #ffe5b4;
    --primary-pink: #ff9cbd;
    --spicy-red: #ff4b4b;
    --text-dark: #5c4a52;
    --glass-bg: rgba(255, 255, 255, 0.45);
    --glass-border: rgba(255, 255, 255, 0.7);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><text y='20' font-size='20'>✨</text></svg>"), auto;
}

body {
    font-family: 'Quicksand', sans-serif;
    color: var(--text-dark);
    background: linear-gradient(135deg, var(--bg-pink), var(--bg-lavender), var(--bg-peach));
    background-attachment: fixed;
    background-size: 300% 300%;
    animation: gradientBG 15s ease infinite;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: 'Fredoka One', cursive;
    letter-spacing: 1px;
    margin-bottom: 15px;
    color: #ff6eb4;
}

/* Glassmorphism Utilities */
.glass-card, .glass-section {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 2px solid var(--glass-border);
    border-radius: 25px;
    padding: 30px;
    box-shadow: 0 8px 32px rgba(255, 182, 193, 0.2);
    text-align: center;
    margin: 20px auto;
    max-width: 600px;
    width: 90%;
    transition: transform 0.3s ease;
}

.glass-section:hover { transform: translateY(-5px); }

/* GIF Styling */
.gif-container {
    margin: 15px 0;
    display: flex;
    justify-content: center;
}
.cute-gif {
    border-radius: 20px;
    max-width: 100%;
    height: auto;
    width: 250px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* Buttons */
button {
    font-family: 'Fredoka One', cursive;
    border: none;
    border-radius: 50px;
    padding: 12px 25px;
    font-size: 1rem;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
button:hover { transform: scale(1.1); }
button:active { transform: scale(0.95); }

.btn-primary { background: #ff85a2; color: white; }
.btn-secondary { background: white; color: #ff85a2; border: 2px solid #ff85a2; }
.btn-huge { background: linear-gradient(45deg, #ff85a2, #ffb6c1); color: white; font-size: 1.5rem; padding: 20px 40px; }

/* Animations */
@keyframes gradientBG { 0% {background-position: 0% 50%;} 50% {background-position: 100% 50%;} 100% {background-position: 0% 50%;} }
@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
@keyframes popIn { 0% { opacity: 0; transform: scale(0.5); } 100% { opacity: 1; transform: scale(1); } }
@keyframes fall { to { transform: translateY(100vh); opacity: 0; } }

.float-anim { animation: float 3s ease-in-out infinite; }
.pulse { animation: pulse 2s infinite; }
.hidden { display: none !important; }

/* Welcome Screen */
#welcome-screen {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(255, 230, 234, 0.95);
    z-index: 1000; display: flex; justify-content: center; align-items: center;
    transition: opacity 0.5s ease;
}

/* Tiny Companion */
#bunny-companion {
    position: fixed; bottom: 80px; right: 20px; z-index: 100; width: 80px; height: 80px;
}
.bunny-widget-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.1)); }
#bunny-speech {
    position: absolute; bottom: 90px; right: 20px; background: white; padding: 10px 15px;
    border-radius: 20px 20px 0 20px; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    white-space: nowrap; animation: popIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Navigation */
#navbar {
    position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px);
    padding: 10px 20px; border-radius: 30px; display: flex; gap: 15px;
    z-index: 99; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
#navbar a {
    text-decoration: none; color: var(--text-dark); font-weight: 700;
    font-size: 0.9rem; padding: 5px 10px; border-radius: 20px; transition: 0.3s;
}
#navbar a:hover { background: #ffe6ea; color: #ff6eb4; }

/* Layouts */
.mood-grid { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; margin-top: 20px; }
.result-bubble { margin-top: 15px; font-size: 1.2rem; font-weight: bold; color: #ff6eb4; animation: popIn 0.4s; }

/* SPICY SECTION */
.spicy-section { border-color: rgba(255, 75, 75, 0.3); box-shadow: 0 8px 32px rgba(255, 75, 75, 0.15); }
.spicy-section h2 { color: var(--spicy-red); }

.spicy-card-container {
    perspective: 1000px;
    width: 250px; height: 150px;
    margin: 20px auto;
}
.spicy-card {
    width: 100%; height: 100%;
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;
}
.spicy-card.is-flipped { transform: rotateY(180deg); }

.spicy-card-front, .spicy-card-back {
    width: 100%; height: 100%;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 15px;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    padding: 20px; box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
.spicy-card-front {
    background: linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%);
    color: white;
}
.spicy-card-front h3 { color: white; margin: 0; }
.spicy-card-back {
    background: white; color: var(--spicy-red);
    transform: rotateY(180deg); border: 2px solid var(--spicy-red);
}

/* Game: Love Meter */
.progress-bar {
    width: 100%; height: 25px; background: #fff; border-radius: 15px;
    margin: 15px 0; overflow: hidden; box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
}
#love-fill {
    height: 100%; width: 0%;
    background: linear-gradient(90deg, #ff9cbd, #ff69b4);
    transition: width 1.5s cubic-bezier(0.1, 0.7, 1.0, 0.1);
}

/* Love Corner Envelopes */
.envelope-grid { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-top:20px; }
.envelope {
    background: white; padding: 20px; border-radius: 10px; border-top: 20px solid #ff9cbd;
    width: 140px; text-align: center; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: 0.3s;
}
.envelope:hover { transform: translateY(-5px); border-top-color: #ff69b4; }
.envelope.open { background: #ffe6ea; border-top: none; }

@media (max-width: 600px) {
    #navbar { width: 95%; flex-wrap: wrap; justify-content: center; gap: 5px; }
    .glass-card, .glass-section { width: 95%; padding: 20px; }
    #bunny-companion { bottom: 120px; }
}
