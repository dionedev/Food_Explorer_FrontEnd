import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark_400};
    color: ${({ theme }) => theme.colors.light_100};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  h1, h2, legend, button, a {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  button, a {
    cursor: pointer;
    transition: filter(0.2s);
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`