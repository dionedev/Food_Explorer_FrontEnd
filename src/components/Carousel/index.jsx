import { useRef } from "react"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import {
  Container, 
  Slider, 
  LeftSliderButton,
  RightSliderButton
} from "./styles"

export const Carousel = ({title, children}) => {

  const carousel = useRef(null)
  const ICON_SIZE = 35

  const handleLeftSlider = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightSlider = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return(
    <Container>
      <h3>{title}</h3>

      <LeftSliderButton onClick={handleLeftSlider}>
        <SlArrowLeft size={ICON_SIZE} />
      </LeftSliderButton>

      <RightSliderButton onClick={handleRightSlider}>
        <SlArrowRight size={ICON_SIZE} />
      </RightSliderButton>
      
      <Slider ref={carousel}>
        {children} 
      </Slider>
    </Container>
  )
}