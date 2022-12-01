let audioContext, osc1, osc2, osc3
if (typeof window !== "undefined") {
  audioContext = new window.AudioContext()
  osc1 = audioContext.createOscillator()
  let env1 = audioContext.createGain()
  env1.gain.value = 0.005;
  osc1.connect(env1);
  env1.connect(audioContext.destination);
  osc1.start()

  osc2 = audioContext.createOscillator()
  let env2 = audioContext.createGain()
  env2.gain.value = 0.005;
  osc2.connect(env2);
  env2.connect(audioContext.destination);
  osc2.start()

  osc3 = audioContext.createOscillator()
  let env3 = audioContext.createGain()
  env3.gain.value = 0.005;
  osc3.connect(env3);
  env3.connect(audioContext.destination);
  osc3.start()

}

export const play = () => {
  audioContext.resume()
}

export const stop = () => {
  audioContext.suspend()
}

export const createChord = (frequencies: number[]) => {
  if (audioContext) {
    osc1.frequency.value = frequencies[0]
    osc2.frequency.value = frequencies[1]
    osc3.frequency.value = frequencies[2]
  }
}