import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Countries from './components/Countries';
import Search from './components/Search';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);


  const handleRemoveCountry = (name) => {
    const filteredData = filteredCountries.filter((country) => country.name.common != name);
    setFilteredCountries(filteredData);
  }

  const handleSearchCountry = (name) => {
    const filteredData = countries.filter((country) =>
      country.name.common.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredCountries(filteredData);
  };

  return (
    <Container className='py-5'>
      <Search onSearchCountry={handleSearchCountry} />
      {isLoading && <h2>Loading..</h2>}

      {error && <h5 className='text-danger'>{error}</h5>}

      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}

    </Container >
  );
}

export default App;
