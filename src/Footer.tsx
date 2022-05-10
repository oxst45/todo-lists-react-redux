import React from 'react';


type FooterPropsType = {
    title: string
    date: Date
}
export function Footer(props: FooterPropsType) {
    return (
        <footer>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
        </footer>
    );
}


