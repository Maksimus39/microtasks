import {useState} from "react";
import {NewComponent} from "./NewComponent";

export type MoneyTypes = "all" | "dollar" | "ruble"

export function Filter() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])
    const [filtered, setFiltered] = useState<MoneyTypes>("all")


    let currentMoney = money
    if (filtered === "dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollar")
    }
    if (filtered === "ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "ruble")
    }

    const onClickFilterHandler = (nominal: MoneyTypes) => {
        console.log(nominal)
        setFiltered(nominal)
    }

    return (
        <div>
            <NewComponent
                currentMoney={currentMoney}
                onClickFilterHandler={onClickFilterHandler}
            />
        </div>
    );
}