import React, {useState} from 'react'
import NavBar from './components/NavBar';
import Weather from './components/Weather';
function App() {
  const [cityName, setCityName] = useState('Haryana');
  const handleOnChange = (event)=>{
    setCityName(event.target.value);
  }
  return (
    <>
    <NavBar city = {cityName} handleOnChange = {handleOnChange}/>
    <Weather cityName={cityName}/>
    </>
  );
}

export default App;
