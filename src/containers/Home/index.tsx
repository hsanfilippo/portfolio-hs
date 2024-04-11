import Hero from "../../components/Hero"
import StackWindow from "../../components/StackWindow"
import * as S from "./styles"

const Home = () => {
  return(
    <>
    <S.BgContainer>
      <Hero />
      <StackWindow />
    </S.BgContainer>
    </>
  )
}

export default Home
