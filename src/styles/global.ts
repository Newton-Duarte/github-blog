import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  a {
    text-decoration: none;

    &.link {
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      text-decoration: none;

      display: flex;
      gap: 0.5rem;

      &:not(:disabled):hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }
`
