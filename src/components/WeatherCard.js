import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
const imageLink = "https://i0.wp.com/codemyui.com/wp-content/uploads/2015/07/animated-weather-icons-in-css.gif?fit=880%2C440&ssl=1";
export default function WeatherCard(props) {
  return (
    <>
    <Container maxWidth="lg">
    <Grid container spacing={0} columns={1}>
    <Card sx={{ maxWidth: 350, maxHeight: 700}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={imageLink}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather Of {props.cityName}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Temperature : {props.temp} C<br/>
            Country : {props.countryName} <br/>
            TimeZone : {props.timeZone} <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Container>
    </>
  );
}
