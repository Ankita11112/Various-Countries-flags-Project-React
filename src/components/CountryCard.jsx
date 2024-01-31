import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, {useContext} from 'react';
import "./countrycard.css";
import { Link } from 'react-router-dom';
import { modeContext } from '../App';
const CountryCard = ({country}) => {
  const {darkMode} = useContext(modeContext);
  console.log(darkMode);
  return ( 
    <div>
       {/* className={`${darkMode ? "dark" : " "}`}  */}
        <Card className= {`${darkMode ? "dark" : " "}`} sx={{height:400, width: 320, my:3, mx:2 }}>
        <Link to= {`/${country?.name}`} >
        <CardMedia
        component="img"
        height="195"
        image={country?.flags.svg}
        alt="Paella dish"
      />
        </Link>
      <CardContent>
       <Link to= {`/${country?.name}`} style= {{textDecoration:"none"}} > 
       <Typography variant="h5" color="text.primary">
        Name: {country?.name} 
        </Typography>
       </Link>
        <Typography marginY={1} variant="body2" color="text.primary">
        Population: {country?.population} 
        </Typography>
        <Typography marginY={1} variant="body2" color="text.primary">
        Region: {country?.region} 
        </Typography>
        <Typography marginY={1} variant="body2" color="text.primary">
        Capital: {country?.capital} 
        </Typography>
      </CardContent>
    </Card> 
    </div>
  )
}

export default CountryCard;