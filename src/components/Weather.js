import WeatherCard from "./WeatherCard";
import React from 'react';
import WeatherData from "./WeatherData";
export default function Weather() { 
  return (
      <>
      <WeatherCard temp = {WeatherData[0].Temperature.Value} type = {WeatherData[0].IconPhrase}/>
      </>
  )
}
