/**
 * Tutorial 1: Subtractive Synthesizer - Step 3
 *  
 * Questions:
 * 1) Multi-waveform OSC
 *   - Balancing
 * 2) ADSR envelope
 * 3) Feedback Delay FX.
 */


function Voice(context, balance) {
  
  context.createNodes(this, {
    saw: 'Oscillator',
    sqr: 'Oscillator',
    sawAmp: 'Gain',
    sqrAmp: 'Gain',
    lpf1: 'BiquadFilter',
    lpf2: 'BiquadFilter',
    mixAmp: 'Gain'
  });

  // this.saw = context.createOscillator();
  // this.sqr = context.createOscillator();
  // this.sawAmp = context.createGain();
  // this.sqrAmp = context.createGain();
  // this.lpf1 = context.createBiquadFilter();
  // this.lpf2 = context.createBiquadFilter();
  // this.mixAmp = context.createGain();

  this.saw.type = 'sawtooth';
  this.sqr.type = 'square';

  this.saw.to(this.sawAmp).to(this.lpf1).to(this.lpf2).to(this.mixAmp);
  this.sqr.to(this.sqrAmp).to(this.lpf1);
  this.mixAmp.to(context.DAC);

  // this.lpf1.connect(this.lpf2);
  // this.lpf2.connect(this.mixAmp);
  // this.mixAmp.connect(context.destination);
}

Voice.prototype.noteOn = function (pitch, intensity, envelope) {
  // ADS
  var freq = 440.0 * Math.pow(2, (Math.floor(pitch) - 69) / 12.0);
  var now = context.currentTime;


};

Voice.prototype.noteOff = function () {
  // R
  
};

