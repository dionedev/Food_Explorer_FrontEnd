import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"
import { Container, Form } from "./styles"

export function SignIn() {
  return(
    <Container>
      <Logo />

      <Form>
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
      </Form>
    </Container>
  )
}