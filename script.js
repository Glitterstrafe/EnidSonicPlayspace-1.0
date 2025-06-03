
let audioContext;
const buffers = {};

function createGrid() {
  const grid = document.getElementById('grid');
  for (let i = 0; i < 64; i++) {
    const pad = document.createElement('div');
    pad.className = 'pad';
    pad.dataset.note = 36 + i; // Launchpad notes start at 36
    grid.appendChild(pad);
  }
}

function initMIDI() {
  if (!navigator.requestMIDIAccess) {
    console.warn('WebMIDI is not supported in this browser.');
    return;
  }
  navigator.requestMIDIAccess().then((midi) => {
    for (const input of midi.inputs.values()) {
      if (input.name && input.name.includes('Launchpad')) {
        input.onmidimessage = handleMIDIMessage;
      }
    }
  }, () => {
    console.error('Could not access MIDI devices.');
  });
}

function handleMIDIMessage(event) {
  const [status, note, velocity] = event.data;
  if (status === 144 && velocity > 0) {
    playNote(note);
  }
}

function playNote(note) {
  const buffer = buffers[note];
  if (!buffer) return;
  if (!audioContext) audioContext = new AudioContext();
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
}

function loadFileForPad(pad, file) {
  if (!audioContext) audioContext = new AudioContext();
  const reader = new FileReader();
  reader.onload = (e) => {
    const arrayBuffer = e.target.result;
    audioContext.decodeAudioData(arrayBuffer, (buffer) => {
      buffers[pad.dataset.note] = buffer;
      pad.classList.add('loaded');
    });
  };
  reader.readAsArrayBuffer(file);
}

function setupPadLoading() {
  const grid = document.getElementById('grid');
  const fileInput = document.getElementById('fileInput');

  grid.addEventListener('click', (e) => {
    if (!e.target.classList.contains('pad')) return;
    fileInput.onchange = () => {
      const file = fileInput.files[0];
      if (file) loadFileForPad(e.target, file);
      fileInput.value = '';
    };
    fileInput.click();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createGrid();
  setupPadLoading();
  initMIDI();
});
