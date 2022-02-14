import React from 'react';
import '../styles/header.css';

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="title">
                    <h1>Beer's Shopping cart</h1>
                </div>
                <button>
                    <i className="fas fa-shopping-cart"></i>
                    <span> Cart</span>
                </button>
            </div>
            <hr />
        </>
    );
};

