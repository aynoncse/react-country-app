import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Country from './Country';
import style from "./countries.module.css"

const Countries = ({ countries }) => {

    console.log(countries);

    return (
        <div className={style.countries}>
            {
                countries.map((country, index) => {
                    return (
                        <Country key={uuidv4()} country={country} />
                    );
                })
            }
        </div>
    );
}

export default Countries;
