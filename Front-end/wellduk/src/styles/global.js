import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'S-CoreDream-3Light';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'S-CoreDream-3Light';
    }

    body {
        background-color: #FFFAF2;
    }

    li {
        list-style: none;
    }

    button {
        border: none;
    }

    input {
        outline: none;
    }
`
export default GlobalStyles
