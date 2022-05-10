import React from 'react';


type HeaderPropsType = {
    title: string
    text: string
}



export function Header(props: HeaderPropsType) {
    console.log(props);
    return (
        <header>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </header>
    )
}