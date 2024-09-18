import React from 'react';
import style from "./country.module.css"

const Country = ({ country, onRemoveCountry }) => {

    const { name, flags, capital, population } = country;
    const handleRemoveCountry = (name) => {
        onRemoveCountry(name);
    }

    return (
        <article className={style.country}>
            <div>
                <img className={style.flag} src={flags.png} alt={name.common} />
                <h6>Name: {name.common}</h6>
                <h6>Population: {population}</h6>
                <h6>Capital: {capital}</h6>

                <button className='btn btn-danger mt-3 w-100' onClick={() => { handleRemoveCountry(name.common) }}>Remove  Country</button>
            </div>
        </article>
    );
}

export default Country;
