import styled from "styled-components";

export const Container = styled.div`
  max-width: 43.6rem;
  max-height: 34.1rem;

  > h3 {
    margin-bottom: 2.4rem;
  }
`

export const Slider = styled.div`
  /* width: 100%; */
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1.6rem;
  cursor: grab;
`

export const SliderButton = styled.button`
  background: none;
  border: none;
  
  > svg {
    fill: ${({theme}) => theme.colors.light_100};
  }

  @media (max-width: 767px) {
  
    display: none;
    
  }
`

