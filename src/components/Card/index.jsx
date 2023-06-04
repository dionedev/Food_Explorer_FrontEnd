import { Container, Content, FavoriteButton, PlateCounter, ButtonInclude, CustomLinkButton} from "./styles"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { HiPlus, HiMinus } from "react-icons/hi"
import { FcLike, FcLikePlaceholder} from "react-icons/fc"
import { MdArrowForwardIos } from "react-icons/md"

import Dish from "../../assets/Images/Dish.svg"
 
const Card = () => {
const isFavorite = true
  return(
    <Container>
      <Content>
        <FavoriteButton>
          {isFavorite ? <FcLike /> : <FcLikePlaceholder/>}
        </FavoriteButton>

        <div>
          <img src={Dish} alt="Imagem do prato de comida" />
        </div>

        <CustomLinkButton>
          Salada Ravanello <MdArrowForwardIos />
        </CustomLinkButton>

        <span>R$ 49,97</span>

        <PlateCounter>
          <button>
            <HiPlus/>
          </button>

          <span>01</span>

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