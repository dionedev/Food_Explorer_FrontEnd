import { Logo } from "../Logo"
import { Container } from "./styles"
import MenuIcon from "../../assets/Icons/Menu.svg"
import ReceiptIcon from "../../assets/Icons/Receipt.svg"

export function Header() {
  return(
    <Container>
      <img src={MenuIcon} alt="ícone do menu" />
      <Logo/>
      <img src={ReceiptIcon} alt="ícone de recibo" />
    </Container>
  )
}