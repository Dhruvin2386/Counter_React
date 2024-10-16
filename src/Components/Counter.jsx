import { useState } from "react";
import './Counter.css'
const Counter = () => {

    const [count, setCount] = useState(0);

    let increment = () => {
        setCount(count + 1)
    }

    let decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        if (count = 0){
            setName('')
        }
    }


    return (
        <div className="design">
            <div className="d-flex">
                <button onClick={decrement}>-</button>
                <h1>Count: {count}</h1>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )

}

export default Counter