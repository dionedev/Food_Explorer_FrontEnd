import styled from "styled-components";

const primaryFont = 'Poppins, sans-serif';

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    "header header"
    "content content"
    "footer footer"
  ;
`

export const Content = styled.main`
  grid-area: content;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 4.4rem 1.6rem 2.4rem;
`
export const FrontCover = styled.div`
  display: flex;
  align-items: center;
  width: 37.6rem;
  height: 12rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 4px;
  position: relative;
  padding: 0 1rem 0 18rem;
  
  > img {
    width: 22rem;
    height: 15rem;
    position: absolute;
    top: -3rem;
    left: -3rem;
    object-fit: cover;
  }

  > div {

    h1 {
      margin-bottom: 3px;
      white-space: nowrap;
      font-family: ${primaryFont};
      font-size: 1.8rem;
      font-weight: 600;
    }
    
    p {
      font-size: 1.2rem;
      font-weight: 400;
      font-family: ${primaryFont};
    }
  }
`