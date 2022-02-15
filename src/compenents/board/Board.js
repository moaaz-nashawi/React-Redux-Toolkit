import React from "react";

import { useSelector } from "react-redux";

import Reducer from "../reducer/Reducer";


export default function Board() {

    const counter = useSelector((state) => state.counter.value);


    return (

        <div>
            <h1>Score Table</h1>
            your score is {counter}
            <Reducer />
        </div>

    )


}