import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
export default function WeatherCard(props) {
  const imageLink = `https://raw.githubusercontent.com/masterghost2002/monkey_weather/master/src/components/assets/${props.imageType}.png`;
  return (
    <>
      <Container maxWidth="lg" >
        <Grid container spacing={0} columns={1}>
          <Card sx={{ maxWidth: 350, Height: 'max' }}>
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
                  Temperature : {props.temp} C<br />
                  Country : {props.countryName} <br />
                  TimeZone : {props.timeZone} <br />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
