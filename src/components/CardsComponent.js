import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FiWind } from "react-icons/fi";
import { BsDropletHalf } from "react-icons/bs";

const useStyles = makeStyles({
  header: {
    alignItems: "center",
    display: "flex",
    height: 40,
    fontSize: 22,
    marginTop: 15,
    justifyContent: "center",
  },

  location: {
    height: 20,
  },
  media: {
    height: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  details: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },
  weather: {
    fontSize: 13,
  },
  icons: {
    marginBottom: -1,
    marginRight: 10,
  },
});

function CardsComponent({ weather }) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <Container className={classes.header}>
          {weather.name},{weather.sys.country}
        </Container>
        <CardMedia className={classes.media}>
          {weather.weather.map((data, index) => (
            <img
              key={index}
              src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt="sas"
            />
          ))}
        </CardMedia>
        <CardContent className={classes.details}>
          <div>
            <div>
              <Typography className={classes.weather}>
                <FiWind className={classes.icons} />
                {weather.wind.speed} km / h
              </Typography>
              <Typography className={classes.weather}>
                <BsDropletHalf className={classes.icons} />
                {weather.main.humidity}%
              </Typography>
            </div>
          </div>
          <div>
            <Typography variant="h4" component="h3">
              {Math.round(weather.main.feels_like)}&deg;C
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardsComponent;
