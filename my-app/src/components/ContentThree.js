import React from "react";

export function ContentThree(props) {

    return ( props.fetcher2.list.map(item => {
            let date = new Date(item.dt*1000);
            let date2 = date.getDate();
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
            let date3 = monthNames[date.getMonth()];
            let pDate = `${date2} ${date3}`;

            let hours = date.getHours();
            if (hours < 10) {
                hours = "0" + hours
            }
            let minutes = date.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            let pTime = `${hours}:${minutes}`;

            let temp = item.main.temp-273.15;
            let pTemp = `Temperature: ${Math.floor(temp)} °`;

            let pRain = item.weather[0].main;

            let feelsLike = item.main.feels_like-273.15;
            let feelsTemp = `Feels like: ${Math.floor(feelsLike)} °`;

            let Background = '';
            if (item.weather[0].id === 800) {
                Background = 'url(https://openweathermap.org/img/wn/01d@2x.png)';
            } else if (item.weather[0].id === 801) {
                Background = 'url(https://openweathermap.org/img/wn/02d@2x.png)';
            } else if (item.weather[0].id === 802) {
                Background = 'url(https://openweathermap.org/img/wn/03d@2x.png)';
            } else if (item.weather[0].id === 803 || item.weather[0].id === 804) {
                Background = 'url(https://openweathermap.org/img/wn/04d@2x.png)';
            } else if (item.weather[0].id > 199 && item.weather[0].id < 233) {
                Background = 'url(https://openweathermap.org/img/wn/11d@2x.png)';
            } else if (item.weather[0].id > 299 && item.weather[0].id < 322) {
                Background = 'url(https://openweathermap.org/img/wn/09d@2x.png)';
            } else if (item.weather[0].id > 499 && item.weather[0].id < 505) {
                Background = 'url(https://openweathermap.org/img/wn/10d@2x.png)';
            } else if (item.weather[0].id === 511) {
                Background = 'url(https://openweathermap.org/img/wn/13d@2x.png)';
            } else if (item.weather[0].id > 519 && item.weather[0].id < 532) {
                Background = 'url(https://openweathermap.org/img/wn/09d@2x.png)';
            } else if (item.weather[0].id > 599 && item.weather[0].id < 623) {
                Background = 'url(https://openweathermap.org/img/wn/09d@2x.png)';
            } else if (item.weather[0].id > 700 && item.weather[0].id < 782) {
                Background = 'url(https://openweathermap.org/img/wn/50d@2x.png)';
            }

            return (
                <ContentThreeFinish
                    pDate = {pDate}
                    pTime = {pTime}
                    pTemp = {pTemp}
                    pRain = {pRain}
                    feelsTemp = {feelsTemp}
                    background = {Background}
                    premission = {props.premission}
                />
            )
        })
    );



}

function ContentThreeFinish(props) {

    if  (!props.premission) return null;

    return(
        <div className="content_3" id="active">
            <div className="forecast">
                <p className="Date">{props.pDate}</p>
                <p className="Time">{props.pTime}</p>
                <p className="temp">{props.pTemp}</p>
                <p className="rain">{props.pRain}</p>
                <p className="feelsTemp">{props.feelsTemp}</p>
                <div className="thisCloud" style={{backgroundImage: props.background}}/>
            </div>
        </div>
    );


}