document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("login-container");
    const gameContainer = document.getElementById("game-container");
    const playerNameInput = document.getElementById("playerName");
    const loginBtn = document.getElementById("loginBtn");
    const playerDisplay = document.getElementById("playerDisplay");
    const wordInput = document.getElementById("wordInput");
    const hintDisplay = document.getElementById("hint");
    const scoreDisplay = document.getElementById("score");
    const livesDisplay = document.getElementById("lives");
    const messageDisplay = document.getElementById("message");
    const stopBtn = document.getElementById("stopBtn");
    const restartBtn = document.getElementById("restartBtn");

    let words = [
        { word: "banana", hint: "It is a fruit" },
        { word: "elephant", hint: "It is the largest land animal" },
        { word: "guitar", hint: "A musical instrument with strings" },
        { word: "ocean", hint: "A vast body of salt water" },
        { word: "planet", hint: "A celestial body orbiting a star" },
        { word: "laptop", hint: "A portable computer" },
        { word: "python", hint: "A popular programming language" },
        { word: "diamond", hint: "A precious stone" },
        { word: "volcano", hint: "A mountain that erupts" },
        { word: "chocolate", hint: "A sweet treat made from cocoa" },
        { word: "airplane", hint: "A vehicle that flies in the sky" },
        { word: "rainbow", hint: "A colorful arc in the sky after rain" },
        { word: "penguin", hint: "A flightless bird found in Antarctica" },
        { word: "butterfly", hint: "An insect with colorful wings" },
        { word: "sunflower", hint: "A yellow flower that faces the sun" },
        { word: "telescope", hint: "An instrument used to see distant objects" },
        { word: "calendar", hint: "A chart that shows days, months, and years" },
        { word: "microscope", hint: "Used to magnify tiny objects" },
        { word: "keyboard", hint: "Used to type on a computer" },
        { word: "internet", hint: "A global network of computers" },
        { word: "watermelon", hint: "A large green fruit with red inside" },
        { word: "umbrella", hint: "Used to protect from rain" },
        { word: "sunglasses", hint: "Worn to protect eyes from the sun" },
        { word: "backpack", hint: "Used to carry books and essentials" },
        { word: "telephone", hint: "A device used for calling someone" },
        { word: "football", hint: "A sport played with a round ball" },
        { word: "kangaroo", hint: "An animal that jumps and lives in Australia" },
        { word: "fireworks", hint: "Used in celebrations with lights and sound" },
        { word: "notebook", hint: "Used for writing notes" },
        { word: "astronaut", hint: "A person who travels in space" },
        { word: "raincoat", hint: "Worn during rainy weather" },
        { word: "sandcastle", hint: "Built with sand at the beach" },
        { word: "blueberry", hint: "A small blue fruit" },
        { word: "carousel", hint: "A rotating amusement ride" },
        { word: "caterpillar", hint: "Turns into a butterfly" },
        { word: "chandelier", hint: "A decorative hanging light" },
        { word: "compass", hint: "Used for finding directions" },
        { word: "fireplace", hint: "Provides warmth in winter" },
        { word: "honeycomb", hint: "Made by bees to store honey" }
    ];

    let currentWord = "";
    let currentHint = "";
    let score = 0;
    let lives = 3;

    function startGame() {
        let randomIndex = Math.floor(Math.random() * words.length);
        currentWord = words[randomIndex].word;
        currentHint = words[randomIndex].hint;
        hintDisplay.textContent = "Hint: " + currentHint;
        wordInput.value = "";
        messageDisplay.textContent = "";
    }

    loginBtn.addEventListener("click", function () {
        const playerName = playerNameInput.value.trim();
        if (playerName) {
            playerDisplay.textContent = playerName;
            loginContainer.style.display = "none";
            gameContainer.style.display = "block";
            startGame();
        } else {
            alert("Enter your name to start the game.");
        }
    });

    wordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            let guessedWord = wordInput.value.trim().toLowerCase();
            if (guessedWord === currentWord) {
                score += 10;
                messageDisplay.textContent = "Correct!";
            } else {
                score -= 5;
                lives--;
                messageDisplay.textContent = "Wrong! Try again.";
            }
            scoreDisplay.textContent = score;
            livesDisplay.textContent = lives;
            if (lives === 0) {
                alert("Game Over! Restarting...");
                restartGame();
            } else {
                startGame();
            }
        }
    });

    stopBtn.addEventListener("click", function () {
        alert("Game Stopped. Your final score: " + score);
        location.reload();
    });

    restartBtn.addEventListener("click", restartGame);

    function restartGame() {
        score = 0;
        lives = 3;
        scoreDisplay.textContent = score;
        livesDisplay.textContent = lives;
        startGame();
    }
});
