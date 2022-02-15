import React from "react";
import { useDispatch } from 'react-redux'
import { increment, decrement } from "../../features/counter/counterSlice";




export default function Board() {

    const dispatch = useDispatch();


    return (

        <div>
            <button
                onClick={() => dispatch(decrement())}
            >Decrement</button>
            <button
                onClick={() => dispatch(increment())}
            >increment</button>

        </div>

    )


}