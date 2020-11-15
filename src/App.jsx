import React, { useState } from "react";
import { fetchData } from "./api";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import CardsComponent from "./components/CardsComponent";

const useStyles = makeStyles({
  root: {
    minHeight: 240,
    minWidth: 250,
  },
  searchBox: { marginBottom: 10 },
});

function App() {
  const classes = useStyles();
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchData(query);
      setWeather(data);
      setQuery("");
    }
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
      <TextField
        id="standard-basic"
        size="small"
        color="secondary"
        label=" Search Location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ color: "black" }}
        onKeyPress={search}
        className={classes.searchBox}
      />
      {weather.main && <CardsComponent weather={weather} />}
    </Grid>
  );
}

export default App;
