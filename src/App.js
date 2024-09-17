import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Countries from './components/Countries';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
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

  return (
    <Container className='py-5'>
      <h4 className='mb-4 text-center'>Country App</h4>

      {isLoading && <h2>Loading..</h2>}

      {error && <h5 className='text-danger'>{error}</h5>}

      {countries && <Countries countries={countries} />}

    </Container >
  );
}

export default App;
