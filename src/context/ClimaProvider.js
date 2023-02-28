import React, { createContext, useState } from 'react';
import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const [resultado, setResultado] = useState({});

  const consumirApi = async datos => {
    try {
      const { ciudad, pais } = datos;

      const API_KEY = '';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}`;

      const {data} = await axios(url);
      setResultado(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        resultado,
        consumirApi,
        setBusqueda,
      }}
    >
      {children}
    </ClimaContext.Provider>
   );
};

export { ClimaProvider };
export default ClimaContext;


