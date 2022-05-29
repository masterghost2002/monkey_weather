import React, { useState } from 'react'
import NavBar from './components/NavBar';
import Weather from './components/Weather';
import Box from '@mui/material/Box'
function App() {

  // useState block    --> write use state hereonly

  const [cityName, setCityName] = useState("Haryana");

  // function block
  const handleOnChange = (event) => {
    const cname = event.target.value;
    setCityName(cname);
  }

  return (
    <>
    <div
      style={{ 
        backgroundImage: `url("https://raw.githubusercontent.com/masterghost2002/monkey_weather/master/src/components/assets/Day.png")`,
        width: "100%",
        height: "100%",
      }}
    >
      <NavBar handleOnChange={handleOnChange} />
      <Box m = {1} p = {8}>
        <Weather cityName={cityName} />
      </Box>
      </div>
    </>
  );
}

export default App;
