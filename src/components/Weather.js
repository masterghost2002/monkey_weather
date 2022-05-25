import WeatherCard from "./WeatherCard";
import React, { useCallback } from 'react';
import WeatherData from "./WeatherData";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
export default function Weather() {
  const [useTemp, setTemp] = useState(0);
  const [useCity, setCity] = useState(3099739);
  const url = `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${useCity}?apikey=Uw9BkVdX9esosM8QCKVzJfxuGrv8GC9J`;

            /// this is the normal updateWeather function which cause dependicies error in useEffect 
            // bcs of its complex structrue as its also inlcude url which changes on time
  // const updateWeather = async ()=>{
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   setTemp(parsedData[0].Temperature.Value)
  // }

  // url fetch function with useCallBack to remove the complex dependicies of useEffect
  const updateWeather = useCallback(async () => {
    let data = await fetch(url);
    let parsedData = await data.json();
    setTemp(parsedData[0].Temperature.Value)
  }, [url])

  // handle click funstion to change the city
  const changeState = () => {
    setCity(useCity === 202396 ? 3099739 : 202396);
  }

  // useEffect hooks which runs on the change of url
  useEffect(() => {
    updateWeather();
  }, [url, updateWeather]);
  return (
    <>
      <WeatherCard temp={useTemp} type={WeatherData[0].IconPhrase} />
      <Button onClick={changeState}>changeState</Button>
    </>
  )
}
