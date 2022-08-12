import React, { useState } from 'react';

function UseStateSample () {
    const [ count, setCount]  = useState(0);

    const onClickIncrement = () => {
        setCount(count + 1);
    };

    const onClickDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div className='App'>
            <div>{count}</div> 
            <button onClick={onClickIncrement}>증가</button>
            <button onClick={onClickDecrement}>감소</button>
        </div>
    );
}

export default UseStateSample;