import { Header } from "../../components/Header";
import Carousel from "../../components/Carousel"
import Cover from "../../assets/Images/cover.svg"
import { Container, Content, FrontCover } from "./styles";

export function Home() {
  return(
    <Container>
      <Header />
      <Content>
        <FrontCover>
          <img src={Cover} alt="Imagem ilustrativa de comida" />
          
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </FrontCover>

        <Carousel title="Refeições" />
        
          
      </Content>
    </Container>
  )
}