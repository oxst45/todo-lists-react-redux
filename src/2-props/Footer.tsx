import React from 'react';


type FooterPropsType = {
    title: string
    date: Date
}
export function Footer(props: FooterPropsType) {

    let stringDate = props.date.getDate() + "." + (props.date.getMonth() + 1)  + "." + props.date.getFullYear();
    return (
        <footer>
            <h3>{props.title}</h3>
            <p>{stringDate}</p>
        </footer>
    );
}


