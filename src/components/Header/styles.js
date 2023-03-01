import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
  display: flex;
  flex-direction: row;
  padding: 6.4rem 0 3.2rem;

  @media (min-width: 768px) {
    .mobile-content {
      background-color: red;
    }
  }
`

export const MobileContent = styled.div`
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

  // Logo
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
`

export const Search = styled.div`
  width: 100%;
  background-color: aqua;

  > div {
    
  }
`