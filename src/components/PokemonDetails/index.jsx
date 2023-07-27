import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import '../../index.css';
import { DetailContext } from "../../context/DetailContext";
import axios from "axios";

function PokemonDetails() {
  const { data } = React.useContext(DetailContext);
  const [details, setDetails] = React.useState({});

  React.useEffect(() => {
    const fetchDataFromApi = async () => {
      const response = await axios.get(data.url);
      setDetails(response.data);
  
    };

    fetchDataFromApi();
  }, [data]);


  return (
    <><Box className='aligncenter'>Pokemon details
    </Box>
      <Card sx={{ boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,1.12)', width: '100%', height: '60vh', padding: '30px' }}>
        <CardMedia
          component="img"
          alt={details.name}
          height="70%"
          image={details.sprites.front_default} />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            ID - {details.id}
          </Typography>
          <Typography variant="h5">
            Name - {details.name}
          </Typography>
          <Typography variant="h5">
            Weight - {details.weight}
          </Typography>
          <Typography variant="h5">
            Height - {details.height}
          </Typography>
        </CardContent>
      </Card></>);
}

export default PokemonDetails;
