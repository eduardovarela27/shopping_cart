import React from 'react';
import { Beers } from './Beers';
import {Header} from './Header';
import '../styles/container.css'

export const Container = () => {
    return (
        <div className="container">
            <Header/>
            <Beers/>
        </div>        
    );
}
