import React, { useState, useEffet, useEffect } from 'react';

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
      console.log(data);

    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
