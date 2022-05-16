import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentValue, changeLiked} from "../store/action";

export function SearchForm(props) {

    const dispatch = useDispatch()
    const setCurrentValue = (pr) => dispatch(changeCurrentValue((pr)))

    const [value,setValue] = useState('')

    function changeInput(e) {
        setValue(e.target.value)
    }

    function handlerSearch(e) {
        e.preventDefault();
        setCurrentValue(value)
    }

    return (
        <div className="search">
            <form className="text" >
                <input type="text" value={value} onChange={changeInput}/>
                <button className="searchBtn" onClick={handlerSearch}/>
            </form>
        </div>
    );
}