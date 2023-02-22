import { Container } from "./styles"
import LogoImage from "../../assets/polygon.svg"

export function Logo() {
  return(
    <Container>
      <img src={LogoImage} alt="logo" />
      <h1>food explorer</h1>
    </Container>
  )
}