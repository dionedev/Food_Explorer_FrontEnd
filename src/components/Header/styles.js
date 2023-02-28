import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 6.4rem 0 3.2rem;
  

  > img {
    width: 2.6rem;
    height: 2.2rem;
  }

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