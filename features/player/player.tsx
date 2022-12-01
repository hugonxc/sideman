import { styled } from "@stitches/react"

import { MdPlayArrow, MdStop } from "react-icons/md"
import { play, stop } from "../core/audio-controls"

const PlayerContainer = styled('div', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
  gap: 24,
})

const PlayerButton = styled('button', {
  backgroundColor: '#00ABB3',
  border: 'transparent',
  borderRadius: 9999,
  width: 80,
  height: 80,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#0099A1'
  },
  '&:active': {
    backgroundColor: '#008990'
  }
})

export const Player = () => {
  return (
    <PlayerContainer>

      <PlayerButton onClick={() => play()}>
        <MdPlayArrow size={48} />
      </PlayerButton>
      
      <PlayerButton onClick={() => stop()}>
        <MdStop size={48} />
      </PlayerButton>

    </PlayerContainer>
  )
}
