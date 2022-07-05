import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Weather from './components/Weather';
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material';
function App() {

  // useState block    --> write use state hereonly

  const [cityName, setCityName] = useState("Haryana");

  // function block
  const handleOnChange = (event) => {
    const cname = event.target.value;
    setCityName(cname);
  }
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar handleOnChange={handleOnChange} mode={mode} setMode={setMode}/>
        <Weather cityName={cityName} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
