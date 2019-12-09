import { createGlobalStyle } from 'styled-components';
import 'react-tabs/style/react-tabs.css';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box
    };

    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;