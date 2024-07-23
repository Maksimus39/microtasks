import React from 'react';
import {UniversalButton} from "./universalButton/UniversalButton";

export const Button = () => {

    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button3Foo = () => {
        console.log('Я ТУПАЯ КНОПКА')
    }
    return (
        <div>
            <UniversalButton name={'myYouTubeChannel-1'} callback={() => Button1Foo('Max', 41)}/>
            <UniversalButton name={'myYouTubeChannel-2'} callback={() => Button2Foo('Larisa', 38)}/>
            <UniversalButton name={'myYouTubeChannel-3'} callback={Button3Foo}/>
        </div>
    );
};

