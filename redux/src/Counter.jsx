import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset , incrementByAmount } from "./redux/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())} style={{ margin: "0 10px" }}>-</button>
            <button onClick={() => dispatch(reset())} style={{ margin: "0 10px" }}>Reset</button>
            <button onClick={() => dispatch(incrementByAmount(6))}>incrementByAmount</button>
        </div>
    );
};

export default Counter;
