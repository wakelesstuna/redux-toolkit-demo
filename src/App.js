import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount, decrementByAmount} from "./redux/counter";

function App() {
    const {value} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>The count is: {value}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>increment by 10</button>
            <button onClick={() => dispatch(decrementByAmount(10))}>decrement by 10</button>
        </div>
    );
}

export default App;
