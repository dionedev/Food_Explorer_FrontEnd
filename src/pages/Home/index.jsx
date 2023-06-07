import { Header } from "../../components/Header";
import Carousel from "../../components/Carousel"
import Card from "../../components/Card"
import Cover from "../../assets/Images/cover1.svg"
import {
  Container, 
  Content, 
  CoverSection,
  CarouselSection,
  CoverImage 
} from "./styles";

import imagePath from "../../assets/Images/Dish.svg"

export function Home() {

  const cards = [
    { title: 'Feijão com arroz', price: '57,88', imageUrl: imagePath, amount: 1 },
    { title: 'Ovos mexido', price: '20,56', imageUrl: imagePath, amount: 11 },
    { title: 'Salada', price: '35,10', imageUrl: imagePath, amount: 2 },
    { title: 'Salada', price: '20,10', imageUrl: imagePath, amount: 3 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 4 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
    { title: 'Salada', price: '10,10', imageUrl: imagePath, amount: 5 },
  ];

  return(
    <Container>
      <Header />
      <Content>
        <CoverSection>
          <CoverImage src={Cover} alt="Imagem ilustrativa de comida" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </CoverSection>

        <CarouselSection>
          <Carousel title="Refeições">
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
          </Carousel>

          <Carousel title="Pratos principais">
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
          </Carousel>

          <Carousel title="Pratos principais">
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
          </Carousel>
        </CarouselSection>

      </Content>
    </Container>
  )
}