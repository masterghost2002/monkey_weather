import WeatherCard from "./WeatherCard";
import React, { useCallback } from 'react';
import { useEffect, useState } from "react";
export default function Weather(props) {
  // const apiKey = "0lOiuGFXOPnlXrGVatvupDjjaGVRdvG2";
  const apiKey = "Uw9BkVdX9esosM8QCKVzJfxuGrv8GC9J";
  const [useTemp, setTemp] = useState(0);
  const [cityKey, setCityKey] = useState(3099739);

  const [countryName, setcountryName] = useState('India');
  const [timeZone, setTimeZone] = useState("Asia/Kolkata");

  const urlTemp = `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
  const urlCityInfo = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${props.cityName}`;


  // url fetch function with useCallBack to remove the complex dependicies of useEffect

  const updateWeather = useCallback(async () => {
    let cityData = await fetch(urlCityInfo);
    let parsedCityData = await cityData.json();
    setCityKey(parsedCityData[0].Key);
    setcountryName(parsedCityData[0].Country.LocalizedName);
    setTimeZone(parsedCityData[0].TimeZone.Name);


    let tempData = await fetch(urlTemp);
    let parsedTempData = await tempData.json();
    setTemp(parsedTempData[0].Temperature.Metric.Value);
    console.log(parsedCityData);
  }, [urlTemp, urlCityInfo])

  
  // useEffect hooks which runs on the change of url
  useEffect(() => {
    updateWeather();
  }, [urlTemp, updateWeather, props.cityName]);
  return (
    <>
      <WeatherCard temp={useTemp}  cityName = {props.cityName} countryName = {countryName} timeZone = {timeZone}/>
    </>
  )
}
