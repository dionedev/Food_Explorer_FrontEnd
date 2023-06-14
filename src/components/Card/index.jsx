import { HiPlus, HiMinus } from "react-icons/hi"
import { FcLike, FcLikePlaceholder} from "react-icons/fc"
import { MdArrowForwardIos } from "react-icons/md"
import { 
  Container,
  Content, 
  FavoriteButton, 
  OrderQuantity, 
  ButtonInclude, 
  CustomLinkButton
} from "./styles"

export const Card = ({ imageUrl, title, price, amount }) => {

  const isFavorite = true
  
  return(
    <Container>
      <Content>
        <FavoriteButton>
          {isFavorite ? <FcLike size={26} /> : <FcLikePlaceholder size={26} />}
        </FavoriteButton>

        <div>
          <img src={imageUrl} alt={title} />
        </div>

        <CustomLinkButton>
          {title} <MdArrowForwardIos />
        </CustomLinkButton>

        <span>R$ {price}</span>

        <OrderQuantity>
          <button>
            <HiPlus/>
          </button>

          <span>{amount}</span>

          <button>
            <HiMinus/>
          </button>
        </OrderQuantity>

        <ButtonInclude>
          incluir
        </ButtonInclude>

      </Content>
    </Container>
  )
}