import React,{useState,useReducer} from 'react'
import { counterInitialState,counterReducer } from '../reducers/counter.reducer'
import { INCREMENT,DECREMENT } from '../actions/counter.actions'

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer,counterInitialState)
    const incrementAction = {
        type: INCREMENT,
        payload:1
    }
    const decrementAction = {
        type: DECREMENT,
        payload:1
    }
    return (
        <div>
            <h1>Counter : {state.counter}</h1>
            <button onClick = {()=>dispatch(incrementAction)}>+</button>
            <button onClick = {()=> dispatch(decrementAction)}>-</button>
        </div>
    );
}

export default Counter;
