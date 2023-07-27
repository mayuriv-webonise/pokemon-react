import React from "react";
import PokemonListItem from "./PokemonListItem";
import axios from "axios";

function PokemonList() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchDataFromApi = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);

      setData(response.data.results);
      console.log(response.data.results);
    };

    fetchDataFromApi();
  }, []);
 
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <PokemonListItem name={item.name} url={item.url}/>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonList;
