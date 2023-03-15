import ReceiptIcon from "../../assets/Icons/Receipt.svg"
import SignOutIcon from "../../assets/Icons/SignOut.svg"
import MenuIcon from "../../assets/Icons/Menu.svg"
import { Logo } from "../Logo"
import { Button } from "../Button"
import { 
  Container,
  MobileContent, 
  DesktopContent,
  CustomInput
} from "./styles"

export function Header() {
  return(
    <Container>
      <MobileContent>
        <button type="button">
          <img src={MenuIcon} alt="ícone do menu" />
        </button>

        <Logo/>

        <button type="button">
          <img src={ReceiptIcon} alt="ícone de recibo" />
        </button>
      </MobileContent>
      
      <DesktopContent>
        <Logo className="input-search" />

        <CustomInput
          type="text" 
          placeholder="Busque por pratos ou ingredientes"
        />
        
        <Button type="button" title="Pedidos" />

        <button type="button">
          <img src={SignOutIcon} alt="ícone para sair da aplicação" />
        </button>
      </DesktopContent>
    </Container>
  )
}