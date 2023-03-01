import ReceiptIcon from "../../assets/Icons/Receipt.svg"
import SignOutIcon from "../../assets/Icons/SignOut.svg"
import MenuIcon from "../../assets/Icons/Menu.svg"
import { Container, Search, MobileContent } from "./styles"
import { Input } from "../Input"
import { Logo } from "../Logo"
import { Button } from "../Button"

export function Header() {
  return(
    <Container>
      <MobileContent className="mobile-content">
        <button>
          <img src={MenuIcon} alt="ícone do menu" />
        </button>

        <Logo/>

        <button>
          <img src={ReceiptIcon} alt="ícone de recibo" />
        </button>
      </MobileContent>
      
      {/* <DesktopContent>
        <Logo />

        <Search>
          <Input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes" 
          />
        </Search>

        <Button title="Pedidos" />

        <button>
        <img src={SignOutIcon} alt="ícone para sair da aplicação" />
        </button>
      </DesktopContent> */}
    </Container>
  )
}