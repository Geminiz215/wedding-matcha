/**
 * ============================================================================
 * ROMANTIC CAFE MUSIC BOX SYNTHESIZER (Web Audio API)
 * ============================================================================
 * Menghasilkan melodi hangat lo-fi piano & music-box chime dalam tangga nada
 * F Major / D Minor pentatonic tanpa dependensi file audio eksternal.
 * Menghormati user consent (mulai dalam keadaan OFF).
 */

export interface NoteStep {
  freq: number;
  bass: number | null;
  dur: number;
}

export class CafeMusicBoxEngine {
  private ctx: AudioContext | null = null;
  public isPlaying: boolean = false;
  private intervalId: NodeJS.Timeout | null = null;
  private step: number = 0;

  // Dreamy Japanese café chord & melody progression
  private readonly notes: NoteStep[] = [
    { freq: 523.25, bass: 261.63, dur: 1.4 }, // C5 + C4
    { freq: 659.25, bass: null, dur: 1.1 },   // E5
    { freq: 783.99, bass: 220.0, dur: 1.5 },  // G5 + A3
    { freq: 659.25, bass: null, dur: 1.1 },   // E5
    { freq: 587.33, bass: 174.61, dur: 1.4 }, // D5 + F3
    { freq: 698.46, bass: null, dur: 1.2 },   // F5
    { freq: 880.0, bass: 196.0, dur: 1.6 },   // A5 + G3
    { freq: 783.99, bass: null, dur: 1.4 },   // G5
    { freq: 659.25, bass: 261.63, dur: 1.3 }, // E5 + C4
    { freq: 523.25, bass: null, dur: 1.1 },   // C5
    { freq: 587.33, bass: 293.66, dur: 1.5 }, // D5 + D4
    { freq: 523.25, bass: 196.0, dur: 1.8 }   // C5 + G3
  ];

  public init(): void {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playBellNote(freq: number | null, duration: number = 1.4, volume: number = 0.065): void {
    if (!this.ctx || !freq) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    subOsc.type = 'triangle';

    osc.frequency.setValueAtTime(freq, now);
    subOsc.frequency.setValueAtTime(freq * 0.5, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    subOsc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    subOsc.start(now);
    osc.stop(now + duration + 0.05);
    subOsc.stop(now + duration + 0.05);
  }

  public playSparkleChime(): void {
    this.init();
    if (!this.ctx) return;
    const chimeFreqs = [523.25, 659.25, 783.99, 1046.5];
    chimeFreqs.forEach((f, idx) => {
      setTimeout(() => {
        this.playBellNote(f, 0.9, 0.05);
      }, idx * 90);
    });
  }

  public start(): boolean {
    this.init();
    if (!this.ctx) return false;
    if (this.isPlaying) return true;
    this.isPlaying = true;

    const triggerStep = () => {
      if (!this.isPlaying) return;
      const item = this.notes[this.step % this.notes.length];
      this.playBellNote(item.freq, item.dur, 0.055);
      if (item.bass) {
        this.playBellNote(item.bass, item.dur * 1.3, 0.035);
      }
      this.step += 1;
    };

    triggerStep();
    this.intervalId = setInterval(triggerStep, 720);
    return true;
  }

  public stop(): void {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
