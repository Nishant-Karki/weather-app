import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Form,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { FiWind } from "react-icons/fi";
import { BsDropletHalf } from "react-icons/bs";

import "./card.css";

const useStyles = makeStyles({
  root: {
    minHeight: 240,
    minWidth: 250,
  },
  header: {
    alignItems: "center",
    display: "flex",
    height: 40,
    justifyContent: "space-between",
    marginTop: 15,
  },

  location: {
    height: 20,
  },
  media: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 80,
    marginTop: 20,
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

function CardComponent(APIdata) {
  const classes = useStyles();
  const tempConvert = (temp) => {
    const result = temp - 273.15;
    return result.toFixed(1);
  };
  const item = APIdata.APIdata;
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Card className={classes.root}>
          <Container className={classes.header}>
            <form onSubmit={formSubmit}>
              <TextField
                id="standard-basic"
                size="small"
                color="secondary"
                label="Location"
                style={{ color: "black" }}
              />
            </form>
          </Container>
          <CardMedia className={classes.media}>
            {item.weather.map((data) => (
              <img
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
                  {item.wind.speed} km/h
                </Typography>
                <Typography className={classes.weather}>
                  <BsDropletHalf className={classes.icons} />
                  {item.main.humidity}%
                </Typography>
              </div>
            </div>
            <div>
              <Typography variant="h4" component="h3">
                {tempConvert(item.main.feels_like)}&deg;C
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CardComponent;
