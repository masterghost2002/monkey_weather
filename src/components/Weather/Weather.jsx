import React, { useState, useEffect,useCallback } from 'react'
import WeatherImg from '../../img/weather.jpg'
import './Weather.css'

export default function Weather() {
    

    const [regionName, setRegionName] = useState('Search Region');
    const [region, setDefaultRegion] = useState('Haryana');
    const [useTemp, setTemp] = useState(0);
    const [cityKey, setCityKey] = useState(3099739);
    const [timeZone, setTimeZone] = useState("Asia/Kolkata");


    // block for api keys and url to fetch
    // const apiKey = "0lOiuGFXOPnlXrGVatvupDjjaGVRdvG2"; // utuber api
    const apiKey = "Uw9BkVdX9esosM8QCKVzJfxuGrv8GC9J"; // my api
    // const apiKey = "";
    const urlTemp = `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
    const urlCityInfo = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${region}`;


    //handle on changes
    function handleOnChange(e) {
        setRegionName(e.target.value);
    }
    const searchWeather = function () {
        setDefaultRegion(regionName);
    }

    


    // block for functions {to make change or fetch api}

    const updateInformation = useCallback(async () => {
        let cityData = await fetch(urlCityInfo);
        let parsedCityData = await cityData.json();

        // setting up the city key {for weather info using api}, country name {from city data}, timeZone {from city data}
        setCityKey(parsedCityData[0].Key);
        setTimeZone(parsedCityData[0].TimeZone.Name);

 
        let tempData = await fetch(urlTemp);
        let parsedTempData = await tempData.json();
        
        // setting up the temperature fetched from the tempUrl {the key of the url which denote the city is fetch and set form city data}
        setTemp(parsedTempData[0].Temperature.Metric.Value);
    }, [urlTemp, urlCityInfo])


    // useEffect block 
    // useEffect hooks which runs on the change of cityKey updateInformation cityName
    useEffect(() => {
        updateInformation();
    }, [updateInformation, region]);


    return (
        <div className="container-fluid my-3">
            <div className="row align-item-center my-5">
                <div className="col-lg-8 w-left mt-lg-5 mb-1">
                    <div className='row  w-row '>
                        <div className="col align-self-center mb-4">
                            <div className='weather-brand'>Monkey-Weather</div><br />
                            <input className='search-bar' placeholder="Search" aria-label="Search" type="text" id="region-name" value={regionName} onChange={handleOnChange} />
                            <button className='search-btn' onClick={searchWeather}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-8 w-right">
                    <div className="card" >
                        <img className="card-img-top" src={WeatherImg} alt="Cardcap" />
                        <div className="card-body">
                            <span className="card-title">Weather of {region}</span>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Temperature: {useTemp}</li>
                            <li className="list-group-item">TimeZone: {timeZone}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
