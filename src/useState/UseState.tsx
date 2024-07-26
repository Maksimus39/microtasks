import React, {useState} from 'react';

export const UseState = () => {

    let startValue = 0
    let [state, setState] = useState<number>(startValue)

    const onClickHandler = () => {
        setState(++state)
    }

    const onResetHandler = () => {
        setState(startValue)
    }


    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickHandler}>Increment value</button>
            <button onClick={onResetHandler}>Reset value</button>
        </div>
    );
};

