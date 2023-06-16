import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark_700};
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  > div {
    display: flex;
    height: 7.7rem;
    justify-content: center;
    align-items: center;
    gap: 6px;

      
    svg {
      fill: ${({ theme }) => theme.colors.light_500};
    }
    
    h3 {
      white-space: nowrap;
      font-size: clamp(1.4rem, 3vw, 2.4rem);
      font-weight: 700;
      color: ${({ theme }) => theme.colors.light_500};
    }
  }

  span {
    font-size: clamp(1.1rem, 3vw, 1.4rem);
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.light_200};
  }

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`