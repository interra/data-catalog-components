import 'bootstrap/dist/css/bootstrap.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import defaultTheme from './default'


const GlobalStyles = createGlobalStyle`
  @import url('http://fonts.googleapis.com/css?family=Rubik:300,500,700&amp;subset=latin');
  @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  html {
    /*Convert font size to base 10 for easier calculations (1rem = 10px)*/
    font-size: 62.5%;
  }
  body {
    background-color: ${defaultTheme.backgroundColor};
    color: ${defaultTheme.textColor};
    font-weight: 300;
    font-size: 1.6rem;
    font-family: 'Rubik', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    a, input, button, textarea {
      transition: all 0.2s linear;
    }
    h1,h2,h3,h4,h5 { color: ${defaultTheme.headingColor}; }
    h1 { font-size: 3.0rem }  // 30px
    h2 { font-size: 2.4rem; } // 24px
    h3 { font-size: 2.0rem; } // 20px

    .container-fluid {
      padding-left: 25px;
      padding-right: 25px;
    }
    table {
      background-color: white;
    }
    .table-bordered td,
    .table-bordered th {
      border-color: ${defaultTheme.borderColor};
    }

  }
`;
export default GlobalStyles;
