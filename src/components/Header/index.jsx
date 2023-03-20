import ReceiptIcon from "../../assets/Icons/Receipt.svg"
import SignOutIcon from "../../assets/Icons/SignOut.svg"
import LogoImage from "../../assets/Icons/Polygon.svg"
import MenuIcon from "../../assets/Icons/Menu.svg"
import { FiSearch } from "react-icons/fi"
import { 
  Container,
  MobileContent, 
  DesktopContent,
  CustomLogo,
  OrderButton,
  Search,
  SignOut,
  MenuButton,
  ReceiptButton
} from "./styles"

export function Header() {
  return(
    <Container>
      <MobileContent>
        <MenuButton type="button">
          <img src={MenuIcon} alt="ícone do menu" />
        </MenuButton>

        {/* <Logo/> */}

        <CustomLogo>
          <img src={LogoImage} alt="logo em texto escrito food explorer" />
          <h1>food explorer</h1>
        </CustomLogo>

        <ReceiptButton type="button">
          <img src={ReceiptIcon} alt="ícone de recibo" />
        </ReceiptButton>
      </MobileContent>
      
      <DesktopContent>
        <CustomLogo>
          <img src={LogoImage} alt="logo em texto escrito food explorer" />
          <h1>food explorer</h1>
        </CustomLogo>

        <Search 
          placeholder="Busque por pratos ou ingredientes" 
          icon={FiSearch} 
        />

        <OrderButton>
          <img src={ReceiptIcon} alt="ícone de recibo" />
          Pedidos (0)
        </OrderButton>

        <SignOut type="button">
          <img src={SignOutIcon} alt="ícone para sair da aplicação" />
        </SignOut>
      </DesktopContent>
    </Container>
  )
}