import WeatherCard from "./WeatherCard";
import React, { useCallback } from 'react';
import { useEffect, useState } from "react";
export default function Weather(props) {

  // block for useState

  const [useTemp, setTemp] = useState(0);
  const [cityKey, setCityKey] = useState(3099739);

  const [countryName, setcountryName] = useState('India');
  const [timeZone, setTimeZone] = useState("Asia/Kolkata");
  const [dateInfo, setDateInfo] = useState('2022-05-27T15:35:00+05:30');


  // block for api keys and url to fetch

  // const apiKey = "0lOiuGFXOPnlXrGVatvupDjjaGVRdvG2"; // utuber api
  const apiKey = "Uw9BkVdX9esosM8QCKVzJfxuGrv8GC9J"; // my api
  // const apiKey = "";
  const urlTemp = `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
  const urlCityInfo = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${props.cityName}`;


  // block for functions {to make change or fetch api}

  const updateInformation = useCallback(async () => {
    let cityData = await fetch(urlCityInfo);
    let parsedCityData = await cityData.json();

    // setting up the city key {for weather info using api}, country name {from city data}, timeZone {from city data}
    setCityKey(parsedCityData[0].Key);
    setcountryName(parsedCityData[0].Country.LocalizedName);
    setTimeZone(parsedCityData[0].TimeZone.Name);


    let tempData = await fetch(urlTemp);
    let parsedTempData = await tempData.json();

    // setting up the temperature fetched from the tempUrl {the key of the url which denote the city is fetch and set form city data}
    setTemp(parsedTempData[0].Temperature.Metric.Value);
    setDateInfo(parsedTempData[0].LocalObservationDateTime);
    // console.log(parsedTempData[0].LocalObservationDateTime);

  }, [urlTemp, urlCityInfo])


  // useEffect block 
  // useEffect hooks which runs on the change of cityKey updateInformation cityName
  useEffect(() => {
    updateInformation();
  }, [urlTemp, updateInformation, props.cityName]);



  return (
    <>
      <WeatherCard temp={useTemp} cityName={props.cityName} countryName={countryName} timeZone={timeZone} dateInfo = {dateInfo} />
    </>
  )
}
