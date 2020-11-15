import axios from "axios";

const key = process.env.REACT_APP_KEY;
console.log(key);
const URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchData = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: key,
    },
  });
  return data;
};
