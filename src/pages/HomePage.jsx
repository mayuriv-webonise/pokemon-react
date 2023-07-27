import React from "react";
import PokemonListContainer from "../containers/PokemonListContainer";
import PokemonDetailsContainer from "../containers/PokemonDetailsContainer";
import Grid from '@mui/material/Grid';

import '../index.css';

function HomePage() {
  return (
    <React.Fragment>
      <Grid container  height='90vh'>
        <Grid md={12} display='flex' justifyContent='center' flexDirection='row' alignItems='center'>
          <Grid item xs={6} md={6} className="aligncenter">
            
            <PokemonListContainer />
          </Grid>
          <Grid item xs={6} md={6} className="aligncenter">
            <PokemonDetailsContainer />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default HomePage;
