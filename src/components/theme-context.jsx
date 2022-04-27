import React from  "react";

export const themes={
  dark:{
    background: 'black',
    color:'white',
    paddingTop: '10px',
    text: 'This is a dark theme'
  },

  light:{
    background:'white',
    color:'black',
    paddingTop: '10px',
    text: 'This is a light theme'
  },

  default:{
    background:'gray',
    color:'black',
    paddingTop: '10px',
    text: 'This is a default theme, but you can change it. Click on the button and change theme'
  }

}

export const ThemeContext=React.createContext(themes.default);