import { useReducer } from "react";

const initialState = {
    count: 0,
}

function reducer(state, action) {
    if (action.type === "INCREMENT") {
        return {
            count: state.count  + action.amount,
        }
    }
    if (action.type === "DECREMENT") {
        return {
            count: state.count - action.amount,
        }
    }
    return state;

}

function Counter() {
    const [state,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:"INCREMENT",amount:5})}>(+) count</button> <br />
            <button onClick={()=>dispatch({type:"DECREMENT",amount:5})}>(-) count</button>
        </div>
    );
}

export default Counter;