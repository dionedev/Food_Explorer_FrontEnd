import styled from "styled-components";

const primaryFont = 'Poppins, sans-serif';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-items: center;
  align-items: center;
  flex-direction: column;

  > footer { // CRIAR COMPONENTE
    display: flex;
    background-color: #fff;
    color: red;
    width: 100%;
  }

  /* @media (min-width: 620px) {
    background: orange;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
    "header header header"
    "content content content"
    "footer footer footer"
    ;
  } */
`
 
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 42.8rem;
  padding: 5.5rem 2.4rem 1.6rem;

  @media (min-width: 620px) {
    /* width: 100%; */
  }
`

export const CoverSection = styled.section`
  display: flex;
  width: 100%;
  height: 12rem;
  justify-content: end;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 4px;
  position: relative;
  margin-bottom: 6.2rem;

  > div {
    display: flex;
    width: 22rem;
    flex-direction: column;
    justify-content: center;

    h1 {
      padding-bottom: 6px;
      white-space: nowrap;
      font-family: ${primaryFont};
      font-size: 1.8rem;
      font-weight: 600;
    }
    
    p {
      font-size: 1.2rem;
      font-family: ${primaryFont};
    }
  }
`
export const CoverImage = styled.img`
  width: 19rem;
  height: 17rem;
  object-fit: cover;
  position: absolute;
  top: -5rem;
  left: -3rem;
`

export const CarouselSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
  overflow: hidden;
`