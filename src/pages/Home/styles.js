import styled from "styled-components";

const primaryFont = 'Poppins, sans-serif';

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    "header header"
    "content content"
    "footer footer"
  ;
`

export const Content = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  max-width: 42.8rem;
  padding: 4.4rem 1.6rem 2.4rem;
  align-items: center;
`


export const CoverSection = styled.section`
  display: flex;
  width: 100%;
  height: 12rem;
  justify-content: end;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 4px;
  position: relative;

  > div {
    display: flex;
    width: 21.5rem;
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
  position: absolute;
  top: -5rem;
  left: -3rem;
  object-fit: cover;
`

export const CarouselSection = styled.section`
  display: grid;
  gap: 2rem;
`