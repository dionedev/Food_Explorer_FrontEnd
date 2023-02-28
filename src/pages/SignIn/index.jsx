import { Button } from "../../components/Button"
import { LinkButton } from "../../components/LinkButton"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"
import { Container, Form } from "./styles"

export function SignIn() {
  return(
    <Container>
      <Logo />

      <Form>
        <h2>Faça login</h2>

        <Input
          title="Email"
          type="email"
          placeholder="Digite seu e-mail"
        />

        <Input
          title="Senha"
          type="password"
          placeholder="Mínimo 6 caracteres"
        />

        <Button title="Entrar" />

        <LinkButton 
          title="Criar uma conta" 
          href="#"
          target="_blank"
        />
      </Form>
    </Container>
  )
}