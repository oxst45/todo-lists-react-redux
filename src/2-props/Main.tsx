import React from 'react';

type MainPropsType = {
    isDone: boolean
    text: string
}
export function Main(props: MainPropsType) {
    return (
        <main>
            {props.isDone}
            <p>
                {props.text}
        </p>
            </main>
    )
}