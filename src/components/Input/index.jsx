import { Container } from "./styles";

export function Input({ icon : Icon, label, title, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={22} />}

      <label htmlFor={label}>
        {title}
      </label>

      <input id={label} {...rest} />
    </Container>
  )
}