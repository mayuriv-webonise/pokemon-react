import React from "react";
import PokemonList from "../components/PokemonList";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import '../index.css';

function PokemonListContainer() {
  return (
    <Grid md={8}>
      <Box className='aligncenter'>Pokemon List</Box>
      <PokemonList />
    </Grid>
  );
}

export default PokemonListContainer;
