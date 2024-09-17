import React from 'react';
import { Card } from 'react-bootstrap';

const Country = ({ country }) => {

    const { name, flags, capital, population } = country;

    return (
        <Card className='h-100'>
            <Card.Img variant="top" src={flags.png} alt={name.common} />
            <Card.Body>
                <h5>Name: {name.common}</h5>
                <h5>Population: {population}</h5>
                <h5>Capital: {capital}</h5>
            </Card.Body>
        </Card>
    );
}

export default Country;
