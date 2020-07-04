import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
  }

  a {
    color: ${props => props.theme.links};
  }

  h4,
  h3,
  h2,
  h1 {
    color: ${props => props.theme.onBackground};
    opacity: ${props => props.theme.headerOpacity};
  }

  .footerLinks, p {
    color: ${props => props.theme.onBackground};
    opacity: ${props => props.theme.textOpacity};
  }
`

export default GlobalStyles
