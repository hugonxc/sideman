import { ChordFundamentalMidiNote, ChordName } from "./chords.types"

const midiNoteToFreq = (midiNote: number) => {
  return 440 * Math.pow(2, (midiNote - 69) / 12)
}

export const getChordMidiNotes = (chord: ChordName) => {
  const fundamental = ChordFundamentalMidiNote[chord]

  return (
    [
      midiNoteToFreq(fundamental),
      midiNoteToFreq(fundamental + 4),
      midiNoteToFreq(fundamental + 7),
    ]
  )
  midiNoteToFreq
}