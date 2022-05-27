import React, {useState} from 'react'
import NavBar from './components/NavBar';
import Weather from './components/Weather';
function App() {
  const [cityName, setCityName] = useState("Haryana");
  const handleOnChange = (event)=>{
    const cname = event.target.value;
    setCityName(cname);
  }
  return (
    <>
    <NavBar handleOnChange = {handleOnChange}/>
    <Weather cityName={cityName}/>
    </>
  );
}

export default App;
