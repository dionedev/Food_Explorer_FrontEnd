import LogoImage from "../../assets/Icons/Polygon.svg"
import { Container } from "./styles"

export function Logo() {
  return(
    <Container>
      <img src={LogoImage} alt="logo em texto escrito food explorer" />
      <h1>food explorer</h1>
    </Container>
  )
}