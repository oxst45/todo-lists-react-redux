import React, {useState} from 'react';
import './Counter.css';



export function Counter() {
    // let count: number = 0;

    // const arrState = useState(0);
    // let count = arrState[0];
    // let setCount = arrState[1];

    const [count, setCount] = useState(0);
    // count - переменная, которая хранит состояние (значение);
    // setCount - функция, которая меняет состояние на новое и перерисовывает компоненту;

    // Если count - сделать состоянием компоненты, то при изменении count, компонента перерисуется

    // Как сделать его состоянием компоненты? useState
    // Как менять это состояние? setCount

    const onClickHandler = (btnName: 'add' | 'sub') => {
        if (btnName === 'add') {
            setCount(count + 1);
        }
        if (btnName === 'sub') {
            setCount(count - 1);
        }
        // Необходимо заставить React по клику перерисовать компоненту Counter
    }

    return (
        <div className={'counter'}>
            <div>{count}</div>
            <div>
                <button onClick={ () => {onClickHandler('add')} }>Add + 1</button>
            </div>
            <div>
                <button onClick={ () => {onClickHandler('sub')} }>Sub - 1</button>
            </div>
            <div>
            {/*    Реализовать кнопку, которая увеличивает/уменьшает counter на случайное число от 10 вкл до 10 вкл. */}
            </div>
        </div>
    );
}

// 1 - number
// 2 - string
// 3 - Array<number>
// 4 - Array<string>
// 5 - "jsx" (Теги, компоненты)
// 6 - Array<"jsx">