import React, {ChangeEvent} from 'react';


type FullInputProps = {
    addMessage: (title: string) => void
}
export const FullInput = (props: FullInputProps) => {
    const [title, setTitle] = React.useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input
                value={title}
                onChange={onChangeInputHandler}
            />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

