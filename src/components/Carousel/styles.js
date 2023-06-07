import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 43.6rem;

  > h3 {
    margin-bottom: 2.4rem;
  }
`

export const Slider = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  gap: 1.6rem;
  cursor: grab;

  ::-webkit-scrollbar {
    display: none;
  }
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

