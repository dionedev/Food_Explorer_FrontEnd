import styled from "styled-components"
import { Button } from "../Button"
import { LinkButton } from "../LinkButton"

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  background-color: ${({theme}) => theme.colors.dark_200};
  border-radius: 8px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 2.4rem;
  gap: 1.2rem;

  > span {
    color: ${({theme}) => theme.colors.cake_200};
  }
`

export const FavoriteButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  background: none;
  border: none;
  font-size: 3rem;

  > svg {
    fill: ${({theme}) => theme.colors.light_300};
  }
`

export const CustomLinkButton = styled(LinkButton)`
  > a {
    color: ${({theme}) => theme.colors.light_300};
  }
`

export const PlateCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > button {
    display: flex;
    background: none;
    border: none;
    font-size: 3rem;
    align-items: center;

    svg {
      fill: ${({theme}) => theme.colors.light_300};
    }

  }

  > span {
    color: ${({theme}) => theme.colors.light_300};
  }
`

export const ButtonInclude = styled(Button)`
  width: 16.2rem;
  height: 3.2rem;
  margin-top: 4px;
`
