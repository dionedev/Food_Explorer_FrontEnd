import { Button } from "../../components/Button"
import { LinkButton } from "../../components/LinkButton"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"
import { Container, Form } from "./styles"

export function SignUp() {
  return(
    <Container>
      <Logo />

      <Form>
        <h2>Crie sua conta</h2>

        <Input
          title="Nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />

        <Input
          title="Email"
          type="email"
          placeholder="Exemplo: maria@exemplo.com"
        />

        <Input
          title="Senha"
          type="password"
          placeholder="Mínimo 6 caracteres"
        />

        <Button title="Criar conta" />

        <LinkButton 
          title="Já tenho uma conta" 
          href="#"
          target="_blank"
        />
      </Form>
    </Container>
  )
}