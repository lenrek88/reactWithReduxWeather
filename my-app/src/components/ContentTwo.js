import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export function ContentTwo(props) {
    const [temp,setTemp] = useState(37);
    const currentValue = useSelector(state => state.currentValue)
    const [feels_like,setFeels_like] = useState('');
    const [weather,setWeather] = useState('');
    const [sunriseHours,setSunriseHours] = useState('');
    const [sunsetHours,setSunsetHours] = useState('');
    const [sunriseMinutes,setSunriseMinutes] = useState('');
    const [sunsetMinutes,setSunsetMinutes] = useState('');

    useEffect(() => {
        let inf = props.fetcher;
        setTemp(inf.main.temp-273.15);
        setFeels_like(inf.main.feels_like-273.15);
        setWeather(inf.weather[0].main);
        setSunriseHours((new Date(inf.sys.sunrise*1000)).getHours() < 10 ? "0" + (new Date(inf.sys.sunrise*1000)).getHours() : (new Date(inf.sys.sunrise*1000)).getHours());
        setSunsetHours((new Date(inf.sys.sunset*1000)).getHours() < 10 ? "0" + (new Date(inf.sys.sunset*1000)).getHours() : (new Date(inf.sys.sunset*1000)).getHours());
        setSunriseMinutes((new Date(inf.sys.sunrise*1000)).getMinutes() < 10 ? "0" + (new Date(inf.sys.sunrise*1000)).getMinutes() : (new Date(inf.sys.sunrise*1000)).getMinutes());
        setSunsetMinutes((new Date(inf.sys.sunset*1000)).getMinutes() < 10 ? "0" + (new Date(inf.sys.sunset*1000)).getMinutes() : (new Date(inf.sys.sunset*1000)).getMinutes());
    }, [props.fetcher])



    if  (!props.premission) return null;

    return (
        <div className="content_2" id="active">
            <p className="detailsCity">{currentValue}</p>
            <br/>
            <p className="detailsTemp">Temperature: {Math.floor(temp)}°<br/>
                Feels like: {Math.floor(feels_like)} °<br/>
                Weather: {weather}<br/>
                Sunrise: {sunriseHours}:{sunriseMinutes}<br/>
                Sunset: {sunsetHours}:{sunsetMinutes}</p>
        </div>
    );
}