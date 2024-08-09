import React, {useState} from 'react';
import {FullInput} from "./fullInput/FullInput";

export const Input = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        console.log(title)
        const newMessage = {
            message: title,
        }
        setMessage([newMessage, ...message])
    }

    return (
        <div className="App">
            <FullInput addMessage={addMessage}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

