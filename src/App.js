import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'

// components

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
   
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});



const App = () => {
  
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
        <div>
          Hello  
        </div> 
        </MuiThemeProvider>
      </div>

    )
}

export default App;
