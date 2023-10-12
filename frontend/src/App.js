import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
  breakpoints: {
    values: {
      sm:0,
      sm2:426,
      md: 768,
      lg: 1024,
      xl: 1300,
    },
  },
});



function App() {

  return (
    
       <div className="App">
       <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </BrowserRouter>
       </ThemeProvider>
       </div>

  );
}

export default App;
