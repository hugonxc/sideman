import { useState } from "react"
import { styled } from "@stitches/react"

import { createChord } from "../core/audio-controls"
import { getChordMidiNotes } from "../core/chords/chords"
import { ChordName } from "../core/chords/chords.types"

const SheetContainer = styled('div', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
  gap: 24,
})


type chordOption = {
  value: ChordName
  label: string
}

export const Sheet = () => {
  const [selectedChord, setSelectedChord] = useState<ChordName>('C')
  const midiNotes = getChordMidiNotes(selectedChord)
  createChord(midiNotes)

  const chordOptions: chordOption[] = [
    {value: 'C', label: 'C'},
    {value: 'D', label: 'D'},
    {value: 'E', label: 'E'},
    {value: 'F', label: 'F'},
    {value: 'G', label: 'G'},
    {value: 'A', label: 'A'},
    {value: 'B', label: 'B'},
  ]

  return (
    <SheetContainer>
      <select id="chord" onChange={(e) => setSelectedChord(e.target.value as ChordName)}>
        {chordOptions.map((option) => (
          <option value={option.value} key={option.value}>{option.label}</option>          
        ))}
      </select>
    </SheetContainer>
  )
}
