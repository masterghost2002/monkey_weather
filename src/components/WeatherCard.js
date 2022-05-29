import React, {useEffect, useState, useCallback} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

export default function WeatherCard(props) {
  const  [imageType, setImageType] = useState('Evening');


  const imageLink = `https://raw.githubusercontent.com/masterghost2002/monkey_weather/master/src/components/assets/${imageType}.png`;
  const myDate = props.dateInfo;
  const updateImage = useCallback(()=>{
    const time = new Date(myDate).toLocaleTimeString('en',
    { timeStyle: 'short', time24: true, timeZone: 'UTC' });
    console.log(time);
    if(time >= '6' && time<='9')
      setImageType('Morning');
    else if(time >= '9' && time<='17')
      setImageType('Day');
    else if(time>='17' && time<='20')
      setImageType('Evening');
    else 
      setImageType('Night');
  }, [myDate]);


  useEffect(()=>{
    updateImage();
  }, [imageType, myDate, updateImage]);

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
