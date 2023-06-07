import styled from "styled-components";
import { Button } from "../Button";
import { Input } from "../Input"

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 10.4rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
  display: flex;
  flex-direction: row;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 0 12.3rem;
  }
`

export const MobileContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`

export const DesktopContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  display: flex;
  align-self: center;
  background: transparent;
  border: none;

  > svg {
    color: ${({ theme }) => theme.colors.light_100};
  }
`

export const ReceiptButton = styled.button`
  display: flex;
  align-self: center;
  background: transparent;
  border: none;

  > svg {
    color: ${({ theme }) => theme.colors.light_100};
  }
`

export const CustomLogo = styled.div`
  width: 12.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  > img {
    width: 3rem;
    height: 3rem;
  }

  > h1 {
    font-size: 2.4rem;
    white-space: nowrap;
  }

  @media (min-width: 767px) {
    width: 19.7rem;
    margin-right: 4.3rem;

    > h1 {
      white-space: nowrap;
    }
  }
`

export const Search = styled(Input)`
  width: 58rem;
  min-width: 25rem;
  margin-right: 3.2rem;
`

export const OrderButton = styled(Button)`
  width: 21.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  margin-right: 3.2rem;
  white-space: nowrap;
  padding: 2rem;
`

export const SignOut = styled.button`
  display: flex;
  align-self: center;
  background: none;
  border: none;

  > svg {
    color: ${({ theme }) => theme.colors.light_100};
  }
`