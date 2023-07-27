import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import{ DetailContext }from "../../context/DetailContext";

function PokemonListItem({name, url}) {
const { updateData } = React.useContext(DetailContext);

  const handleNameClick = () => {
    updateData({url: url});
  }
  return (

  <Card sx={{margin:'10px', boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,1.12)'}}>
    <CardContent onClick={handleNameClick}>
      {name}
    </CardContent>
  </Card>);
}

export default PokemonListItem;
