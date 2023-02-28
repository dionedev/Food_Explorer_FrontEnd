import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.light_100};
    font-size: 1.4rem;
  }
`