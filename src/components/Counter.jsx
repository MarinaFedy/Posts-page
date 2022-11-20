import React, {useState} from 'react';

const Counter = function (){

    const [count, setCounter] = useState(0)
    const plus = () => setCounter(count +1)
    const minus = () => setCounter(count - 1)

    return (
        <div>
            <button onClick={() => plus()}>+</button>
            <h1>{count}</h1>
            <button onClick={() => minus()}>-</button>

        </div>
    )

}

export default Counter;