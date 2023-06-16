import styled from "styled-components";

const primaryFont = 'Poppins, sans-serif';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`
 
export const Content = styled.main`
  display: flex;
  width: 100%;
  min-width: 42.8rem;
  max-width: 130rem;
  flex-direction: column;
  align-items: center;
  padding: 5.5rem 2.4rem 1.6rem;
  
  @media (min-width: 768px) {
    padding: 5.5rem 3rem 1.6rem;
  }
`

export const CoverSection = styled.section`
  display: flex;
  width: 100%;
  height: 12rem;
  justify-content: center;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 4px;
  position: relative;
  margin-bottom: 6.2rem;

  > div {
    display: flex;
    width: 100%;
    max-width: 57.4rem;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem 0 16rem;

    h1 {
      padding-bottom: 6px;
      white-space: nowrap;
      font-family: ${primaryFont};
      font-size: clamp(1.6rem, 4.5vw, 2.5rem);
      font-weight: 600;
    }
    
    p {
      font-size: clamp(1rem, 3vw, 1.6rem);
      font-family: ${primaryFont};
    }
  }

  @media (min-width: 768px) {
    height: 26rem;
    padding-left: 34rem;

    > div {
      max-width: 60rem;
      padding: 1rem;

      h1 {
        padding-bottom: 8px;
        white-space: nowrap;
        font-family: ${primaryFont};
        font-size: clamp(3rem, 4vw, 5rem);
        font-weight: 600;
      }
      
      p {
        font-size: clamp(1rem, 2vw, 1.8rem);
        font-family: ${primaryFont};
      }
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

  @media (min-width: 768px) {
    width: 63.2rem;
    height: 35rem;
    object-fit: contain;
    position: absolute;
    top: -9rem;
    left: -16rem;
  }
`

export const CarouselSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
  overflow: hidden;
`