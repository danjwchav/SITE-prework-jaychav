// Global Constants
const clueHoldTime = 1000;  // how long to hold each clue's light/sound
const cluePauseTime = 333;  // hold long to pause in between clues
const nextClueWaitTime = 1000;  // how long to wait before playing sequence

// Global Variables
var pattern = [];  // keeps track of secret button pattern
var progress = 0;  // current number of "rounds" played in the pattern
var gamePlaying = false;  // is the game active?
var tonePlaying = false;  // no tone should play at the start
var volume = 0.5;  // must be between 0.0 and 1.0
var guessCounter = 0;  // "round number" of user's current guess?
var livesLeft = 3;  // start the game with 3 lives

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  generatePattern();
  livesLeft = 3;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  // begin clue sequence
  playClueSequence();
}

function generatePattern() {
  for (let numRounds = 0; numRounds < 8; numRounds++) {
    pattern += [Math.round((Math.random())*3 + 1)];
  }
  console.log("Secret pattern: " + pattern);
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  
  if (!gamePlaying) {
    return;
  }
  
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        // you guessed correctly on the final round
        // You win!
        winGame();
      } else {
        // correct guess, but the game continues
        progress++;
        playClueSequence();
      }
    } else {
      // You guessed correctly! On to the next rouund!
      guessCounter++;
    }
  } else {
    // you guessed incorrectly
    livesLeft--;  // remaining tries decremented
    if (livesLeft == 0) {
      // You lose.
      loseGame();
    } else {
      alert("Incorrect. Restarting round " + (progress + 1) + ". (lives remaining: " + livesLeft + ")");
      playClueSequence();
    }
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;  // set delay to initial wait time
  for (let i = 0; i <= progress; i++) {  // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);  // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function stopGame() {
  // end game
  gamePlaying = false;
  pattern = [];
  // swap the Start and Stop buttons back
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  alert("Game Over. You won!")
}

// Sound Synthesis Functions
const freqMap = {
  /* determines pitch played for each button */
  /* I chose these as the strings of a violin, from lowest to highest:
   * G, D, A, E */
  1: 196.0,
  2: 293.7,
  3: 440.0,
  4: 659.3
}
function playTone(btn,len) {
  /* plays a tone for len of time when btn is pressed */
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if(!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}
function stopTone() {
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
    tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);
