import { CustomButton } from "./styles"

export function Button({ className, children}) {
  return(
    <CustomButton className={className}>
      {children}
    </CustomButton>
  )
}