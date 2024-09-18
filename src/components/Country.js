import React from 'react';
import style from "./country.module.css"

const Country = ({ country }) => {

    const { name, flags, capital, population } = country;

    return (
        <article className={style.country}>
            <div>
                <img className={style.flag} src={flags.png} alt={name.common} />
                <h6>Name: {name.common}</h6>
                <h6>Population: {population}</h6>
                <h6>Capital: {capital}</h6>
            </div>
        </article>
    );
}

export default Country;
