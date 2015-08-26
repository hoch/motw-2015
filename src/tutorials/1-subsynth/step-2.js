/**
 * Tutorial 1: Subtractive Synthesizer - Step 2
 *  
 * Questions:
 * 1) Create Voice class.
 *   - Constructor
 *   - noteOn: attack and decay.
 * 2) How to capture key up/down nicely.
 *
 * Extra:
 * 1) More control on LPF with sliders.
 */


// class 'Voice': represents a single voice triggered by a keystroke.
function Voice(context, type) {
  this.osc = context.createOscillator();
  this.lowpass = context.createBiquadFilter();
  this.amp = context.createGain();

  this.osc.type = type;

  this.osc.connect(this.lowpass);
  this.lowpass.connect(this.amp);
  this.amp.connect(context.destination);
}

Voice.prototype.noteOn = function (pitch, intensity) {
  var freq = 440.0 * Math.pow(2, (Math.floor(pitch) - 69) / 12.0);
  var now = context.currentTime;

  // Parameter enveloping.
  this.osc.frequency.setValueAtTime(freq, now);
  this.lowpass.frequency.setValueAtTime(freq, now);
  this.lowpass.frequency.exponentialRampToValueAtTime(freq * 4, now + 1.0);
  this.lowpass.frequency.exponentialRampToValueAtTime(freq, now + 2.0);
  this.lowpass.Q.setValueAtTime(0.1, now);
  this.lowpass.Q.linearRampToValueAtTime(10.0, now + 1.0);
  this.lowpass.Q.linearRampToValueAtTime(0.1, now + 2.0);
  this.amp.gain.setValueAtTime(0.0, now);
  this.amp.gain.linearRampToValueAtTime(intensity, now + 0.1);
  this.amp.gain.linearRampToValueAtTime(0.0, now + 2.0);

  this.osc.start(now);
  this.osc.stop(now + 2.0);
};


var context = new AudioContext();


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

var KEYS_PRESSED = [];

// Key event handler: change the oscillator's frequency.
window.addEventListener('keydown', function (event) {
  // If the key is already pressed or there is no corresponding MIDI pitch,
  // stop here.
  if (KEYS_PRESSED[event.keyCode] || !PITCH_MAP.hasOwnProperty(event.keyCode))
    return;

  var voice = new Voice(context, 'sawtooth');
  KEYS_PRESSED[event.keyCode] = true;

  var midiPitch = PITCH_MAP[event.keyCode];
  voice.noteOn(midiPitch, 0.25);  
});

window.addEventListener('keyup', function (event) {
  if (!KEYS_PRESSED[event.keyCode])
    return;

  KEYS_PRESSED[event.keyCode] = false;
});