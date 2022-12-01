import { styled } from "@stitches/react"
import { Player } from "../features/player/player"

const HomePageContainer = styled('div', {
  backgroundColor: '#3C4048',
  height: '100vh',
})

const HomePage = () => {
  return (
    <HomePageContainer>
      <Player />
    </HomePageContainer>
  )
}

export default HomePage