import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  
  > h3 {
    margin-bottom: 2.4rem;
  }
`

export const Slider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  scroll-behavior: smooth;
  gap: 1.6rem;
  cursor: grab;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const SliderButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;

  color: ${({ theme }) => theme.colors.light_100};
  cursor: pointer;
  z-index: 1;

  > svg {
    fill: ${({ theme }) => theme.colors.light_100};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const LeftSliderButton = styled(SliderButton)`
  left: 2rem;
`

export const RightSliderButton = styled(SliderButton)`
  right: 2rem;
`