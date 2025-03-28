import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset , incrementByAmount} from "./redux/counterSlice";
import { fetchProducts } from "./redux/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const {products, loading , error} = useSelector((state)=> state.products);

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch])


    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())} style={{ margin: "0 10px" }}>-</button>
            <button onClick={() => dispatch(reset())} style={{ margin: "0 10px" }}>Reset</button>
            <button onClick={() => dispatch(incrementByAmount(6))}>incrementByAmount</button>

            <div>
                <h2>Product Listing</h2>
                {
                    loading && <p>Loading Data...</p>
                }
                 {
                    error && <p>Error : {error}</p>
                }
                    <ul>
                {
                
                    products.map((item, index)=>{
                        return <li key = {item.id}>
                            {item.title}
                        </li>

                    })
                  
                }
                </ul>
            </div>
        </div>
    );
};

export default Counter;
