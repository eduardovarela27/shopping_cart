import React from 'react';
import '../styles/card.css';

export const Card = ({ props }) => {
    const { name, description, image_url } = props;
    const index = description.indexOf(".");
    const desc = description.substring(0,index);

    const handleOnClick = (e) => {
        console.log(props.id);
    }
    return (
        <div className="card" key={props.id}>
            <h3>{name}</h3>
            <img src={image_url} alt={name} />
            <p>{desc}</p>
            <button className="bnt__buy" onClick={handleOnClick}>Buy</button>
        </div>

    );
};
