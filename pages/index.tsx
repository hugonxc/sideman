import { styled } from "@stitches/react"
import { Player } from "../features/player/player"
import { Sheet } from "../features/sheet/sheet"

const HomePageContainer = styled('div', {
  backgroundColor: '#3C4048',
  height: '100vh',
})

const HomePage = () => {
  return (
    <HomePageContainer>
      <Player />
      <Sheet />
    </HomePageContainer>
  )
}

export default HomePage