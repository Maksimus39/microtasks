import React from 'react';

type UniversalButtonProps = {
    name: string
    callback: () => void
}
export const UniversalButton = (props: UniversalButtonProps) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

