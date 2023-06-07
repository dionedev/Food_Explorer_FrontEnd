import ReceiptIcon from "../../assets/Icons/Receipt.svg"
import SignOutIcon from "../../assets/Icons/SignOut.svg"
import LogoImage from "../../assets/Icons/Polygon.svg"
import { FiSearch, FiMenu } from "react-icons/fi"
import { TbReceipt } from "react-icons/tb"
import { GoSignOut } from "react-icons/go"
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

  const ICON_SIZE = 26
  
  return(
    <Container>
      <MobileContent>
        <MenuButton type="button">
          <FiMenu size={ICON_SIZE} />
        </MenuButton>

        <CustomLogo>
          <img src={LogoImage} alt="logo em texto escrito food explorer" />
          <h1>food explorer</h1>
        </CustomLogo>

        <ReceiptButton type="button">
          <TbReceipt size={ICON_SIZE} />
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
          <TbReceipt size={ICON_SIZE} />
          Pedidos (0)
        </OrderButton>

        <SignOut type="button">
          <GoSignOut size={ICON_SIZE} />
        </SignOut>
      </DesktopContent>
    </Container>
  )
}