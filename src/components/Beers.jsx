import React, { useEffect, useState } from 'react';
import { CallApi } from '../api/fetch';
import { Card } from './Card';
import '../styles/beers.css';

export const Beers = () => {
    const [dates, setDates] = useState([]);

    const getBeers = async () => {
        const data = await CallApi();
        setDates(data);
    }
    useEffect(() => {
        getBeers();
    }, [])

    return (
        <div className = "beers">
            {dates.map(d => <Card key = {d.id} props = {d} />)}
            {/* <Card props={} /> */}
        </div>
    )
};
