import React from "react";
import PokemonDetails from "../components/PokemonDetails";
import Grid from '@mui/material/Grid';

function PokemonDetailsContainer() {
  return (
    <Grid md={8}>
      <PokemonDetails />
    </Grid>
  );
}

export default PokemonDetailsContainer;
