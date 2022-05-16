import React, {useState} from "react";
import {ContentOne} from "./ContentOne";
import {ContentTwo} from "./ContentTwo";
import {ContentThree} from "./ContentThree";
import {useSelector} from "react-redux";

export function Tabs(props) {

    const [active,setActive] = useState("tab-btn-1");
    const currentValue = useSelector(state => state.currentValue)



    function handlerClick(e) {
        setActive(e.target.id);
    }

    return (
        <div className="tabs">
            <div className="tabs_info">
                <ContentOne  deleteCity={props.deleteCity} likedToGray={props.likedToGray} premission={active === "tab-btn-1"} isloaded={props.isloaded} fetcher={props.fetcher} value={props.value} />
                <ContentTwo premission={active === "tab-btn-2"} isloaded={props.isloaded} fetcher={props.fetcher} />
                <p className="detailsCity2">{currentValue}</p>
                <ContentThree premission={active === "tab-btn-3"} isloaded2={props.isloaded2} fetcher2={props.fetcher2} />
            </div>
            <div className="inputRadio">
                <input  type="radio" name="tab-btn" id="tab-btn-1" onClick={handlerClick}  checked={active === "tab-btn-1"}/>
                <label htmlFor="tab-btn-1">Now</label>
                <input type="radio" name="tab-btn" id="tab-btn-2" onClick={handlerClick} checked={active === "tab-btn-2"}/>
                <label htmlFor="tab-btn-2">Details</label>
                <input type="radio" name="tab-btn" id="tab-btn-3" onClick={handlerClick} checked={active === "tab-btn-3"}/>
                <label htmlFor="tab-btn-3" id="right">Forecast</label>
            </div>
        </div>
    );
}