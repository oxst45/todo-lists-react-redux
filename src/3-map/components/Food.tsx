import React from "react";

type FoodPropsType = {
    title: string
    isDone: boolean
}

export function Food(props: FoodPropsType) {
    const showBuy: "bought" | "-----" = props.isDone ? "bought" : "-----";
    return (
        <div>
            {props.title}: {showBuy};
        </div>
    )
}