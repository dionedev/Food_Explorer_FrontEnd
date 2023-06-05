import {Container, Slider, SliderButton} from "./styles"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

const Carousel = ({title, children}) => {
  return(
    <Container>
      <h3>{title}</h3>

      <Slider>
        <SliderButton>
          <SlArrowLeft size={25} />
        </SliderButton>

        {children}

        <SliderButton>
          <SlArrowRight size={25} />
        </SliderButton>
      </Slider>

    </Container>
  )
}
export default Carousel
