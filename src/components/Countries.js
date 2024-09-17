import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import Country from './Country';

const Countries = ({ countries }) => {

    console.log(countries);

    return (
        <Row className='gy-4'>
            {
                countries.map((country, index) => {
                    return (
                        <Col lg="3" key={uuidv4()} >
                            <Country country={country} />
                        </Col>
                    );
                })
            }
        </Row>
    );
}

export default Countries;
