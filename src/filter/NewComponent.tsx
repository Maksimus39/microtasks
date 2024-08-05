import React from 'react';
import {MoneyTypes} from "./Filter";

type NewComponentProps = {
    currentMoney: any
    onClickFilterHandler: (nominal: MoneyTypes) => void
}
export const NewComponent = (props: NewComponentProps) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr: any) => {
                    return (
                        <li>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}

                <div>
                    <button onClick={() => props.onClickFilterHandler("all")}>All</button>
                    <button onClick={() => props.onClickFilterHandler("ruble")}>Ruble</button>
                    <button onClick={() => props.onClickFilterHandler("dollar")}>Dollar</button>
                </div>
            </ul>
        </>
    );
};

