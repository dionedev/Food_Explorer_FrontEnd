import { Container } from "./styles";

export function Input({ className, icon: Icon, label, title, ...rest}) {
  return(
    <Container className={className}>
      {Icon && <Icon size={22} />}

      <label htmlFor={label}>
        {title}
      </label>

      <input id={label} {...rest} />
    </Container>
  )
}