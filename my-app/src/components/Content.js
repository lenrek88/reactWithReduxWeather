import {useDispatch, useSelector} from "react-redux";
import {changeCurrentValue, changeLiked} from "../store/action";
import React, {useEffect, useState} from "react";
import {SearchForm} from "./SearchForm";
import {Tabs} from "./Tabs";
import {AddedLocations} from "./AddedLocations";

const SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const SERVER_URL2 = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';

export function Content() {

    const dispatch = useDispatch()

    const setCurrentValue = (pr) => dispatch(changeCurrentValue((pr)))
    const setLiked = (pr) => dispatch(changeLiked((pr)))

    const currentValue = useSelector(state => state.currentValue)
    const liked = useSelector(state => state.liked)

    const [likedToGray, setLikedToGray] = useState(false);
    const [deleteCity, setDeleteCity] = useState("");

    const [fetcher, setFetcher] = useState(null);           // результат запроса API
    const [fetcher2, setFetcher2] = useState(null);         // результат запроса API
    const [isloaded, setIsloaded] = useState(false);        // результат запроса API
    const [isloaded2, setIsloaded2] = useState(false);      // результат запроса API
    const [error, setError] = useState('');                 // результат запроса API


    function handlerDelete(pr) {
        setDeleteCity(pr)
    }

    useEffect(() => {
        setLiked(JSON.parse(localStorage.getItem('FavoriteCity')))
        setCurrentValue(localStorage.getItem('ThisCity'))
    }, [])

    useEffect(() => {
        localStorage.setItem('FavoriteCity', JSON.stringify(liked))
    }, [liked])

    useEffect(() => {
        localStorage.setItem('ThisCity', (currentValue))
    }, [currentValue])


    useEffect(() => {

        const url = `${SERVER_URL}?q=${currentValue}&appid=${API_KEY}`;
        const url2 = `${SERVER_URL2}?q=${currentValue}&appid=${API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                    setFetcher(result)
                    setIsloaded(true)
                }, (error) => {
                    setError(error)
                    setIsloaded(true)
                }
            )
        fetch(url2)
            .then(response => response.json())
            .then((result) => {
                    setFetcher2(result)
                    setIsloaded2(true)
                }, (error) => {
                    setError(error)
                    setIsloaded2(true)
                }
            )


        setLikedToGray(liked.includes(currentValue, 0))
    }, [currentValue])


    useEffect(() => {
        setLikedToGray(liked.includes(currentValue, 0))
    }, [liked])


    function delCity(pr) {
        let newLiked = []
        liked.map(item => {
            if (item !== pr) {
                newLiked = [...newLiked, item]
            }
        })
        setLiked(newLiked)
    }





    if (error) {
        return <p> Error {error}</p>
    } else if (!isloaded || !isloaded2) {
        return <p>Loading ...</p>
    } else {
        return (
            <div className="weather" >
                <SearchForm/>
                <Tabs deleteCity={deleteCity} likedToGray={likedToGray}  currentValue={currentValue} isloaded={isloaded} isloaded2={isloaded2} fetcher={fetcher} fetcher2={fetcher2}/>
                <div className="added-locations">
                    Added Locations:
                </div>
                <div className="locations">
                    <AddedLocations delCity={delCity} handlerDelete={handlerDelete} />
                </div>

            </div>
        );
    }

}