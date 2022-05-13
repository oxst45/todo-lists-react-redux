import React from 'react';
import {Food} from "./components/Food";

type ShoppingListType = Array<FoodType>;

type FoodType = {
    id: number
    title: string
    isDone: boolean
}

const shoppingList: ShoppingListType = [
    {id: 1, title: 'Bread', isDone: false},
    {id: 2, title: 'Milk', isDone: true},
    {id: 3, title: 'Sugar', isDone: true},
    {id: 4, title: 'Salt', isDone: false},
    {id: 5, title: 'Eggs', isDone: true}
]

export function App3() {
    const foodList = shoppingList.map((foodItem) => {
        return (
            <li key={foodItem.id}>
                <Food title={foodItem.title} isDone={foodItem.isDone}/>
            </li>
        )
    });
    return (
        <div>
            <h3>
                Shopping list
            </h3>
            <ul>
                {/*<li>*/}
                {/*    <Food title={shoppingList[0].title} isDone={shoppingList[0].isDone}/>*/}
                {/*</li>*/}
                {foodList}
            </ul>
        </div>
    );
}

