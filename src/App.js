import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import Country from './components/Country';
import Toolbar from "./components/Toolbar";

function App() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('asia');
  const [isLoading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    let response = await axios.get(`https://restcountries.com/v3.1/region/${continent}?fields=name,capital,flags,region,subregion,population,borders,languages`).catch(console.error);
    if (response.status === 200) {
      setCountries(response.data);
    }
    setLoading(false);
  }, [continent]);

  useEffect(() => {
    fetchData();
  }, [continent]);

  return (
    <div className='bg-white w-full max-w-[820px] mx-auto space-y-5 px-2 mb-10'>
      <Toolbar
        count={countries.length}
        loading={isLoading}
        continent={continent}
        updateContinent={setContinent}
        reloadData={fetchData}
      />
      <div className="flex flex-wrap items-center justify-around gap-5">
        {!isLoading ? (
          countries.length ? (
            countries.map((country, i) => (
              <Country 
                key={`country-${i}`} 
                {...country}
                flag={country.flags.png}
                borders={country.borders.join(", ")}
                languages={Object.values(country.languages).join(", ")}
              />
            ))
          ) : (
            'No country found'
          )
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
}

export default App;
