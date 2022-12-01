let audioContext
if (typeof window !== "undefined") {
    audioContext = new window.AudioContext()
    let osc = audioContext.createOscillator();
    osc.frequency.value = 440;
    osc.connect(audioContext.destination)
    osc.start()
}

export const play = () => {
    audioContext.resume()
}

export const stop = () => {
    audioContext.suspend()
}