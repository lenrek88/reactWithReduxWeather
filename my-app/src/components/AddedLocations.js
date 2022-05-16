import React, {useState} from "react";
import {changeCurrentValue} from "../store/action";
import {useDispatch, useSelector} from "react-redux";

export function AddedLocations(props) {

    function handlerDelete(pr) {
        props.handlerDelete(pr)
    }

    const liked = useSelector(state => state.liked)

    if (liked.length > 0) {
        return (


            liked.map((item) => {
                return (
                    <AddedLocationsReturn
                        item={item}
                        handlerDelete={handlerDelete}
                        delCity={props.delCity}
                    />
                )}
            )

        )} else {
        return (
            <></>
        )
    }
}

function AddedLocationsReturn(props) {

    const dispatch = useDispatch();
    const setCurrentValue = (pr) => dispatch(changeCurrentValue((pr)));


    function handlerClick() {
        setCurrentValue(props.item)
    }

    function handlerDelete() {
        props.handlerDelete(props.item)
        props.delCity(props.item)
    }

    return (


        <div className="cityLike" >
            <h2 onClick={handlerClick}>{props.item}</h2>
            <button onClick={handlerDelete} className="delete"/>
        </div>


    )
}