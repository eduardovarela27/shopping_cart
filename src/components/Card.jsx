import React, { useEffect, useState } from 'react';
import '../styles/card.css';

export const Card = ({ props }) => {
    const { name, description, value, image_url } = props;
    const index = description.indexOf(".");
    const desc = description.substring(0, index);
    const [currentBuy, setCurrentBuy] = useState([]);
    const addCart = (e) => {
        e.preventDefault();
        setCurrentBuy(
            [
                ...currentBuy,
                {
                    product: props.name,
                    quantity: 1,
                    total: props.value
                }
            ]
        );
        console.log(currentBuy);
    }
    
    return (
        <div className="card" key={props.id}>
            <h3>{name}</h3>
            <img src={image_url} alt={name} />
            <p>
                {desc}
                <span> {`${value} $`}</span>
            </p>
            <button className="bnt__buy" onClick={addCart}>Add Cart</button>
        </div>

    );
};
