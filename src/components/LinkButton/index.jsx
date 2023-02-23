import { Container } from "./styles"

export function LinkButton({ title, ...rest }) {
  return(
    <Container>
      <a {...rest}>
        {title}
      </a>
    </Container>
  )
}