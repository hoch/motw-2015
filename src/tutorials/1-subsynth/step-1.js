/**
 * Tutorial 1: Subtractive Synthesizer - Step 1
 *
 * Questions:
 * 1) Create an audio graph.
 * 2) Key event to MIDI pitch map.
 * 3) User interaction and change AudioParam.
 *
 * Extra:
 * 1) LFO vibrato + one more slider.
 */


var context = new AudioContext();

// Subtractive synthesis: starts with a rich tone and cut out the spectral
// content you do not need. A sawtooth oscillator and a low pass filter is a 
// typical combination for the task.
var sawosc = context.createOscillator();
var lowpass = context.createBiquadFilter();
var amp = context.createGain();

// Define the waveform type and set up the cutoff frequency.
sawosc.type = 'sawtooth';
lowpass.frequency.value = 1000;
amp.gain.value = 0.0;

// Creates audio graph and starts the oscillator.
sawosc.to(lowpass).to(amp).to(context.DAC);
sawosc.start();


// Key-to-Pitch map: this map is a small dictionary of ASCII code mapped to
// MIDI pitches. 
//  w e   t y u
// a s d f g h j k
var PITCH_MAP = {
  '65': 60,   // C4
  '87': 61,   // C#4
  '83': 62,   // D4
  '69': 63,   // D#4
  '68': 64,   // E4
  '70': 65,   // F4
  '84': 66,   // F#4
  '71': 67,   // G4
  '89': 68,   // G#4
  '72': 69,   // A4
  '85': 70,   // A#4
  '74': 71,   // B4
  '75': 72    // C5
};


/**
 * Gotcha: 
 * Why is using the AudioParam setter problematic? What else can we do?
 */


// Key event handler: change the oscillator's frequency.
window.addEventListener('keydown', function (event) {
  if (!PITCH_MAP.hasOwnProperty(event.keyCode))
    return;

  // Get MIDI pitch from the key code and convert it to frequency.
  var midiPitch = PITCH_MAP[event.keyCode];
  var freq = 440.0 * Math.pow(2, (Math.floor(midiPitch) - 69) / 12.0);
  
  sawosc.frequency.value = freq;
});


// handle slider-input event.
var cutoffSlider = document.getElementById('cutoff');
var cutoffLabel = document.getElementById('cutoff-value');

cutoffSlider.oninput = function (event) {
  cutoffLabel.textContent = event.target.value + ' Hz';
  lowpass.frequency.value = event.target.value;
}

// handle slider-input event.
var resoSlider = document.getElementById('reso');
var resoLabel = document.getElementById('reso-value');

resoSlider.oninput = function (event) {
  resoLabel.textContent = event.target.value;
  lowpass.Q.value = event.target.value;
}


// handle checkbox-click event.
var muteToggle = document.getElementById('mute');

muteToggle.onclick = function (event) {
  // Check the status of the toggle and change the gain accordingly.
  var targetGain = event.target.checked ? 0.0 : 0.707;
  var later = context.currentTime + 0.05;
  amp.gain.linearRampToValueAtTime(targetGain, later);
}