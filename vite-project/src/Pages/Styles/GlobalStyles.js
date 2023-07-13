import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inria+Sans:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #15364D;
    font-family: 'Inria Sans', sans-serif;
    color  :#FCF897 ;
  }

 
  .container {
    max-width: 1200px;
    margin: 0 auto;
    
  }

 
`;

export default GlobalStyle;
