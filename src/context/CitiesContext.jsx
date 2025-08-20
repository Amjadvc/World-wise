import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

//1 create a context
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    //2 pass a context value
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  //3 consuming the values
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("you call useCities outside the provider");
  }
  return context;
}

export { CitiesProvider, useCities };
