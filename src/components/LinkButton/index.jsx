import { Container } from "./styles"

export function LinkButton({ className, children, ...rest }) {
  return(
    <Container className={className}>
      <a {...rest}>
        {children}
      </a>
    </Container>
  )
}