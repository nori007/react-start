import React, { useState, useEffect } from 'react';

function UseEffectSample () {
    const [ count, setCount]  = useState(0);

    useEffect(() => {
        document.title = `업데이트 횟수: ${count}`;
    })

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

export default UseEffectSample;