import { useRef } from "react"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import {Container, Slider, SliderButton} from "./styles"
import { Card } from "../Card"

export const Carousel = ({title, children}) => {

  const carousel = useRef(null)
  const ICON_SIZE = 25

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

      <SliderButton onClick={handleLeftSlider}>
        <SlArrowLeft size={ICON_SIZE} />
      </SliderButton>

      <Slider ref={carousel}>
        {children} 
      </Slider>

      <SliderButton onClick={handleRightSlider}>
        <SlArrowRight size={ICON_SIZE} />
      </SliderButton>
      
    </Container>
  )
}