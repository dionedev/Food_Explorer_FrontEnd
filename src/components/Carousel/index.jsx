import { useState, useRef } from "react"
import Card from "../Card"
import {Container, Slider, SliderButton} from "./styles"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

import imagePath from "../../assets/Images/Dish.svg"

const Carousel = ({title}) => {

  const carousel = useRef(null)

  const cards = [
    { title: 'Feijão com arroz', price: '57,88', imageUrl: imagePath, amount: 0 },
    { title: 'Ovos mexido', price: '20,56', imageUrl: imagePath, amount: 1 },
    { title: 'Salada', price: '35,10', imageUrl: imagePath, amount: 2 },
    { title: 'Salada', price: '20,10', imageUrl: imagePath, amount: 3 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 4 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
  ];


  // const handleLeftSlider = () => {
  //   setCurrentIndex(prevIndex => prevIndex === 0 ? cards.length - 1 : prevIndex - 1)
  // }

  // const handleRightSlider = () => {
  //   setCurrentIndex(prevIndex => prevIndex === cards.length - 1 ? 0 : prevIndex + 1)
  // }

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
          <SlArrowLeft size={25} />
        </SliderButton>
      <Slider ref={carousel}>

        {
          cards.map((card, index) => (
            <Card
              key={index} 
              title={card.title}
              price={card.price}
              amount={card.amount}
              imageUrl={card.imageUrl}
            />
          ))
        }    

      </Slider>
        <SliderButton onClick={handleRightSlider}>
          <SlArrowRight size={25} />
        </SliderButton>

    </Container>
  )
}
export default Carousel
