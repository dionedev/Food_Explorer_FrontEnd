import styled from "styled-components";
import { Input } from "../Input";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
  display: flex;
  flex-direction: row;
  padding: 6.4rem 0 3.2rem;

`

export const MobileContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  // Ícones menu e recibo
  > button {
    background: transparent;
    border: none;

    img { 
      width: 2.6rem;
      height: 2.2rem;
    }
  }

  // Logo Mobile
  > div {
    width: 27.8rem;
    height: 2.6rem;

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    h1 {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const DesktopContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // Logo Desktop
  > div {
    width: 19.7rem;
    height: 3rem;

    img {
      width: 3rem;
      height: 3rem;
    }

    h1 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const CustomInput = styled(Input)`
  div {
    background-color: red;
  }
`