import {useDispatch, useSelector} from "react-redux";
import {changeCurrentValue, changeLiked} from "../store/action";
import React, {useEffect, useState} from "react";

export function ContentOne(props) {

    const dispatch = useDispatch()
    const setLiked = (pr) => dispatch(changeLiked((pr)))

    const currentValue = useSelector(state => state.currentValue)
    const liked = useSelector(state => state.liked)


    const [background,setBackground] = useState('');
    const [backgroundLike,setBackgroundLike] = useState('');
    const [temp,setTemp] = useState(37);
    const [deleteCity, setDeleteCity] = useState(props.deleteCity);


    useEffect(() => {
        let inf = props.fetcher
        setTemp(inf.main.temp-273.15);
        if (inf.weather[0].id === 800) {
            setBackground('url(https://openweathermap.org/img/wn/01d@2x.png)');
        } else if (inf.weather[0].id === 801) {
            setBackground('url(https://openweathermap.org/img/wn/02d@2x.png)');
        } else if (inf.weather[0].id === 802) {
            setBackground('url(https://openweathermap.org/img/wn/03d@2x.png)');
        } else if (inf.weather[0].id === 803 || inf.weather[0].id === 804) {
            setBackground('url(https://openweathermap.org/img/wn/04d@2x.png)');
        } else if (inf.weather[0].id > 199 && inf.weather[0].id < 233) {
            setBackground('url(https://openweathermap.org/img/wn/11d@2x.png)');
        } else if (inf.weather[0].id > 299 && inf.weather[0].id < 322) {
            setBackground('url(https://openweathermap.org/img/wn/09d@2x.png)');
        } else if (inf.weather[0].id > 499 && inf.weather[0].id < 505) {
            setBackground('url(https://openweathermap.org/img/wn/10d@2x.png)');
        } else if (inf.weather[0].id === 511) {
            setBackground('url(https://openweathermap.org/img/wn/13d@2x.png)');
        } else if (inf.weather[0].id > 519 && inf.weather[0].id < 532) {
            setBackground('url(https://openweathermap.org/img/wn/09d@2x.png)');
        } else if (inf.weather[0].id > 599 && inf.weather[0].id < 623) {
            setBackground('url(https://openweathermap.org/img/wn/09d@2x.png)');
        } else if (inf.weather[0].id > 700 && inf.weather[0].id < 782) {
            setBackground('url(https://openweathermap.org/img/wn/50d@2x.png)');
        }
        setDeleteCity(props.deleteCity)
    }, [props.fetcher])

    useEffect(() => {
        if (props.likedToGray === true) {
            setBackgroundLike('likeRed')

        } else {
            setBackgroundLike('like')

        }
    }, [liked])

    useEffect(() => {
        if (props.likedToGray === true) {
            setBackgroundLike('likeRed')

        } else {
            setBackgroundLike('like')

        }
    })

    function handlerLikeButton() {
        if (!liked.includes(currentValue, 0)) {
            setLiked([...liked, currentValue])
        } else {
            alert('Данный город уже присутствует в избранном!')
        }
    }

    if  (!props.premission) return null;

    return (
        <div className="content_1" id="active">
            <h1 className="thisTemp">{`${Math.floor(temp)} \t°`}</h1>

            <div className="cloud" style={{backgroundImage: background}}/>

            <div className="city-like">
                <h2 className="thisCity">{currentValue}</h2>
                <button className={backgroundLike} onClick={handlerLikeButton}/>
            </div>
        </div>
    );
}