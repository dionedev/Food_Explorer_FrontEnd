import { Container, Content, FavoriteButton, PlateCounter, ButtonInclude, CustomLinkButton} from "./styles"
import { HiPlus, HiMinus } from "react-icons/hi"
import { FcLike, FcLikePlaceholder} from "react-icons/fc"
import { MdArrowForwardIos } from "react-icons/md"

// import imageUrl from "../../assets/Images/Dish.svg"
 
const Card = ({imageUrl, title, price, amount, style}) => {

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

        <PlateCounter>
          <button>
            <HiPlus/>
          </button>

          <span>{amount}</span>

          <button>
            <HiMinus/>
          </button>
        </PlateCounter>

        <ButtonInclude>
          incluir
        </ButtonInclude>

      </Content>
    </Container>
  )
}
export default Card