import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  > div {
    margin-bottom: 7.3rem;

    h1 {
      font-size: clamp(3.2rem, 1rem + 5vw, 4.2rem);
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;

    > div {
      width: 32.4rem;
      margin-bottom: 0;
      padding-right: 1rem;

      h1 {
        font-size: clamp(3.2rem, 0.8rem + 3vw, 4.2rem);
      }
    }
  }
`
export const Form = styled.form`
  width: 100%;
  max-width: 31.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h2 {
    display: none;
  }

  @media (min-width: 768px) {
    max-width: 47.6rem;
    padding: 6.4rem;
    background-color: ${({ theme }) => theme.colors.dark_700};
    border-radius: 1.6rem;
    
    > h2 {
    display: block;
    text-align: center;
    font-size: 3.2rem;
    /* font-family: 'Poppins'; */
  }
}
`